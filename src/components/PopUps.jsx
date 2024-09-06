import { useContext } from "react"
import PopUpContext from "../context/Popup";
import Register from "./Register";
import Login from "./Login";
import { UserProfile } from "./UserProfile";
export default function PopUps() {
    const {isOpen, windowName} = useContext(PopUpContext);

    const window = {
        "register": <Register />,
        "login": <Login />,
        "user": <UserProfile />,
    }

    if (isOpen){
        return (
            <div className='fixed z-50 top-0 left-0 right-0 bottom-0 bg-accent/20 backdrop-blur-[2px] flex items-center justify-center'>
                {window[windowName]}
            </div>
        )
    }

    return <></>

}
