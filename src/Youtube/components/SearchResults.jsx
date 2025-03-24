import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../utils/youtubeSlice";

const SearchResults = ({ suggestions, setShowSearchIcon }) => {
  const dispatch = useDispatch();

  const searchQuery = useSelector((store) => store.youtube.searchQuery);

  return (
    <div className="absolute translate-y-[29px] -translate-x-4 md:-translate-x-6 top-0 w-[240px] md:w-[500px] bg-slate-50 my-5 rounded-lg">
      {suggestions?.map((sugg, index) => (
        <div
          key={index}
          className="p-2 px-4 w-full shadow-lg rounded-md  hover:bg-slate-200 hover:rounded-md"
          onClick={() => {
            dispatch(setSearchQuery(sugg));
            setTimeout(() => setShowSearchIcon(false), 0);
          }}
        >
          {sugg}
        </div>
      ))}
    </div>
  );
};

export default SearchResults

    

 