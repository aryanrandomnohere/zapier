import React, { useState, useEffect } from 'react';
import { Search, MoreHorizontal, ChevronRight } from 'lucide-react';

// TypeScript interfaces
interface RecordMetadata {
  id: string;
  type: 'modified' | 'original';
  createdAt: string;
  pulledAt: string;
  title: string;
}

interface ApiResponse {
  records: RecordMetadata[];
  total: number;
  lastUpdated: string;
}

interface RecordItemProps {
  record: RecordMetadata;
  onRecordClick: (record: RecordMetadata) => void;
}

// Individual Record Item Component
const RecordItem: React.FC<RecordItemProps> = ({ record, onRecordClick }) => {
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'just now';
    if (diffInHours === 1) return '1 hour ago';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const isModified = record.type === 'modified';

  return (
    <div 
      className={`border border-gray-200 rounded-lg p-2 mb-1.5 cursor-pointer text-sm hover:bg-gray-50 transition-colors ${
        isModified ? 'bg-blue-50 border-blue-200' : 'bg-white'
      }`}
      onClick={() => onRecordClick(record)}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className={`text-xs font-bold ${isModified ? 'text-blue-900' : 'text-gray-900'}`}>
              {record.title}
            </h3>
            {isModified && (
              <button className="p-1 hover:bg-blue-100 rounded">
                <MoreHorizontal className="w-4 h-4 text-blue-600" />
              </button>
            )}
          </div>
          <p className={`text-xs mt-0.5 ${isModified ? 'text-blue-700' : 'text-gray-600'}`}>
            {isModified 
              ? `created ${getTimeAgo(record.createdAt)}`
              : `original record pulled on ${getTimeAgo(record.pulledAt)}`
            }
          </p>
        </div>
        <ChevronRight className={`w-5 h-5 ${isModified ? 'text-blue-600' : 'text-gray-400'}`} />
      </div>
    </div>
  );
};

// Main Records Interface Component
const TriggerData: React.FC = () => {
  const [records, setRecords] = useState<RecordMetadata[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Mock API call function
  const fetchRecords = async (): Promise<ApiResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data that matches the screenshot
    const mockRecords: RecordMetadata[] = [
      {
        id: '1',
        type: 'modified',
        title: 'Modified Record',
        createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
        pulledAt: new Date().toISOString()
      },
      {
        id: '2',
        type: 'original',
        title: 'request E',
        createdAt: new Date().toISOString(),
        pulledAt: new Date().toISOString()
      },
      {
        id: '3',
        type: 'original',
        title: 'request D',
        createdAt: new Date().toISOString(),
        pulledAt: new Date().toISOString()
      },
      // {
      //   id: '4',
      //   type: 'original',
      //   title: 'request C',
      //   createdAt: new Date().toISOString(),
      //   pulledAt: new Date().toISOString()
      // },
      // {
      //   id: '5',
      //   type: 'original',
      //   title: 'request B',
      //   createdAt: new Date().toISOString(),
      //   pulledAt: new Date().toISOString()
      // },
      // {
      //   id: '6',
      //   type: 'original',
      //   title: 'request A',
      //   createdAt: new Date().toISOString(),
      //   pulledAt: new Date().toISOString()
      // }
    ];

    return {
      records: mockRecords,
      total: mockRecords.length,
      lastUpdated: new Date().toISOString()
    };
  };

  // Handle finding new records
  const handleFindNewRecords = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Make API call to xyz endpoint
      const response = await fetchRecords();
      setRecords(response.records);
    } catch (err) {
      setError('Failed to fetch records. Please try again.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle record click
  const handleRecordClick = (record: RecordMetadata) => {
    console.log('Record clicked:', record);
    // Add your navigation/modal logic here
  };

  // Filter records based on search term
  const filteredRecords = records.filter(record =>
    record.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Load initial data
  useEffect(() => {
    handleFindNewRecords();
  }, []);

  return (
    <div className="flex flex-col h-full overflow-hidden bg-white text-xs">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Find New ds Button */}
      <div className="text-sm p-5 border-b border-gray-200">
        <button
          onClick={handleFindNewRecords}
          disabled={loading}
          className="w-full bg-white border border-gray-600 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Finding Records...' : 'Find new records'}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mx-4 mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Records List */}
      <div className="flex-1 px-4 py-4  overflow-y-auto">
        {filteredRecords.length === 0 && !loading ? (
          <div className="text-center text-gray-500 py-8">
            {searchTerm ? 'No records match your search.' : 'No records found.'}
          </div>
        ) : (
          filteredRecords.map((record) => (
            <RecordItem
              key={record.id}
              record={record}
              onRecordClick={handleRecordClick}
            />
          ))
        )}
        
        {loading && (
          <div className="text-center text-gray-500 py-8">
            Loading records...
          </div>
        )}
      </div>
    </div>
  );
};

export default TriggerData;