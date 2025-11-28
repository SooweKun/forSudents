import { useState } from "react"
import { Render } from "./components/render";
import { Button } from "./components/button";

export const PropsExample = () => {
    const [ value, setValue ] = useState(0);

        const increment = () => {
        setValue(value +1)
    }

    return ( 
        <div className="flex flex-col bg-black text-white w-full h-screen justify-center items-center gap-10 ">
            <div className="border-2 border-red-500 p-4 flex flex-col gap-4">
                <Render value={value} />
                <Button fn={increment} />
            </div>
        </div>
    )
}