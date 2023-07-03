import { useDispatch, useSelector } from "react-redux";
import { addDish, busketItemSelector, removeDish } from "../../../app/counterSlice/counterSlice";
import { Dish } from "../../../types";
import { Counter } from "../../../app/counter/counter";
import './cartDish.css';

type Props = {
    dish: Dish & { count: number };
    onClick?: () => void
};

export const CartDish = ({ dish: { id, count, categories, description, name, price, url } }: Props) => {
    const dispatch = useDispatch();
    const item = useSelector(busketItemSelector(id));
    const sumPriceDish = `${price * count}.00`;
    const handelRemoveDish = () => {
        dispatch(removeDish({
            id: id,
            count: count,
            categories: categories,
            description: description,
            name: name,
            price: price,
            url: url
        }))
    }

    return (
        <div className="cart-dish">
            <div className="cart-dish__image-container">
                <img className="cart-dish__image" src={url} alt={name} />
            </div>
            <div className="cart-dish__text-wrapper">
                <p className="cart-dish__title">{name}</p>
                <p className="cart-dish__subtitle">{description}</p>
            </div>
            <div className="cart-dish__price-wrapper">
                <div className="remove-button" onClick={handelRemoveDish}>
                <img src="/image/trash.png" alt="" /></div>
                <span className="cart-dish__price">{sumPriceDish} ₽</span>
                <Counter id={id} />
            </div>
        </div>
    )
}