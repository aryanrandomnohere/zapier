  
// Icon cache for better performance
const iconCache = new Map<string, React.ComponentType<any>>();

// Icon loader utility for optimized imports
export const createLazyIcon = (libraryName: string, iconName: string) => {
  const cacheKey = `${libraryName}-${iconName}`;
  
  if (iconCache.has(cacheKey)) {
    return iconCache.get(cacheKey)!;
  }

  const LazyIcon = lazy(async () => {
    try {
      let module;
      switch (libraryName) {
        case 'lucide-react':
          module = await import('lucide-react');
          break;
        case 'react-icons/bs':
          module = await import('react-icons/bs');
          break;
        case 'react-icons/io5':
          module = await import('react-icons/io5');
          break;
        case 'react-icons/rx':
          module = await import('react-icons/rx');
          break;
        case 'react-icons/md':
          module = await import('react-icons/md');
          break;
        case 'react-icons/fi':
          module = await import('react-icons/fi');
          break;
        default:
          throw new Error(`Unsupported icon library: ${libraryName}`);
      }
      
      const IconComponent = (module as any)[iconName];
      if (!IconComponent) {
        throw new Error(`Icon ${iconName} not found in ${libraryName}`);
      }
      
      return { default: IconComponent };
    } catch (error) {
      console.error(`Failed to load icon ${iconName} from ${libraryName}:`, error);
      // Return a fallback component
      return {
        default: ({ size = 18, ...props }: any) => {
          return (
            <div
              style={{ width: size, height: size }}
              className="bg-gray-300 rounded animate-pulse"
              {...props}
            />
          );
        }
      };
    }
  });

  iconCache.set(cacheKey, LazyIcon);
  return LazyIcon;
};

// Specific helpers for commonly used icon libraries
export const createLucideIcon = (iconName: string) => createLazyIcon('lucide-react', iconName);
export const createBsIcon = (iconName: string) => createLazyIcon('react-icons/bs', iconName);
export const createIo5Icon = (iconName: string) => createLazyIcon('react-icons/io5', iconName);
export const createRxIcon = (iconName: string) => createLazyIcon('react-icons/rx', iconName);
export const createMdIcon = (iconName: string) => createLazyIcon('react-icons/md', iconName);
export const createFiIcon = (iconName: string) => createLazyIcon('react-icons/fi', iconName);
