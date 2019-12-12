import React from 'react'


export default function ProductInfo(props) {
    return (
        <div>
            <h2 className="mt-4">{props.title}</h2>
            <p className="summary">
            {props.summary}
            </p>
            <img src={props.imagePath}></img>
        </div>
    )
}
