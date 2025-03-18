/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import validator from "./utils/validator";

const Form = ({ isSignIn, setIsSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPasswordMessage, setMatchPasswordMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUpToggle = () => setIsSignIn();

  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const password = useRef(null);

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setMatchPasswordMessage(
      e.target.value === password.current.value
        ? "✅ Password Match"
        : "❌ Password Not Matched"
    );
  };

  const handleFormSubmit = () => {
    const message = validator(
      name?.current?.value,
      email.current.value,
      phone?.current?.value,
      password.current.value,
      isSignIn
    );
    setErrorMessage(message);
    console.log(`clicked`);
  };

  return (
    <div className="flex justify-center items-center my-14 px-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black opacity-75 w-full max-w-md p-6 rounded-lg"
      >
        <h1 className="text-red-600 font-bold text-2xl mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        <div className="space-y-4">
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              className="p-2 pl-20 w-full rounded-lg bg-slate-700 text-white font-bold"
              placeholder="Enter your Name"
            />
          )}
          <input
            ref={email}
            type="text"
            className="p-2 pl-20 w-full rounded-lg bg-slate-700 text-white font-bold"
            placeholder="Enter your Email"
          />
          {!isSignIn &&
            <input
              ref={phone}
              type="phone"
              className="p-2 pl-20 w-full rounded-lg bg-slate-700 text-white font-bold"
              placeholder="Enter your Phone"
            />
          }
          {/* Password Input with Show Button */}
          <div className="relative w-full">
            <input
              ref={password}
              type={showPassword ? "text" : "password"}
              className="p-2 w-full pl-20 rounded-lg bg-slate-700 text-white font-bold pr-10"
              placeholder="Enter your Password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🔒"}
            </button>
          </div>

          {/* Confirm Password Field */}
          {!isSignIn && (
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="p-2 w-full pl-20 rounded-lg bg-slate-700 text-white font-bold pr-10"
                placeholder="Confirm your Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <p
                className={`text-sm ${
                  matchPasswordMessage.includes("Not")
                    ? "text-red-500"
                    : "text-green-500"
                } p-2 font-bold`}
              >
                {matchPasswordMessage}
              </p>
            </div>
          )}
        </div>

        {errorMessage && <p className="p-2 text-red-600 font-bold">{errorMessage}</p>}
        <button
          className="bg-red-500 mt-6 text-white p-2 w-full rounded-lg font-semibold"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-white text-center mt-4 cursor-pointer hover:text-red-600"
          onClick={handleSignUpToggle}
        >
          {isSignIn
            ? "Don't have an account? Sign Up"
            : "Already have an account? Please Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Form;
