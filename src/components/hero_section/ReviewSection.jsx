import Swapper from "./Swapper";

const ReviewSection = () => {
  return (
    <>
      <div className="bg-clipPath2 h-[130vh] bg-gray-100">
        <div className="h-full w-[80%] mx-auto ">
          <div className="flex flex-col">
            <div className="h-full w-full flex justify-start gap-24 pt-36">
              <h1 className="h-44 w-96 text-4xl font-semibold leading-normal">
                Trusted by over 8M sellers around the world
              </h1>
              <p className="h-44 w-96 font-normal leading-6">
                Whether you are just getting started or run an enterprise-level
                e-commerce business, we do everything we can to ensure a
                positive merchant experience.
              </p>
            </div>
            </div>
            <div className="mt-12">
            <Swapper />
            </div>
            </div>
            </div>
    </>
  );
};

export default ReviewSection;
