import React from 'react'
import '../Styles/title.css'
export const Title = ({ titleName = '' }) => {
    return <div className="title">{titleName}</div>
}