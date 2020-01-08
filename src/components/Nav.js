import React, {useContext} from 'react'

const Nav = ({setWhatContent}) => {

    return (
        <div className="nav">
            <div className="nav-grid">
                <div className="nav-option active" onClick = { () => {setWhatContent(true)}}>To do</div>  
                <div className="nav-option" onClick = { () => {setWhatContent(false)}}>Done</div>
            </div>
        </div>
    )
}

export default Nav
