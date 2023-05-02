import "../styles/dummy.css";

import React from 'react'

const Dummy = () => {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    // To check the scroll position on page load
    reveal();



    return (
        <>
            <div className="products">
                <h2 className="heading">Top Category Products</h2>
            </div>
            <div className="grid-container">
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
                <div className="dummy reveal">this is a Dummy card</div>
            </div>
        </>
    )
}

export default Dummy
