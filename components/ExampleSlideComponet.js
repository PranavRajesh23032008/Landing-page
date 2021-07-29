const ExampleSlidesComponent = ({
  mainImage,
  headOne,
  headTwo,
  description,
  centerImage,
}) => {
  return (
    <div
      className={`${mainImage} brightness-90 starting flex items-center text-white relative h-[50vh] lg:h-[70vh] px-24 lg:px-40`}
    >
      <div className={"md:w-1/2 w-full text-left"}>
        <div className={"md:text-5xl text-5xl font-bold sm:text-6xl"}>
          {headOne}
        </div>
        <div className={"md:text-xl text-xl sm:text-2xl font-semibold"}>
          {headTwo}
        </div>
        <div
          className={
            "md:text-md sm:text-md md:text-sm text-sm  font-semibold mt-7 md:w-full w-5/6"
          }
        >
          {description}
        </div>
        <button
          className={"py-2 px-8 bg-white border-2 text-black font-95bold mt-6"}
        >
          VIEW MORE
        </button>
      </div>
      <div className={"hidden md:inline-flex"}>
        <img
          className={
            "ml-20 h-[30vh] w-[40vh] rounded-[5vh] brightness-125 shadow-2xl lg:h-[55vh]  lg:w-[75vh]"
          }
          src={centerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default ExampleSlidesComponent;
