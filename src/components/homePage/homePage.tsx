import { Delivery } from "./delivery/delivery";
import { YandexMap } from "../map/map";
import "./homePage.css";
import { useId } from "react";

export const HomePage = () => {
    return (
        <main className="main">
            <h1 className="main__title">Старый Георг</h1>
            <div className="banner">
                <div className="banner__inner-container">
                    <img className="banner__image" src="/image/bannerImage.jpg" alt="" />
                    <div className="banner__text">Лучшая еда и напитки в Йошкар-Оле</div>
                </div>
            </div>
            <hr className="horizontal-row" />
            <div className="week-dish">
                <h2 className="week-dish__title">Блюдо недели</h2>
                <div className="week-dish__inner-container">
                    <img className="week-dish__image" src="/image/weekDishImage.jpg" alt="" />
                    <div className="week-dish__text">
                        Рибай
                    </div>
                </div>
            </div>
            <hr className="horizontal-row" />
            <Delivery />
            <hr className="horizontal-row" />
            <YandexMap />
        </main>
    )
} 