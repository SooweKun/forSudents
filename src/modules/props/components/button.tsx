import type { FC } from "react"

type Props = {
    fn: () => void
}

export const Button: FC<Props> = ({fn}) => {

    return (
        <div className="border-2 border-purple-400 p-4">
            <button className="w-[200px] h-[30px] bg-[#1a1a1a] text-white rounded-sm " onClick={fn}>click for + 1</button>
        </div>
    )
}