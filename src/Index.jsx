import { Link } from "react-router-dom";
import Sangam_Bgk_Conversational_ai from "/Sangam_Bgk_Conversational_ai.pdf";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center font-bold text-4xl sm:text-6xl lg:text-7xl px-4 text-center overflow-hidden relative">
      <object
        data={Sangam_Bgk_Conversational_ai}
        type="application/pdf"
        className="absolute w-full h-full sm:h-full opacity-40 z-0"
      >
        <p>
          Your browser does not support PDFs.{" "}
          <a
            href={Sangam_Bgk_Conversational_ai}
            className="underline text-blue-500"
          >
            Download the PDF
          </a>
          .
        </p>
      </object>

      <h1 className="text-green-400 z-10  bg-black/40 rounded-t-lg pb-4">Select The Project</h1>
      <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 z-10  bg-slate-700/40 p-4 rounded-lg shadow-lg">
        <li className="p-1 hover:text-lime-500 transition-colors duration-300">
          <Link to="/portfolio">My Portfolio</Link>
        </li>
        <li className="p-1 hover:text-red-400 transition-colors duration-300">
          <Link to="/netflix">Netflix GPT</Link>
        </li>
        <li className="p-1 hover:text-blue-500 transition-colors duration-300">
          <Link to="/food">Food Villa</Link>
        </li>

        <li className="p-1 hover:text-red-600 transition-colors duration-300">
          <Link to="/youtube">YouTube</Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;
