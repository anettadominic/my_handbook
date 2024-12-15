import { useNavigate } from "react-router-dom";

const Header = ({ headData }) => {
  const navigate = useNavigate();
  
  return (
    headData?.length > 0 && (
      <header className="bg-gray-800 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Left Section: Content List */}
            <div className="flex items-center space-x-4">
              <nav className="flex space-x-6">
                {headData.map((item, key) => (
                  <button
                    key={key}
                    className="text-l font-bold hover:text-gray-300 transition duration-300 ease-in-out"
                    onClick={() => navigate(`/${item?.slug?.current}`)}
                  >
                    {item?.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Section*/}
            <div className="flex items-center space-x-6">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                  <i className="fas fa-search"></i>
                </button>
              </div>

              {/* Profile */}
              <div className="relative">
                <button
                  className="w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white"
                  onClick={() => console.log("Open Profile Menu")}
                >
                  <i className="fas fa-user"></i>
                </button>
                {/* Dropdown Menu (optional) */}
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg hidden group-hover:block">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Profile
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Settings
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
