import React from 'react'
import './Header.css'
import netflix from './netflix.png'
export default function Header({black}) {
    return (
        <header className={black ? 'menu':""}>
            <h1>Netflix</h1>
            <img src={netflix} alt='user'></img>
        </header>
    )
}
