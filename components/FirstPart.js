import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slides from "./Slides";
const SlideOne = () => {
  return (
    <div data-aos="fade-right">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={6000}
      >
        <Slides
          lineOne={"ideal for interiors, the metal effect is perfect for floor"}
          lineTwo={"and wall Porcelain collection to any surface"}
          bgImage={"startingOne"}
        />
        <Slides
          lineOne={"No matter what the look or space,"}
          lineTwo={"a wood tile finish is the most aesthetic option for you"}
          bgImage={"startingTwo"}
        />
        <Slides
          lineOne={"Exuberate your space with stylish Carving finish,"}
          lineTwo={"helping to create a memeorable ambiance to live upon"}
          bgImage={"startingThree"}
        />
        <Slides
          lineOne={"Combine the charm of refine and"}
          lineTwo={"natural effects with different design & texture"}
          bgImage={"startingFour"}
        />
        <Slides
          lineOne={"Style never goes of fashion with"}
          lineTwo={"ICONS's slip resistance High Glossy Porcelain Collection"}
          bgImage={"startingFive"}
        />
        <Slides
          lineOne={"Let your interior look sazzling and elegant"}
          lineTwo={
            "with ICON Polished Porcelain Tiles.. Explore collection now !"
          }
          bgImage={"startingSix"}
        />
        <Slides
          lineOne={"Refreshing look & Exotic Range of"}
          lineTwo={
            "Polished glazed Procelain tiles collection for you home & office"
          }
          bgImage={"startingSeven"}
        />
        <Slides
          lineOne={"Metal effect porcelain tiles"}
          lineTwo={"for contemporary spaces great metallic collection"}
          bgImage={"startingEight"}
        />
        <Slides
          lineTwo={"Stone looks Porcelain Tile"}
          bgImage={"startingNine"}
        />
      </Carousel>
    </div>
  );
};

export default SlideOne;
