import { Home, LucidePodcast, SquarePlay, SubscriptIcon, User } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-slate-50 h-screen space-y-6  p-3 flex flex-col items-center">
      <div className=" cursor-pointer flex flex-col items-center">
        <Link to="/youtube">
          <Home />
        </Link>
        <span className="text-xs">Home</span>
      </div>
      <div className=" cursor-pointer flex flex-col items-center">
        <SquarePlay />
        <span className="text-xs">Shorts</span>
      </div>
      <div className=" cursor-pointer flex flex-col items-center">
        <LucidePodcast />
        <span className="text-xs">Scubscription</span>
      </div>
      <div className=" cursor-pointer flex flex-col items-center">
        <User />
        <span className="text-xs">You</span>
      </div>
    </div>
  );
};

export default Sidebar;
