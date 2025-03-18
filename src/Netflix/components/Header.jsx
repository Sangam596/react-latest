import { useState } from "react";
import Form from "./Form";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isForm, setIsForm] = useState(false);

  const handleShowForm = () => setIsForm(!isForm);

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute -z-10 h-auto w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="bg-image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center p-4 md:px-10 bg-gradient-to-t from-black">
        <img
          className="w-24 md:w-32"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <button
          className="bg-red-600 text-white font-bold rounded-md py-2 px-4 text-sm md:text-base"
          onClick={handleShowForm}
        >
          Sign In
        </button>
      </div>

      {/* Show Form Conditionally */}
      {isForm && (
        <Form isSignIn={isSignIn} setIsSignIn={() => setIsSignIn(!isSignIn)} />
      )}
    </div>
  );
};

export { Header };
