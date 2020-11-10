import React, { Component } from "react";
import "../../dist/base.css";
class Header extends Component {
    render() {
        return (
            <header>
                <a href="https://skillfactory.ru/" className="skillDrive">SkillDrive</a>
                <div className="navbar-menu">
                    <nav className="navbar">
                        <ul className="navbar-end">
                            <li className="navbar-item"><a href="aboutus.html">О нас</a></li>
                            <li className="navbar-item"><a href>Условия</a></li>
                            <li className="navbar-item"><a href="faq.html">Частые Вопросы</a></li>
                        </ul>
                    </nav>
                    <button className="loginButton">Войти  </button>
                </div>
                <div className="burger">
                    <input type="checkbox" id="check-menu" />
                    <label htmlFor="check-menu" className="menuLabel" />
                    <div className="burger-line first" />
                    <div className="burger-line second" />
                    <div className="burger-line third" />
                    <div className="burger-line fourth" />
                    <nav className="main-menu">
                        <a href="aboutus.html" className="burgerLink">О нас</a>
                        <a href className="burgerLink">Условия</a>
                        <a href="faq.html" className="burgerLink">Частые Вопросы</a>
                        <a href className="burgerLink">Войти</a>
                    </nav>
                </div>
            </header>

        );
    }
}
export default Header;