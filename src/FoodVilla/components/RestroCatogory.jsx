/* eslint-disable react/prop-types */
import RestroItems from "./RestroItems";

const RestroCatogory = ({ data, showItem, setShowIndex }) => {
  return (
    <div className=" rounded-lg my-4 p-2 shadow-lg  w-6/12 m-auto ">
      <div
        className="flex justify-between font-bold text-xl cursor-pointer "
        onClick={() => setShowIndex()}
      >
        <span>
          {data.title}({data?.itemCards?.length})
        </span>

        <span className="invert">{showItem ? "👆" : "👇"}</span>
      </div>
      {showItem && <RestroItems data={data?.itemCards} />}
      {data?.categories &&
        data?.categories?.length > 0 &&
        data.categories.map(
          (item) =>
            showItem && (
              <RestroItems key={item?.categoryId} data={item.itemCards} />
            )
        )}
    </div>
  );
};

export default RestroCatogory;