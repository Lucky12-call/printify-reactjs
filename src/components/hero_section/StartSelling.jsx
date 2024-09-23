const StartSelling = () => {
  return (
    <div>
      <div className="h-[85vh] mb-20 mt-32 px-5 relative">
        {/* under section  */}
        <div className="h-full w-full  rounded-3xl bg-[#203741] text-white px-28 py-20">
          <div className="flex flex-col gap-7 w-1/2 pr-28">
            <h1 className="text-4xl font-semibold">Make Money, Risk-Free</h1>

            <p className="font-normal">
              You pay for fulfillment only when you make a sale
            </p>

            <div className="h-60 w-96 flex flex-col gap-6 rounded-2xl bg-[#17262b] p-10">
              <div className="flex justify-between items-center font-semibold">
                <span>You sell a t-shirt</span>
                <span>$30</span>
              </div>

              <div className="flex justify-between items-center font-semibold mb-2">
                <span>You pay for its production</span>
                <span>$12</span>
              </div>

              <hr />
              <div className="flex justify-between items-center text-xl font-semibold text-green-500">
                <span>Your profit</span>
                <span>$ 80</span>
              </div>
            </div>
            <div>
              <button className="px-5 py-1.5 rounded-sm bg-green-500 ">
                Start selling
              </button>
            </div>

            <p className="text-sm text-gray-300">
              100% Free to use · 900+ Products · Largest print network
            </p>
          </div>
        </div>

        {/* upper section  */}
        <div className="min-h-[108%] w-[550px] rounded-3xl absolute right-0 bottom-0">
          <img
            src="girl-svg.png"
            alt="girl-img"
            className="h-full w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default StartSelling;
