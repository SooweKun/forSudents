import { motion } from "framer-motion"
import { useState } from "react"
import { toast } from "sonner"

export const ModalComp = () => {
    const [ open, setOpen ] = useState(false)

    console.log("open", open)

    return (
        <div className="w-full h-screen bg-[#1a1a1a] flex justify-center items-center relative">
            <div className='w-1 h-1 animate-grow bg-[#941596] absolute blur-2xl' />
            <div className="flex flex-col items-center gap-20">
                <motion.button
                    className="w-[200px] h-[35px] bg-[#bb45bd] rounded-2xl cursor-pointer text-[#1a1a1a]"
                    onClick={
                        () => {
                            setOpen(true);
                            toast("State change", {
                                description: `кнопка открытия нажата`,
                            })
                        }  
                    }
                    whileTap={{scale: 1}}
                    whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.5 },
                    }}
                >
                    click
                </motion.button>
            </div>
            {open && 
                <div className="w-[300px] h-[400px] absolute bg-black border-2 border-grey rounded-3xl" onClick={(e) => e.stopPropagation()}>
                    <div className="w-full h-full flex justify-center items-center relative">
                        <button onClick={() => {setOpen(false); toast("State change", {
                            description: `кнопка закрытия нажата`
                        })}} className="w-[60px] h-[30px] bg-white rounded-[6px] text-black absolute top-4 right-4">close</button>
                        <p className="text-white text-3xl">open is: {open}</p>
                    </div>
                </div>
            }
        </div>
    )
}