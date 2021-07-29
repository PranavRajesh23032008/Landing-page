import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div
      className={
        "bg-black flex md:block justify-center flex-col mx-auto text-white py-10 px-24"
      }
    >
      <div className={"justify-center"}>
        <div
          style={{
            borderBottom: "1px solid #333333",
          }}
          className={
            "grid grid-flow-row-denses md:grid-cols-2 lg:grid-cols-3 w-full mx-auto lg:w-[80vw]"
          }
        >
          <div className={"flex items-center flex-col justify-center md:block"}>
            <img
              className={"h-40"}
              src={
                "https://content.iconworldoftile.com/icon/images/logo_white.png"
              }
            />
            <p className={"text-xl font-semibold mt-4 py-2"}>
              Connect with Us:
            </p>
            <div
              className={"mt-8 pb-16 text-black flex items-center space-x-2"}
            >
              <a
                target={"_blank"}
                href={"https://twitter.com/iconworldoftile"}
                className={"bg-white rounded-full p-2"}
              >
                <TwitterIcon />
              </a>
              <a
                target={"_blank"}
                href={"https://www.instagram.com/iconworldoftile/"}
                className={"bg-white rounded-full p-2"}
              >
                <InstagramIcon />
              </a>
              <a
                target={"_blank"}
                href={"https://www.facebook.com/Groupoficon/"}
                className={"bg-white rounded-full p-2"}
              >
                <FacebookIcon />
              </a>
              <a
                target={"_blank"}
                href={"https://www.linkedin.com/company/iconworldoftile/"}
                className={"bg-white rounded-full p-2"}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={"mb-6"}>
            <h1
              className={
                "flex items-center flex-col justify-center md:block text-3xl font-semibold mb-10"
              }
            >
              About Icon
            </h1>
            <p className={"text-lg font-light lg:text-xl"}>
              ICON group is eminent for producing wide-range of tiles. Be it
              Glazed Porcelain Tile, Full Body Porcelain tiles and Digital Wall
              Tiles, our tiles are famous for their durability, varied designs
              and aesthetic appeal. Constant innovation and leading edge
              production define our approach and products.
            </p>
          </div>
          <div
            className={
              "flex items-center flex-col md:hidden justify-center mb-6 lg:ml-12 lg:inline-flex  w-full"
            }
          >
            <h1 className={"text-3xl  font-semibold mb-10 "}>Look & Feel</h1>
            <div className={"space-y-2 font-light text-lg"}>
              <p className={"hover:font-semibold cursor-pointer"}>
                <span>- </span>
                Marble Look Tile
              </p>
              <p className={"hover:font-semibold cursor-pointer"}>
                <span>- </span>
                Metal Look Tile
              </p>
              <p className={"hover:font-semibold cursor-pointer"}>
                <span>- </span>
                Wooden Plank Tile
              </p>
              <p className={"hover:font-semibold cursor-pointer"}>
                <span>- </span>
                Cement Look Tile
              </p>
              <p className={"hover:font-semibold cursor-pointer"}>
                <span>- </span>
                Kitchen Wall Tile
              </p>
              <p className={"hover:font-semibold cursor-pointer"}>
                <span>- </span>
                Bathroom Wall Tile
              </p>
              <p className={"hover:font-semibold cursor-pointer"}>
                <span>- </span>
                Full Body Porcelain Tile
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={"text-xs md:text-md  my-2 text-md ml-3 flex items-center"}
      >
        <p>All rights reserved © 2021 ICON Group</p>
        <p className={"flex-1"} />
        <p className={""}>
          <a
            className={
              "hover:underline hover:text-gray-700  text-xs md:text-md"
            }
            target={"_blank"}
            href="https://www.iconworldoftile.com/sitemap.xml"
          >
            Sitemap
          </a>{" "}
          |
          <a
            className={
              "hover:underline hover:text-gray-700 ml-1 text-xs md:text-md"
            }
            target={"_blank"}
            href="https://www.advekbranding.com/"
          >
            Developed By: Advek Branding Agency
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
