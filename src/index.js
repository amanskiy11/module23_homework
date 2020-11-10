import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FaqMain from "./components/FaqMain";

import '../dist/base.css';
import AboutUsMain from "./components/AboutUsMain";
if (window.location.href === 'http://localhost:8080/aboutus.html') {
    ReactDOM.render(<div>
            <Header/>
            <AboutUsMain/>
            <Footer/>
        </div>,
        document.getElementById('root'));
} else {
    ReactDOM.render(<div>
            <Header/>
            <FaqMain/>
            <Footer/>
        </div>,
        document.getElementById('root'));
}
let coll = document.getElementsByClassName('collapse');
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = '500px';
        }
        this.childNodes[1].classList.toggle('active');
        this.childNodes[2].classList.toggle('active');
    });
}