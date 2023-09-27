import { createContext, useState } from "react";

export const mainContext = createContext()

const MainProvider = (props) => {
    const [count, setCount] = useState();
    const [background, setBackground] = useState()



    return (
        <mainContext.Provider value={{
            count, setCount,
            background, setBackground
        }}>
            {props.children}
        </mainContext.Provider>
    )
}


export default MainProvider;