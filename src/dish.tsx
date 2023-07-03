import { Dish as DishType } from "./types"
import "./dish.css"
import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Counter } from "./app/counter/counter";
import { addDish, busketItemSelector } from "./app/counterSlice/counterSlice";

type Props = DishType;

export const Dish = ({ id, categories, description, name, price, url }: Props) => {
    const dispatch = useDispatch();
    const item = useSelector(busketItemSelector(id));
    const visible = !item;
    const newPrice = `${price}.00`;
    const handleClick = () => {
        dispatch(addDish({
            id, count: 1,
            description,
            name,
            price,
            url,
            categories
        }))
    };

    return (
        <div className="dish">
            <div className="image-container">
                <img src={url} alt={name} />
            </div>
            <div className="dish-name-wrapper">
                {name}
            </div>
            <div>
                {visible && <div className="price-container" onClick={handleClick}>
                    <div className="background-cart">
                        <img src="/image/cartUnactive.svg" alt="" />
                    </div>
                    <span>{newPrice} ₽</span>
                </div>}
                {!visible &&
                    <Counter id={id} />
                }
            </div>
        </div>
    )
}
