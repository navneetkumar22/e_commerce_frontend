import React, { useState } from 'react';
import "../styles/Categories.css";

const Categories = () => {

    const [selectedLink, setSelectedLink] = useState("Fresh Fruits");

    const handleClick = (event) => {
        event.preventDefault();
        setSelectedLink(event.target.textContent);
    }

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            let elementTop = reveals[i].getBoundingClientRect().top;

            if (elementTop < window.innerHeight - 150) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    return (
        <section className='product-section'>
            <div className="products">
                <h2 className="heading">Top Category Products</h2>
            </div>
            <div className='collection-div'>
                <ul>
                    <li className={selectedLink === "Fresh Fruits" ? "selected" : ""} onClick={handleClick}>Fresh Fruits</li>
                    <li className={selectedLink === "Organic Fruits" ? "selected" : ""} onClick={handleClick}>Organic Fruits</li>
                    <li className={selectedLink === "Natural Vegatables" ? "selected" : ""} onClick={handleClick}>Natural Vegatables</li>
                    <li className={selectedLink === "Fresh Juices" ? "selected" : ""} onClick={handleClick}>Fresh Juices</li>
                    <li className={selectedLink === "Dried Fruits" ? "selected" : ""} onClick={handleClick}>Dried Fruits</li>
                </ul>
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
                <div className="dummy reveal">this is a Dummy card</div>
            </div>
        </section>
    )
}

export default Categories;