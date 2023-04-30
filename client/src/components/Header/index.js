import React from 'react'
import "./style.css"


function Header({ budget }) {
    return (
        <div className='header'>
            <img src='https://i.pinimg.com/originals/66/e5/d1/66e5d1a102a411da8b5e220d8afd7244.jpg' alt='bilges' />
            <div>
                <h2>Spend Bill Gates' Money</h2>
                <h1>${budget}</h1>
            </div>
        </div>
    )
}

export default Header
