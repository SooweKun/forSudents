import { motion } from "framer-motion"
import { useState } from "react"

export const ClickerComp = () => {
    const [ count, setCount ] = useState(0)

    return (
        <div className="w-full h-screen bg-[#1a1a1a] flex justify-center items-center relative">
            <div className='w-1 h-1 animate-grow bg-[#941596] absolute blur-2xl' />
            <div className="flex flex-col items-center gap-20">
                <p className="text-white text-3xl">count is: {count}</p>
                <motion.button
                className="w-[200px] h-[35px] bg-[#bb45bd] rounded-2xl cursor-pointer text-[#1a1a1a]"
                onClick={() => setCount(count +1)}
                whileTap={{scale: 1}}
                whileHover={{
                scale: 1.02,
                transition: { duration: 0.5 },
                }}
                >
                    click
                </motion.button>
            </div>
        </div>
    )
}