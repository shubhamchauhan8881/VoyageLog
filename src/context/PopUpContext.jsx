import { useState } from "react"
import PopUpContext from "./Popup"

export default function PopUpProvider({children}) {

    const [isOpen, setOpen] = useState(false)
    const [windowName, setWindowName] = useState("")

    const showPopUp = (name) => {
        setOpen(true);
        setWindowName(name)
    }
    const hidePopUp = () => {
        setOpen(false);
        setWindowName("")
    }

    const values = {
        showPopUp,
        hidePopUp,
        isOpen,
        windowName,
    }

  return (
    <>
        <PopUpContext.Provider value={values}>
            {children}
        </PopUpContext.Provider>
    </>
  )
}
