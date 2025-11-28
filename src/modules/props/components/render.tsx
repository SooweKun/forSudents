import type { FC } from "react"

type Props = {
    value: number
}

export const Render: FC<Props> = ({value}) => {
    return (
        <div className="border-2 border-green-400 p-4">
            <p className="">value is: {value}</p>
        </div>
    )
}