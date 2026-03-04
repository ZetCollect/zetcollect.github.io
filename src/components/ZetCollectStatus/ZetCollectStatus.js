import { useState, useEffect } from 'react';
import { CheckCircle, Settings, AlertTriangle, XCircle } from 'lucide-react';

const Status = () => {
  const [currentServices, setCurrentServices] = useState([]);
  const [upcomingFeatures, setUpcomingFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchStatusData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://raw.githubusercontent.com/IZSoftware/product-status/refs/heads/main/Zetcollect_status.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      setCurrentServices(data.currentServices || []);
      setUpcomingFeatures(data.upcomingFeatures || []);
      setLastUpdated(new Date());
      
    } catch (err) {
      console.error('Error fetching status data:', err);
      setError(err.message || 'Failed to fetch status data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatusData();
    
    // Optional: Set up periodic refresh (every 5 minutes)
    const intervalId = setInterval(fetchStatusData, 5 * 60 * 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Operational':
        return <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#3d9970' }} strokeWidth={1.5} />;
      case 'Under Maintenance':
        return <Settings className="w-6 h-6 text-blue-600 sm:w-8 sm:h-8" strokeWidth={1.5} />;
      case 'Degraded Performance':
        return <AlertTriangle className="w-6 h-6 text-yellow-600 sm:w-8 sm:h-8" strokeWidth={1.5} />;
      case 'Major Outage':
        return <XCircle className="w-6 h-6 text-red-600 sm:w-8 sm:h-8" strokeWidth={1.5} />;
      default:
        return null;
    }
  };

  // Calculate operational count for current services
  const operationalCount = currentServices.filter(item => item.status === 'Operational').length;
  const totalCount = currentServices.length;
  
  // Calculate maintenance count for upcoming features
  const maintenanceCount = upcomingFeatures.filter(item => item.status === 'Under Maintenance').length;
  const upcomingTotalCount = upcomingFeatures.length;

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-green-500 border-solid rounded-full animate-spin border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading status data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12">
            <div className="p-6 border border-red-200 rounded-lg bg-red-50">
              <h3 className="mb-2 text-lg font-semibold text-red-800">Error Loading Data</h3>
              <p className="mb-4 text-red-600">{error}</p>
              <button 
                onClick={fetchStatusData}
                className="px-4 py-2 text-white transition-colors bg-red-600 rounded hover:bg-red-700"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Status Indicators - Single column on mobile, row on larger screens */}
          <div className="py-6 mb-6 sm:py-10 sm:mb-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 lg:gap-10">
              <div className="flex items-center w-full gap-2 sm:gap-4 sm:w-auto">
                <CheckCircle className="flex-shrink-0 w-7 h-7 sm:w-9 sm:h-9" style={{ color: '#3d9970' }} strokeWidth={1.5} />
                <span className="text-base text-gray-700 sm:text-xl">Operational</span>
              </div>
              <div className="flex items-center w-full gap-2 sm:gap-4 sm:w-auto">
                <Settings className="flex-shrink-0 text-blue-600 w-7 h-7 sm:w-9 sm:h-9" strokeWidth={1.5} />
                <span className="text-base text-gray-700 sm:text-xl">Under Maintenance</span>
              </div>
              <div className="flex items-center w-full gap-2 sm:gap-4 sm:w-auto">
                <AlertTriangle className="flex-shrink-0 text-yellow-600 w-7 h-7 sm:w-9 sm:h-9" strokeWidth={1.5} />
                <span className="text-base text-gray-700 sm:text-xl">Degraded Performance</span>
              </div>
              <div className="flex items-center w-full gap-2 sm:gap-4 sm:w-auto">
                <XCircle className="flex-shrink-0 text-red-600 w-7 h-7 sm:w-9 sm:h-9" strokeWidth={1.5} />
                <span className="text-base text-gray-700 sm:text-xl">Major Outage</span>
              </div>
            </div>
          </div>

          {/* Current Status Banner */}
          <div className="p-4 mb-6 bg-white border-l-4 rounded-lg shadow-sm sm:p-8 sm:mb-8" style={{ borderLeftColor: '#3d9970' }}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Current Status</h2>
                <p className="mt-1 text-sm text-gray-600 sm:text-lg">Last updated: {lastUpdated.toLocaleString()}</p>
              </div>
              <div className="flex items-center self-start gap-2 px-4 py-2 rounded-full sm:gap-3 sm:px-6 sm:py-3 sm:self-auto" style={{ backgroundColor: '#e8f5e9' }}>
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#3d9970' }} strokeWidth={1.5} />
                <span className="text-sm sm:text-base" style={{ color: '#2d7a55' }}>
                  {operationalCount} of {totalCount} Operational
                </span>
              </div>
            </div>
          </div>

          {/* Current Services Table */}
          <div className="mb-10 overflow-hidden bg-white border border-gray-200 shadow-sm sm:mb-12 rounded-xl">
            <div className="px-4 py-4 border-b border-gray-200 sm:px-8 sm:py-5 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl">Current Services</h3>
            </div>
            {/* Table container with horizontal scroll only */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-4 py-4 text-sm tracking-wide text-left text-gray-700 uppercase sm:px-8 sm:py-5 sm:text-base whitespace-nowrap">
                      Service
                    </th>
                    <th scope="col" className="px-4 py-4 text-sm tracking-wide text-center text-gray-700 uppercase sm:px-8 sm:py-5 sm:text-base whitespace-nowrap">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-4 text-sm tracking-wide text-left text-gray-700 uppercase sm:px-8 sm:py-5 sm:text-base whitespace-nowrap">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentServices.map((item, index) => (
                    <tr key={index} className="transition-colors duration-150 hover:bg-gray-50">
                      <td className="px-4 py-4 text-base text-gray-900 sm:px-8 sm:py-5 sm:text-lg whitespace-nowrap">
                        {item.service}
                      </td>
                      <td className="px-4 py-4 sm:px-8 sm:py-5 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          {getStatusIcon(item.status)}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 sm:px-8 sm:py-5 sm:text-base whitespace-nowrap">
                        {item.reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Features Status Banner */}
          <div className="p-4 mb-6 bg-white border-l-4 rounded-lg shadow-sm sm:p-8 sm:mb-8" style={{ borderLeftColor: '#2563eb' }}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Upcoming Features Status</h2>
              </div>
              <div className="flex items-center self-start gap-2 px-4 py-2 rounded-full sm:gap-3 sm:px-6 sm:py-3 sm:self-auto" style={{ backgroundColor: '#eff6ff' }}>
                <Settings className="w-5 h-5 text-blue-600 sm:w-6 sm:h-6" strokeWidth={1.5} />
                <span className="text-sm text-blue-700 sm:text-base">
                  {maintenanceCount} of {upcomingTotalCount} Under Maintenance
                </span>
              </div>
            </div>
          </div>

          {/* Upcoming Features Status Table */}
          <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="px-4 py-4 border-b border-gray-200 sm:px-8 sm:py-5 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl">Upcoming Features</h3>
            </div>
            {/* Table container with horizontal scroll only */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-4 py-4 text-sm tracking-wide text-left text-gray-700 uppercase sm:px-8 sm:py-5 sm:text-base whitespace-nowrap">
                      Feature
                    </th>
                    <th scope="col" className="px-4 py-4 text-sm tracking-wide text-center text-gray-700 uppercase sm:px-8 sm:py-5 sm:text-base whitespace-nowrap">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-4 text-sm tracking-wide text-left text-gray-700 uppercase sm:px-8 sm:py-5 sm:text-base whitespace-nowrap">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {upcomingFeatures.map((item, index) => (
                    <tr key={index} className="transition-colors duration-150 hover:bg-gray-50">
                      <td className="px-4 py-4 text-base text-gray-900 sm:px-8 sm:py-5 sm:text-lg whitespace-nowrap">
                        {item.service}
                      </td>
                      <td className="px-4 py-4 sm:px-8 sm:py-5 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          {getStatusIcon(item.status)}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 sm:px-8 sm:py-5 sm:text-base whitespace-nowrap">
                        {item.reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center sm:mt-8">
            <p className="text-xs text-gray-500 sm:text-base">
              For support inquiries, please contact your system administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;