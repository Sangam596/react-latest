import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Defualt User",
    footerCities: null,
    showCities:false
})

export default UserContext;