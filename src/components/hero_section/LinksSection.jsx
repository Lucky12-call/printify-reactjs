import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaTiktok,
} from "react-icons/fa";

const LinksSection = () => {
  return (
    <>
      <div className="flex-shrink-0 flex justify-between items-center mt-44">
        <img
          src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
          alt="logo"
          className="h-[50px] w-[135px] inline-block"
        />

        {/* social media icons */}
        <div className="flex items-center gap-4">
          <button>
            <FaFacebookF
              size={32}
              color="white"
              className="p-1.5 rounded-full bg-green-500"
            />
          </button>
          <button>
            <FaInstagram
              size={32}
              color="white"
              className="p-1.5 rounded-full bg-green-500"
            />
          </button>
          <button>
            <FaLinkedinIn
              size={32}
              color="white"
              className="p-1.5 rounded-full bg-green-500"
            />
          </button>
          <button>
            <FaTwitter
              size={32}
              color="white"
              className="p-1.5 rounded-full bg-green-500"
            />
          </button>
          <button>
            <FaYoutube
              size={32}
              color="white"
              className="p-1.5 rounded-full bg-green-500"
            />
          </button>

          <button>
            <FaTiktok
              size={32}
              color="white"
              className="p-1.5 rounded-full bg-green-500"
            />
          </button>
          <button>
            <FaDiscord
              size={32}
              color="white"
              className="p-1.5 rounded-full bg-green-500"
            />
          </button>
        </div>
      </div>

      {/* links section  */}
      <div className="grid grid-flow-col grid-cols-4 gap-48 mt-24 px-5 text-sm font-light">
        {/* column-1  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Integrations</h3>

          <a href="#">Shopify</a>
          <a href="#">Etsy</a>
          <a href="#">eBay</a>
          <a href="#">Amazon</a>
          <a href="#">TikTok Shop</a>
          <a href="#">PrestaShop</a>
          <a href="#">BigCommerce</a>
          <a href="#">Wix</a>
          <a href="#">WooCommerce</a>
          <a href="#">Squarespace</a>
          <a href="#">Printify API</a>
          <a href="#">Printify Pop-Up Store</a>
          <a href="#">Shutterstock</a>
        </div>

        {/* column-2  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Discover</h3>

          <a href="#">Blog</a>
          <a href="#">Guides</a>
          <a href="#">Products</a>
          <a href="#">Etsy print-on-demand</a>
          <a href="#">Shopify print-on-demand</a>
          <a href="#">Woocommerce print-on-demand</a>
          <a href="#">Wix print-on-demand</a>
          <a href="#">Squarespace print-on-demand</a>
          <a href="#">Make Your Own Shirt</a>
          <a href="#">Brands</a>
          <a href="#">Pricing</a>
          <a href="#">Shipping Rates</a>
          <a href="#">Mockup Generator</a>
        </div>

        {/* column-3  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Start selling</h3>

          <a href="#">Custom T-shirts</a>
          <a href="#">Custom Hoodies</a>
          <a href="#">Custom Mugs</a>
          <a href="#">Custom Socks</a>
          <a href="#">Custom Backpacks</a>
          <a href="#">Custom Branding</a>
          <a href="#">Sell on Etsy</a>
          <a href="#">Sell on Social Media</a>
          <a href="#">Free T-shirt Designs</a>
          <a href="#">Custom Products</a>
          <a href="#">Custom All-Over-Print Hoodies</a>
          <a href="#">Start a Clothing Line</a>
          <a href="#">Start POD Business</a>
          <a href="#">Bulk Orders</a>
          <a href="#">Transfering To Printify</a>
        </div>

        {/* column-4  */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Printify</h3>

          <a href="#">Print on Demand</a>
          <a href="#">Print Providers</a>
          <a href="#">Experts Program</a>
          <a href="#">Printify Express Delivery</a>
          <a href="#">Become a Partner</a>
          <a href="#">About</a>
          <a href="#">Printify Quality Promise</a>
          <a href="#">Jobs</a>
          <a href="#">Webinars</a>
          <a href="#">Printing Profits Podcast</a>
          <a href="#">Contact Us</a>
          <a href="#">Affiliate</a>
          <a href="#">Contact Sales</a>
          <a href="#">POD Glossary</a>
          <a href="#">Network Fulfillment Status</a>
          <a href="#">Merchant Protection</a>
          <a href="#">Security</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </>
  );
};

export default LinksSection;
