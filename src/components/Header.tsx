import {useState} from "react";
// @ts-ignore
import headerLogo from "../img/headerLogo.png";
// @ts-ignore
import kia from "../img/header-back.png"
// @ts-ignore
import ford from "../img/ford.jpeg"
// @ts-ignore
import audi from "../img/audi.jpeg"
import {TextForMainPage} from "./TextForMainPage";


function Header({menuActive, setMenuActive}) {

    const [backIndex, setBackIndex] = useState<0 | 1 | 2>(0);

    const toggleMenu = () => {
        setMenuActive(!menuActive);

        if (menuActive) {
            document.body.classList.remove("lock"); // Убираем класс при закрытии
        } else {
            document.body.classList.add("lock"); // Добавляем класс при открытии
        }
    }

    const images = [kia, ford, audi]

    setInterval(() => {
        switch (backIndex) {
            case 0:
                setBackIndex(1)
                break
            case 1:
                setBackIndex(2)
                break
            case 2:
                setBackIndex(0)
                break
        }
    }, 4000)

    const text1 = ["честная выгода до 30% на популярные модели и до 40% на премиум", "богатая комплектация", "обязательная проверка по базам данных и истории ДТП", "доставка от 70 дней", "лучшее решение для  автомобилей"]
    const text2 = ["честная выгода до 15% на популярные модели и до 30% на премиум", "доставка от 2 недель", "отличное техническое состояние и в 95% случаев без повреждений", "большой выбор уникальных моделей", "лучшее решение для дизельных автомобилей", "честные показания счётчика пробега"]
    return (

        <header
            style={{backgroundImage: `url(${images[backIndex]})`}}
        >
            <img className={`headerLogo ${menuActive ? "active" : ""}`} src={headerLogo} alt="Logo"/>
            {
                backIndex === 0
                    ?
                    <div className={`header-description ${menuActive ? "active" : ""}`}>АВТОМОБИЛИ ИЗ ЕВРОПЫ И США</div>
                    : backIndex === 1
                        ? <TextForMainPage text={text1}/>
                        : backIndex === 2
                            ? <TextForMainPage text={text2}/>
                            : null
            }


            <div className={`headerMenu ${menuActive ? "active" : ""}`}>
                <div className={`header-burger header-burger-close ${menuActive ? "active" : ""}`}
                     onClick={toggleMenu}>
                    <span></span>
                </div>

                <div className={`header-menu ${menuActive ? "active" : ""}`}>
                    <div className="header-list">
                        <img className="headerLogo-open" src={headerLogo} alt="Logo"/>
                        <div className={`header-burger header-burger-open ${menuActive ? "active" : ""}`}
                             onClick={toggleMenu}>
                            <span></span>
                        </div>
                        <div className="header-list-item header-list-item-main"><a href="#">Главная</a></div>
                        <hr className="header-list-item-main-hr"/>
                        <div className={`header-list-item ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                            <hr/>
                            <a href="#">Популярные авто</a></div>
                        <div className={`header-list-item ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                            <hr/>
                            <a href="#Delivery">Подбор и доставка</a></div>
                        <div className={`header-list-item ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                            <hr/>
                            <a href="#Tariffs">Тарифы</a></div>
                        <div className={`header-list-item ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                            <hr/>
                            <a href="#footer">Контакты</a></div>
                    </div>
                </div>

                <div className={`menu-menu ${menuActive ? "active" : ""}`}>
                    <div>MENU</div>
                </div>
            </div>

        </header>
    );
}

export default Header;
