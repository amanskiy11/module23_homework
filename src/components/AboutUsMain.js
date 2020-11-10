import React, { Component } from "react";
import "../../dist/base.css";
class AboutUsMain extends Component {
    render() {
        return (
            <main>
                <section>
                    <img src="./src/images/undraw_team_spirit_hrr4.svg" alt="Картинка" className="image" />
                    <h1>О нас</h1>
                    <div className="firstSectionText">
                        Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.
                    </div>
                </section>
                <section className="secondSection">
                    <h2>Контакты</h2>
                    <div className="emailDiv">
                        <span className="key">Электронная почта</span>
                        <span className="value">drive@skillfactory.com</span>
                    </div>
                    <div className="emailDiv">
                        <span className="key">Телефон</span>
                        <span className="value">+7 912 123-45-67</span>
                    </div>
                </section>
                <section>
                    <h2>Команда</h2>
                    <div className="first">
                        <div className="firstRow">
                            <div className="person">
                                <img src="./src/images/Ellipse%209.png" alt="фото Иван Иванов" className="photo" />
                                <p className="name">Иван Иванов</p>
                                <p className="position">CEO</p>
                            </div>
                            <div className="person">
                                <img src="./src/images/Ellipse%2010.png" alt="фото Алексей Смирнов" className="photo" />
                                <p className="name">Алексей Смирнов</p>
                                <p className="position">Frontend-разработчик</p>
                            </div>
                        </div>
                        <div className="firstRow">
                            <div className="person">
                                <img src="./src/images/Ellipse%2011.png" alt="фото Денис Ярцев" className="photo" />
                                <p className="name">Денис Ярцев</p>
                                <p className="position">Backend-разработчик</p>
                            </div>
                            <div className="person">
                                <img src="./src/images/Ellipse%2012.png" alt="фото Николай Морозов" className="photo" />
                                <p className="name">Николай Морозов</p>
                                <p className="position">Дизайнер</p>
                            </div>
                        </div>
                    </div>
                    <div className="secondRow">
                        <div className="person">
                            <img src="./src/images/Ellipse%2013.png" alt="фото Ирина Деева" className="photo" />
                            <p className="name">Ирина Деева</p>
                            <p className="position">Копирайтер</p>
                        </div>
                        <div className="person">
                            <img src="./src/images/Ellipse%2014.png" alt="фото Мария Стрелкова" className="photo" />
                            <p className="name">Мария Стрелкова</p>
                            <p className="position">SMM</p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
export default AboutUsMain;