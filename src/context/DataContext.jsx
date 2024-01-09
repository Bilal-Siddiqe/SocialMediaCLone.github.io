import { createContext, useState } from "react";

const Data = createContext();

function DataContext({ children }) {

    const [users, setUsers] = useState(
        [
            {
                fullName: "Ali",
                userName: "Ali1",
                Password: "123",
                profilURL: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=600",
                posts: ["Post1", "Post2"]
            },
        ]);

    const [loginUser, setLoginUser] = useState("");
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(true);

    return (
        <div>
            <Data.Provider value={{ users, setUsers, loginUser, setLoginUser, login, setLogin, signUp, setSignUp }} >
                {children}
            </Data.Provider>
        </div>
    )
}

export default DataContext;
export { Data };