import "./delivery.css"
import { Slider } from '../swiper/slider';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../../shared/lib/paths";

export const Delivery = () => {
    const [visible, setVisible] = useState(false);
    const handleClick = () => setVisible(value => !value);

    return (
        <div className="delivery">
            <div className='slider-container'>
                <Slider />
            </div>
            <div className="delivery__title" onClick={handleClick}>
                {!visible && <span className="delivery__span delivery__span_second"></span>}
                <span className="delivery__span"></span>
                <h3 className="delivery__title-text">Условия доставки</h3>
            </div>
            {visible &&
                <div className="delivery__text-container">
                    <p className="delivery__text">Ежедневно с 12:00 до 23:00.
                        Бесплатная доставка от 1800₽.
                        Время доставки от 60 до 120 минут.
                    </p>
                    <p className="delivery__text delivery__text_second">
                        При заказе на сумму менее 1800₽ стоимость доставки составит: по Йошкар-Оле и Медведево — 100₽.
                    </p>
                </div>}
            <Link to={Paths.Menu} className="menu-link">Меню</Link>
            <p className="delivery__sub-text">Всю еду и соусы мы производим сами, используя отборные ингредиенты.</p>
        </div>
    )
}