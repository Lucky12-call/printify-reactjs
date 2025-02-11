const Footer = () => {
  return (
    <footer className="h-32 w-full flex flex-col gap-2 md:gap-4 justify-center items-center bg-gray-100 text-gray-500 mt-5 md:mt-20 max-md:px-5">
      <div className="inline-flex items-center gap-5 ">
        <a href="#" className="text-xs">
          Intellectual Property Policy
        </a>
        <a href="#" className="text-xs">
          Terms of Service
        </a>
        <a href="#" className="text-xs">
          Privacy Policy
        </a>
        <a href="#" className="text-xs">
          Security
        </a>
      </div>
      <p className="text-sm text-center text-gray-600">
        &copy; 2024 Printify, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
