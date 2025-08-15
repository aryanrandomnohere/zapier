/**
 * Lightweight HTTP client to replace axios (saves ~13KB)
 * Provides the same API as axios for easy replacement
 */

interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  withCredentials?: boolean;
  timeout?: number;
}

interface Response<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

class HttpError extends Error {
  status: number;
  statusText: string;
  response?: Response;

  constructor(message: string, status: number, statusText: string, response?: Response) {
    super(message);
    this.status = status;
    this.statusText = statusText;
    this.response = response;
    this.name = 'HttpError';
  }
}

const defaultConfig: RequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
};

async function request<T = any>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
  const mergedConfig = { ...defaultConfig, ...config };
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), mergedConfig.timeout);

  try {
    const fetchOptions: RequestInit = {
      method: mergedConfig.method || 'GET',
      headers: mergedConfig.headers,
      signal: controller.signal,
      credentials: mergedConfig.withCredentials ? 'include' : 'same-origin',
    };

    if (mergedConfig.body && mergedConfig.method !== 'GET') {
      fetchOptions.body = typeof mergedConfig.body === 'string' 
        ? mergedConfig.body 
        : JSON.stringify(mergedConfig.body);
    }

    const response = await fetch(url, fetchOptions);
    clearTimeout(timeoutId);

    let data: T;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = (await response.text()) as unknown as T;
    }

    const result: Response<T> = {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };

    if (!response.ok) {
      throw new HttpError(
        `HTTP Error: ${response.status} ${response.statusText}`,
        response.status,
        response.statusText,
        result
      );
    }

    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error instanceof HttpError) {
      throw error;
    }
    
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new HttpError('Request timeout', 408, 'Request Timeout');
    }
    
    throw new HttpError(
      error instanceof Error ? error.message : 'Unknown error',
      0,
      'Unknown Error'
    );
  }
}

// Axios-compatible API
export const http = {
  async get<T = any>(url: string, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<Response<T>> {
    return request<T>(url, { ...config, method: 'GET' });
  },

  async post<T = any>(url: string, data?: any, config?: Omit<RequestConfig, 'method'>): Promise<Response<T>> {
    return request<T>(url, { ...config, method: 'POST', body: data });
  },

  async put<T = any>(url: string, data?: any, config?: Omit<RequestConfig, 'method'>): Promise<Response<T>> {
    return request<T>(url, { ...config, method: 'PUT', body: data });
  },

  async delete<T = any>(url: string, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<Response<T>> {
    return request<T>(url, { ...config, method: 'DELETE' });
  },

  async patch<T = any>(url: string, data?: any, config?: Omit<RequestConfig, 'method'>): Promise<Response<T>> {
    return request<T>(url, { ...config, method: 'PATCH', body: data });
  },

  // For direct replacement of axios
  request,
};

export default http;
