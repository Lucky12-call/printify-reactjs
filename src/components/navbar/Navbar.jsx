import { useState } from "react";
import { MdOutlineArrowDropDown, MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const [howItWorks, setHowItWorks] = useState(false);
  const [services, setServices] = useState(false);
  const [useCases, setUseCases] = useState(false);
  const [needHelp, setNeedHelp] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-16 md:h-20 flex items-center shadow-md text-[16px] font-normal fixed left-0 right-0 top-0 bg-white z-50">
      <div className="w-full md:w-[80%] mx-auto flex items-center justify-between max-md:px-5">
        {/* logo section */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src="logo.png"
            alt="logo"
            className="h-16 md:h-20 inline-block"
          />
        </div>

        {/* hamburger menu for mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-900">
            {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        {/* links section */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-6 absolute sm:static top-[70px] left-0 right-0 bg-white shadow-md sm:shadow-none z-40`}
        >
          <div className="flex flex-col sm:flex-row sm:ml-6 gap-5">
            <a
              href="/"
              className="text-gray-900 flex gap-1 items-center p-4 sm:p-0 sm:h-[9vh] hover:text-[#39B75D] transition-colors"
            >
              Catalog
            </a>

            {/* How it works */}
            <div
              className="relative"
              onMouseEnter={() => setHowItWorks(true)}
              onMouseLeave={() => setHowItWorks(false)}
              onClick={() => setHowItWorks(!howItWorks)}
            >
              <a
                href="#"
                className="text-gray-900 flex gap-1 items-center p-4 sm:p-0 sm:h-[9vh] hover:text-[#39B75D] transition-colors"
              >
                How it works
                <MdOutlineArrowDropDown
                  size={22}
                  className={`${
                    howItWorks ? "rotate-180" : "rotate-0"
                  } transition-transform duration-500`}
                />
              </a>
              <div
                className={`${
                  howItWorks ? "block" : "hidden"
                } sm:absolute sm:origin-top-right sm:left-0 sm:w-52 sm:rounded-md sm:shadow-lg bg-white sm:px-4 sm:py-5`}
              >
                <a
                  href="/dropdown/item1"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-0 text-[1rem]"
                >
                  How Printify Works
                </a>
                <a
                  href="/dropdown/item2"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Print On Demand
                </a>
                <a
                  href="/dropdown/item3"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Printify Quality Promise
                </a>
                <a
                  href="/dropdown/item3"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  What to Sell?
                </a>
              </div>
            </div>

            <a
              href="/about"
              className="text-gray-900 flex gap-1 items-center p-4 sm:p-0 sm:h-[9vh] hover:text-[#39B75D] transition-colors"
            >
              Pricing
            </a>
            <a
              href="/services"
              className="text-gray-900 flex gap-1 items-center p-4 sm:p-0 sm:h-[9vh] hover:text-[#39B75D] transition-colors"
            >
              Blog
            </a>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setServices(true)}
              onMouseLeave={() => setServices(false)}
              onClick={() => setServices(!services)}
            >
              <a
                href="#"
                className="text-gray-900 flex gap-1 items-center p-4 sm:p-0 sm:h-[9vh] hover:text-[#39B75D] transition-colors"
              >
                Services
                <MdOutlineArrowDropDown
                  size={22}
                  className={`${
                    services ? "rotate-180" : "rotate-0"
                  } transition-transform duration-500`}
                />
              </a>
              <div
                className={`${
                  services ? "block" : "hidden"
                } sm:absolute sm:origin-top-right sm:left-0 sm:w-52 sm:rounded-md sm:shadow-lg bg-white sm:px-4 sm:py-5`}
              >
                <a
                  href="/dropdown/item1"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-0 text-[1rem]"
                >
                  Printify Studio
                </a>
                <a
                  href="/dropdown/item2"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Printify Express Delivery
                </a>
                <a
                  href="/dropdown/item3"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Transfer Products
                </a>
                <a
                  href="/dropdown/item3"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Order In Bulk
                </a>
                <a
                  href="/dropdown/item3"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Experts Program
                </a>
              </div>
            </div>

            {/* Use-cases */}
            <div
              className="relative"
              onMouseEnter={() => setUseCases(true)}
              onMouseLeave={() => setUseCases(false)}
              onClick={() => setUseCases(!useCases)}
            >
              <a
                href="#"
                className="text-gray-900 flex gap-1 items-center p-4 sm:p-0 sm:h-[9vh] hover:text-[#39B75D] transition-colors"
              >
                Use-cases
                <MdOutlineArrowDropDown
                  size={22}
                  className={`${
                    useCases ? "rotate-180" : "rotate-0"
                  } transition-transform duration-500`}
                />
              </a>
              <div
                className={`${
                  useCases ? "block" : "hidden"
                } sm:absolute sm:origin-top-right sm:left-0 sm:w-52 sm:rounded-md sm:shadow-lg bg-white sm:px-4 sm:py-5`}
              >
                <a
                  href="/dropdown/item1"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-0 text-[1rem]"
                >
                  Merch for Fans
                </a>
                <a
                  href="/dropdown/item2"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Merch eCommerce
                </a>
                <a
                  href="/dropdown/item3"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Merch for Enterprises
                </a>
                <a
                  href="/dropdown/item3"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Grow Your Store
                </a>
              </div>
            </div>

            {/* Need Help? */}
            <div
              className="relative"
              onMouseEnter={() => setNeedHelp(true)}
              onMouseLeave={() => setNeedHelp(false)}
              onClick={() => setNeedHelp(!needHelp)}
            >
              <a
                href="#"
                className="text-gray-900 flex gap-1 items-center p-4 sm:p-0 sm:h-[9vh] hover:text-[#39B75D] transition-colors"
              >
                Need Help?
                <MdOutlineArrowDropDown
                  size={22}
                  className={`${
                    needHelp ? "rotate-180" : "rotate-0"
                  } transition-transform duration-500`}
                />
              </a>
              <div
                className={`${
                  needHelp ? "block" : "hidden"
                } sm:absolute sm:origin-top-right sm:left-0 sm:w-52 sm:rounded-md sm:shadow-lg bg-white sm:px-4 sm:py-5`}
              >
                <a
                  href="/dropdown/item1"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-0 text-[1rem]"
                >
                  Help Center
                </a>
                <a
                  href="/dropdown/item2"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  Contacts
                </a>
                <a
                  href="/dropdown/item3"
                  className="block text-gray-900 hover:text-[#39B75D] transition-colors p-4 sm:p-0 sm:mt-4 text-[1rem]"
                >
                  My Requests
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* button section */}
        <div className="hidden sm:flex gap-4 ml-16">
          <button className="px-4 py-1.5 border-2 rounded-sm font-bold hover:text-[#39B75D] transition-colors">
            Log in
          </button>
          <button className="px-4 py-1.5 border-2 rounded-sm font-bold bg-[#39B75D] text-white hover:bg-green-600 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
