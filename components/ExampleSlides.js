import ExampleSlidesComponent from "./ExampleSlideComponet";
import Fade from "react-reveal";
import { Carousel } from "react-responsive-carousel";

const ExampleSlides = () => {
  return (
    <div>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}
        autoPlay
        infiniteLoop
      >
        <ExampleSlidesComponent
          mainImage={"previewOne"}
          headOne={"Stone"}
          headTwo={"Look Tile"}
          description={
            "Stone look porcelain stoneware tile is more affordable option to real stone and looks great in a variety of rooms"
          }
          centerImage={
            "https://content.iconworldoftile.com/icon/content/look/look_6128_stone-look-porcelain-stoneware-tiles.jpg"
          }
        />
        <ExampleSlidesComponent
          mainImage={"previewTwo"}
          headOne={"Concrete"}
          headTwo={"Look Tile"}
          description={
            "Explore Icon's exceptional collection of concrete look tile for the rugged elegance og concrete without the stain, scratches,sealing and headaches of concrete installation."
          }
          centerImage={
            "https://content.iconworldoftile.com/icon/content/look/concrete-effect-porcelain-floor-tile.jpg"
          }
        />
        <ExampleSlidesComponent
          mainImage={"previewThree"}
          headOne={"Wood"}
          headTwo={"Look Tile"}
          description={
            "Create stunning wook look tile floors with porcelan stoneware that looks like wood."
          }
          centerImage={
            "https://content.iconworldoftile.com/icon/content/look/wooden-look-porcelain-stoneware-tiles.jpg"
          }
        />
        <ExampleSlidesComponent
          mainImage={"previewFour"}
          headOne={"Marble"}
          headTwo={"Look Tile"}
          description={
            "Marble effect porcelain stoneware for elegant and refined spaces, where classic style unites with a unique and modern design"
          }
          centerImage={
            "https://content.iconworldoftile.com/icon/content/look/marble-look-porcelain-tile.jpg"
          }
        />
        <ExampleSlidesComponent
          mainImage={"previewFive"}
          headOne={"Full body"}
          headTwo={"Look Tile"}
          description={
            "Full body tiles not only give your space a uniform, sleek, and clean look, but can also significantly make your flooring  look more refined"
          }
          centerImage={
            "https://content.iconworldoftile.com/icon/content/look/full-body-wall-and-floor-tile-manufacturer.jpg"
          }
        />
        <ExampleSlidesComponent
          mainImage={"previewSix"}
          headOne={"Metal"}
          headTwo={"Look Tile"}
          description={
            "Create a contemporary atmosphere with these Metallic? inspired tones for modern design or pair them with elaborate, painted tiles"
          }
          centerImage={
            "https://content.iconworldoftile.com/icon/content/look/metal-look-porcelain-floor-tiles-and-wall-tiles.jpg"
          }
        />
        <ExampleSlidesComponent
          mainImage={"previewSeven"}
          headOne={"Bathroom Wall Tiles"}
          headTwo={"Manufacturer"}
          description={
            "We have a great selection of bathroom tiles that will suit any interior and style, including easy to clean bathroon wall tiles and slip resisant bathroom floor tiles"
          }
          centerImage={
            "https://content.iconworldoftile.com/icon/content/look/bathroom-ceramic-wall-tiles-manufacturer.jpg"
          }
        />
        <ExampleSlidesComponent
          mainImage={"previewEigth"}
          headOne={"Kitchen Wall tiles"}
          headTwo={"Manufacturer"}
          description={
            "Transform your kirchen with our range of beautiful kitchen wall tile, CHoose from hundreds of modern and traditional kitchen tiles."
          }
          centerImage={
            "https://content.iconworldoftile.com/icon/content/look/kitchen-ceramic-wall-tiles-manufacturer.jpg"
          }
        />
      </Carousel>
    </div>
  );
};

export default ExampleSlides;
