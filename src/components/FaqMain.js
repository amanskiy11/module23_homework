import React, { Component } from "react";
import "../../dist/base.css";
class FaqMain extends Component {
    render() {
        return (
            <main>
                <img src="./src/images/undraw_questions_75e0%201.svg" alt="Картинка" className="image" />
                <h1>Частые вопросы</h1>
                <p className="textL">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
                <div className="faqWrapper">
                    <button className="collapse">
                        Могу ли я отменить бронь?<img src="./src/images/pointerDown.svg" alt="Стрелка вниз" className="pointerDown" /><img src="./src/images/pointerUp.svg" alt="Стрелка вверх" className="pointerUp" />
                    </button>
                    <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <button className="collapse">
                        Могу ли я вернуть деньги, если не подошёл автомобиль?<img src="./src/images/pointerDown.svg" alt="Стрелка вниз" className="pointerDown" /><img src="./src/images/pointerUp.svg" alt="Стрелка вверх" className="pointerUp" />
                    </button>
                    <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <button className="collapse">
                        Что делать, если случилось ДТП?<img src="./src/images/pointerDown.svg" alt="Стрелка вниз" className="pointerDown" /><img src="./src/images/pointerUp.svg" alt="Стрелка вверх" className="pointerUp" />
                    </button>
                    <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <button className="collapse">
                        Могу ли я оставить автомобиль в удобном для меня месте?<img src="./src/images/pointerDown.svg" alt="Стрелка вниз" className="pointerDown" /><img src="./src/images/pointerUp.svg" alt="Стрелка вверх" className="pointerUp" />
                    </button>
                    <div className="content">Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.</div>
                    <button className="collapse">
                        Что делать, если собственник просит заплатить ему напрямую?<img src="./src/images/pointerDown.svg" alt="Стрелка вниз" className="pointerDown" /><img src="./src/images/pointerUp.svg" alt="Стрелка вверх" className="pointerUp" />
                    </button>
                    <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <button className="collapse">
                        Должен ли я заправлять автомобиль?<img src="./src/images/pointerDown.svg" alt="Стрелка вниз" className="pointerDown" /><img src="./src/images/pointerUp.svg" alt="Стрелка вверх" className="pointerUp" />
                    </button>
                    <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
            </main>

        );
    }
}
export default FaqMain;