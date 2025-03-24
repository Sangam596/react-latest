import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";


const Body = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="hidden md:block md:col-span-1 sticky top-14 h-[calc(100vh-5rem)] scrollbar-hide bg-gray-100">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className=" col-span-1 md:col-span-11">
        <div className="sticky  top-[70px] md:top-[57px] bg-white z-40">
          <ButtonList />
        </div>

        {/* Scrollable Main Body */}
        <div className="overflow-auto">
          <div className="flex mt-16">
            <MainContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Body };