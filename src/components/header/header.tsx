import { Link } from "react-router-dom";
import "./header.css";
import { Paths } from "../../shared/lib/paths";
import { busketSelector } from "../../app/counterSlice/counterSlice";
import { useSelector } from "react-redux";
import { useId } from "react";

export const Header = () => {
    const busket = useSelector(busketSelector);
    const myMap = document.getElementById("myMap")?.offsetTop;
    const myContact = document.getElementById("myContact")?.offsetTop;

    const hendalClickMyMap = () => {
        myMap && window.scrollTo(0, myMap - 100)
    }

    const hendalClickMyContact = () => {
        myContact && window.scrollTo(0, myContact)
    }
    return (
        <header className="header">
            <div className="logo">
                <Link className="logo__link" to={'/'}>СГ</Link>
            </div>
            <nav className="navigation">
                <ul className="navigation__menu">
                    <li className="navigation__item">
                        <Link to={"/"} className="navigation__link">О нас</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to={Paths.Menu} className="navigation__link">Меню</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to={"/"} className="navigation__link" onClick={hendalClickMyContact}>Контакты</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to={Paths.Cart} className="navigation__link">Заказть</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to={"/"} className="navigation__link" onClick={hendalClickMyMap}>Мы тут!</Link>
                    </li>
                </ul>
            </nav>
            <div className="social-links-container">
                <Link to={Paths.Cart} className="social-link social-link_cart">
                    <img className="social-link__image" src="/image/cartUnactive.svg" alt="" />
                    <div className="social-link-cart-price">{busket.dishes.length}</div>
                </Link>
                <a href="tel:+78362494646" className="social-link">
                    <img className="social-link__image" src="/image/headerIcon/telephoneIcon.svg" alt="" />
                </a>
                <a href="https://vk.com/oldgeorge" className="social-link" target="_blank">
                    <img className="social-link__image" src="/image/headerIcon/vkIcon.svg" alt="" />
                </a>
            </div>
        </header>
    )
}