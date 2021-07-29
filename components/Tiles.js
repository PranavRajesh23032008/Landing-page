import Collection from "./Collection";

function Tiles() {
  return (
    <div
      className={
        "my-10 grid grid-flow-row-denses lg:space-x-3 md:grid-cols-2 lg:grid-cols-3"
      }
    >
      <Collection
        name={"Glazed Porcelain Tiles"}
        description={
          "Glazed porcelain stoneware tiles are one of the most common types of floor tile for residential and light commercial construction."
        }
        image={
          "https://res.cloudinary.com/codegowdacloud/image/upload/v1627552404/image_1_rraq10.png"
        }
      />
      <Collection
        name={"Full Body Technical Porcelain Tiles"}
        description={
          "Full Body Tile has the same material and color in the front and back side, and the surface is not glazed, so it is a kind of Unglazed Porcelain Tiles."
        }
        image={
          "https://res.cloudinary.com/codegowdacloud/image/upload/v1627552403/image_2_lrgtd5.png"
        }
      />
      <Collection
        name={"Digital Wall Tiles"}
        description={
          "Ceramic tile comes in a wide array of sizes, shapes, textures and finishes to give you the creative freedom to update any wall of your room."
        }
        image={
          "https://res.cloudinary.com/codegowdacloud/image/upload/v1627552404/image_f60kx2.png"
        }
      />
    </div>
  );
}
export default Tiles;
