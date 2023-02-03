import { useEffect, useState } from "react"

export const Loading = () => {
    const [load, setLoad] = useState('loading')

    useEffect(() => {
        setTimeout(() => {
            setLoad(`${load}.`)
        }, 1000)
    }, [load])

    return (
        <div>
            {load}
        </div>
    )
}