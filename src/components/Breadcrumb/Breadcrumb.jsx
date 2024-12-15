import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  
  // Generate breadcrumb items from the path
  const breadcrumbItems = location.pathname
    .split("/")
    .filter(Boolean)
    .map((path, index, arr) => ({
      name: path.replace(/-/g, " "), // Converts slug-like paths to readable text
      path: `/${arr.slice(0, index + 1).join("/")}`, // Builds the breadcrumb link path
    }));

    return (
        <nav className="flex flex-wrap items-center space-x-2 mb-6 bg-gray-50 p-3 rounded-lg shadow-md border border-gray-200">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all duration-200"
        >
          Home
        </Link>
        {breadcrumbItems.map((item, index) => (
          <div key={item.path} className="flex items-center space-x-2">
            <span className="text-gray-400">/</span>
            {index === breadcrumbItems.length - 1 ? (
              <span className="inline-block px-4 py-2 bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                {item.name}
              </span>
            ) : (
              <Link
                to={item.path}
                className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-200 transition-all duration-200"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
      
      );
    };

export default Breadcrumb;
