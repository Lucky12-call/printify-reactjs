import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Navbar() {
  const [howItWorks, setHowItWorks] = useState(false);
  const [services, setServices] = useState(false);
  const [useCases, setUseCases] = useState(false);
  const [needHelp, setNeedHelp] = useState(false);

  return (
    <nav className="h-[70px] flex items-center shadow-md text-[16px] font-normal fixed left-0 right-0 top-0 bg-white">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        {/* logo section  */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt="logo"
            className="h-[50px] w-[135px] inline-block"
          />
        </div>

        {/* links section  */}
        <div className="flex">
          <div className="hidden sm:block sm:ml-6">
            <div className="h-full w-full flex items-center space-x-6">
              <a href="/" className="text-gray-900 ">
                Catalog
              </a>

              {/* How it works */}
              <div
                className="relative h-full"
                onMouseEnter={() => setHowItWorks(!howItWorks)}
                onMouseLeave={() => setHowItWorks(!howItWorks)}
              >
                <a
                  href="#"
                  className="text-gray-900 flex gap-1 items-center h-[9vh] hover:text-[#39B75D] transition-colors"
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
                  className={`origin-top-right absolute px-4 py-5  left-0 w-52 rounded-md shadow-lg bg-white ${
                    howItWorks ? "block" : "hidden"
                  }`}
                >
                  <a
                    href="/dropdown/item1"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors text-[1rem]"
                  >
                    How Printify Works
                  </a>
                  <a
                    href="/dropdown/item2"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Print On Demand
                  </a>
                  <a
                    href="/dropdown/item3"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Printify Quality Promise
                  </a>
                  <a
                    href="/dropdown/item3"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    What to Sell?
                  </a>
                </div>
              </div>

              <a
                href="/about"
                className="text-gray-900 hover:text-[#39B75D] transition-colors"
              >
                Pricing
              </a>
              <a
                href="/services"
                className="text-gray-900 hover:text-[#39B75D] transition-colors"
              >
                Blog
              </a>

              {/* Services */}
              <div
                className="relative h-full"
                onMouseEnter={() => setServices(!services)}
                onMouseLeave={() => setServices(!services)}
              >
                <a
                  href="#"
                  className="text-gray-900 flex gap-1 items-center h-[9vh] hover:text-[#39B75D] transition-colors"
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
                  className={`origin-top-right absolute px-4 py-5  left-0 w-52 rounded-md shadow-lg bg-white ${
                    services ? "block" : "hidden"
                  }`}
                >
                  <a
                    href="/dropdown/item1"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors text-[1rem]"
                  >
                    Printify Studio
                  </a>
                  <a
                    href="/dropdown/item2"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Printify Express Delivery
                  </a>
                  <a
                    href="/dropdown/item3"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Transfer Products
                  </a>
                  <a
                    href="/dropdown/item3"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Order In Bulk
                  </a>
                  <a
                    href="/dropdown/item3"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Experts Program
                  </a>
                </div>
              </div>

              {/* Use-cases */}
              <div
                className="relative h-full"
                onMouseEnter={() => setUseCases(!useCases)}
                onMouseLeave={() => setUseCases(!useCases)}
              >
                <a
                  href="#"
                  className="text-gray-900 flex gap-1 items-center h-[9vh] hover:text-[#39B75D] transition-colors"
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
                  className={`origin-top-right absolute px-4 py-5  left-0 w-52 rounded-md shadow-lg bg-white ${
                    useCases ? "block" : "hidden"
                  }`}
                >
                  <a
                    href="/dropdown/item1"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors text-[1rem]"
                  >
                    Merch for Fans
                  </a>
                  <a
                    href="/dropdown/item2"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Merch eCommerce
                  </a>
                  <a
                    href="/dropdown/item3"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Merch for Enterprises
                  </a>
                  <a
                    href="/dropdown/item3"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Grow Your Store
                  </a>
                </div>
              </div>

              {/* Need Help? */}
              <div
                className="relative h-full"
                onMouseEnter={() => setNeedHelp(!needHelp)}
                onMouseLeave={() => setNeedHelp(!needHelp)}
              >
                <a
                  href="#"
                  className="text-gray-900 flex gap-1 items-center h-[9vh] hover:text-[#39B75D] transition-colors"
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
                  className={`origin-top-right absolute px-4 py-5  left-0 w-52 rounded-md shadow-lg bg-white ${
                    needHelp ? "block" : "hidden"
                  }`}
                >
                  <a
                    href="/dropdown/item1"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors text-[1rem]"
                  >
                    Help Center
                  </a>
                  <a
                    href="/dropdown/item2"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    Contacts
                  </a>
                  <a
                    href="/dropdown/item3"
                    className="block text-gray-900 hover:text-[#39B75D] transition-colors mt-4 text-[1rem]"
                  >
                    My Requests
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* button section  */}
        <div className="flex gap-4 ml-16">
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
