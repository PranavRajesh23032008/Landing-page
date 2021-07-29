const Collection = ({ name, description, image }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        className={
          "shadow-2xl dark:shadow-none bg-white relative flex flex-col m-10 p-10 rounded-lg text-black"
        }
      >
        <div className={"flex flex-col"}>
          <div className={"mx-auto"}>
            <img
              className={"rounded-2xl border-2 shadow-xl"}
              src={image}
              objectFit={"contain"}
            />
          </div>
          <h1 className=" cursor-pointer mt-4 mb-8 text-3xl font-bold">
            {name}
          </h1>
          <h1 className=" mt-2 w-full text-xl">{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default Collection;
