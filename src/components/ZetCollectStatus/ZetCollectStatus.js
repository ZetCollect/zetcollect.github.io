import { useState } from 'react';
import { CheckCircle, Settings, AlertTriangle, XCircle } from 'lucide-react';
import statusData from '../../data/StatusData.json';

const Status = () => {
  const [currentServices] = useState(statusData.currentServices);
  const [upcomingFeatures] = useState(statusData.upcomingFeatures);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Operational':
        return <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#3d9970' }} strokeWidth={1.5} />;
      case 'Under Maintenance':
        return <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" strokeWidth={1.5} />;
      case 'Degraded Performance':
        return <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" strokeWidth={1.5} />;
      case 'Major Outage':
        return <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" strokeWidth={1.5} />;
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Status Indicators - Single column on mobile, row on larger screens */}
          <div className="py-6 sm:py-10 mb-6 sm:mb-8">
            <div className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-4 sm:gap-6 lg:gap-10">
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <CheckCircle className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0" style={{ color: '#3d9970' }} strokeWidth={1.5} />
                <span className="text-base sm:text-xl text-gray-700">Operational</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <Settings className="text-blue-600 w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base sm:text-xl text-gray-700">Under Maintenance</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <AlertTriangle className="text-yellow-600 w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base sm:text-xl text-gray-700">Degraded Performance</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <XCircle className="text-red-600 w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base sm:text-xl text-gray-700">Major Outage</span>
              </div>
            </div>
          </div>

          {/* Current Status Banner */}
          <div className="p-4 sm:p-8 mb-6 sm:mb-8 bg-white border-l-4 rounded-lg shadow-sm" style={{ borderLeftColor: '#3d9970' }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Current Status</h2>
                <p className="text-sm sm:text-lg text-gray-600 mt-1">Last updated: {new Date().toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full self-start sm:self-auto" style={{ backgroundColor: '#e8f5e9' }}>
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#3d9970' }} strokeWidth={1.5} />
                <span className="text-sm sm:text-base" style={{ color: '#2d7a55' }}>
                  {operationalCount} of {totalCount} Operational
                </span>
              </div>
            </div>
          </div>

          {/* Current Services Table */}
          <div className="mb-10 sm:mb-12 bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
            <div className="px-4 sm:px-8 py-4 sm:py-5 border-b border-gray-200 bg-gray-50">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Current Services</h3>
            </div>
            {/* Table container with horizontal scroll only */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base tracking-wide text-left text-gray-700 uppercase whitespace-nowrap">
                      Service
                    </th>
                    <th scope="col" className="px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base tracking-wide text-center text-gray-700 uppercase whitespace-nowrap">
                      Status
                    </th>
                    <th scope="col" className="px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base tracking-wide text-left text-gray-700 uppercase whitespace-nowrap">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentServices.map((item, index) => (
                    <tr key={index} className="transition-colors duration-150 hover:bg-gray-50">
                      <td className="px-4 sm:px-8 py-4 sm:py-5 text-base sm:text-lg text-gray-900 whitespace-nowrap">
                        {item.service}
                      </td>
                      <td className="px-4 sm:px-8 py-4 sm:py-5 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          {getStatusIcon(item.status)}
                        </div>
                      </td>
                      <td className="px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base text-gray-600 whitespace-nowrap">
                        {item.reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Features Status Banner */}
          <div className="p-4 sm:p-8 mb-6 sm:mb-8 bg-white border-l-4 rounded-lg shadow-sm" style={{ borderLeftColor: '#2563eb' }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Upcoming Features Status</h2>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full self-start sm:self-auto" style={{ backgroundColor: '#eff6ff' }}>
                <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" strokeWidth={1.5} />
                <span className="text-sm sm:text-base text-blue-700">
                  {maintenanceCount} of {upcomingTotalCount} Under Maintenance
                </span>
              </div>
            </div>
          </div>

          {/* Upcoming Features Status Table */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
            <div className="px-4 sm:px-8 py-4 sm:py-5 border-b border-gray-200 bg-gray-50">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Upcoming Features</h3>
            </div>
            {/* Table container with horizontal scroll only */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base tracking-wide text-left text-gray-700 uppercase whitespace-nowrap">
                      Feature
                    </th>
                    <th scope="col" className="px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base tracking-wide text-center text-gray-700 uppercase whitespace-nowrap">
                      Status
                    </th>
                    <th scope="col" className="px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base tracking-wide text-left text-gray-700 uppercase whitespace-nowrap">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {upcomingFeatures.map((item, index) => (
                    <tr key={index} className="transition-colors duration-150 hover:bg-gray-50">
                      <td className="px-4 sm:px-8 py-4 sm:py-5 text-base sm:text-lg text-gray-900 whitespace-nowrap">
                        {item.service}
                      </td>
                      <td className="px-4 sm:px-8 py-4 sm:py-5 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          {getStatusIcon(item.status)}
                        </div>
                      </td>
                      <td className="px-4 sm:px-8 py-4 sm:py-5 text-sm sm:text-base text-gray-600 whitespace-nowrap">
                        {item.reason}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-base text-gray-500">
              For support inquiries, please contact your system administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;