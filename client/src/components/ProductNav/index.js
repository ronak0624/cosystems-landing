import React from 'react'
import {Link} from 'react-router-dom'

export default function ProductNav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/products?name=Frame%20Relay">Netflix</Link>
                </li>
                <li>
                    <Link to="/products?name=netflix">Netflix</Link>
                </li>
                <li>
                    <Link to="/products?name=netflix">Netflix</Link>
                </li>
                <li>
                    <Link to="/products?name=netflix">Netflix</Link>
                </li>
            </ul>
        </div>
    )
}
