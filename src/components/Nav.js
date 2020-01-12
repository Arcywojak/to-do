import React, {useContext} from 'react'

const Nav = ({setWhatContent}) => {

    const addActiveClass = (target) => {
        let first = document.querySelector('.nav-option.first');
        let second = document.querySelector('.nav-option.second');
        if (target==="first"){
            setWhatContent(true);
            first.classList.add('active');
            second.classList.remove('active');
        } else {
            setWhatContent(false);
            second.classList.add('active');
            first.classList.remove('active');
        }
    }

    return (
        <div className="nav">
            <div className="nav-grid">
                <div className="nav-option first active" onClick = { () => {addActiveClass('first')}}>To do</div>
                <div className="line"></div>  
                <div className="nav-option second" onClick = { () => {addActiveClass('second')}}>Done</div>
            </div>
        </div>
    )
}

export default Nav
