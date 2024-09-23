const Features = () => {
  return (
    <>
      <div className="mt-20">
        <div className="flex items-center justify-around">
          <div className="w-[350px] p-2">
            <img
              src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
              alt="higher-profits-img"
              className="h-32 w-32 rounded-full"
            />
            <h1 className="text-2xl font-semibold mt-10">Higher Profits</h1>
            <p className="mt-7 font-normal">
              We offer some of the lowest prices in the industry because print
              providers continuously compete to win your business.
            </p>
          </div>

          <div className="w-[350px] p-2">
            <img
              src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
              alt="higher-profits-img"
              className="h-32 w-32 rounded-full"
            />
            <h1 className="text-2xl font-semibold mt-10">Robust Scaling</h1>
            <p className="mt-7 font-normal">
              Easily handle peak holiday seasons, with our wide network of
              partners and automatic routing functionality.
            </p>
          </div>

          <div className="w-[350px] p-2">
            <img
              src="https://printify.com/pfh/assets/legacy/best-selection.svg"
              alt="higher-profits-img"
              className="h-32 w-32 rounded-full"
            />
            <h1 className="text-2xl font-semibold mt-10">Best Selection</h1>
            <p className="mt-7 font-normal">
              With 900+ products and top quality brands, you can choose the best
              products for your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
