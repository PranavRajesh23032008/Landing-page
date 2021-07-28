const Slides = ({ bgImage, lineOne, lineTwo }) => {
  var Scroll = require("react-scroll");
  var scroller = Scroll.scroller;
  return (
    <div
      className={`starting font-semibold ${bgImage} relative h-screen text-white`}
    >
      <div
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
        className={"absolute lg:bottom-44 w-full bottom-32 text-center"}
      >
        <p className={"text-sm md:text-lg lg:text-xl"}> {lineOne} </p>
        <p className={"text-sm md:text-lg"}> {lineTwo} </p>
        <button
          onClick={() => {
            scroller.scrollTo("PassionateToBringbeautifulTiles", {
              duration: 1500,
              delay: 100,
              smooth: true,
            });
          }}
          className={"mt-10 animate-bounce bg-white p-2 rounded-full"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 font-semibold text-black text-xl"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slides;
