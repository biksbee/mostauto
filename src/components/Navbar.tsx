// @ts-ignore
import Arrow2 from "../img/Arrow2.png"
// @ts-ignore
import logo from "../img/Logo.png"


function Navbar({menuActive, setMenuActive}) {

    const toggleMenu = () => {
        setMenuActive(!menuActive);

        if (menuActive) {
            document.body.classList.remove("lock"); // Убираем класс при закрытии
        } else {
            document.body.classList.add("lock"); // Добавляем класс при открытии
        }
    }

    return (
        <div className={`navbar ${menuActive ? "active" : ""}`}>
            <div className="navbar-left">
                <div className={`header-burger ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                </div>
                MENU
            </div>
            <div className="navbar-right">
                <img className="logo-navbar" src={logo} alt=""/>
                <div className="navbar-tittle">ПОДОБРАТЬ АВТО<img src={Arrow2} alt=""/></div>
                <div className="navbar-contact-us">
                    <div className="number"><b><a href="tel:+375298576896">+375 (29) 857-68-96</a></b></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

