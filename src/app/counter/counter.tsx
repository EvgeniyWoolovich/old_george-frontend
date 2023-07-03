import { useSelector, useDispatch } from "react-redux";
import { busketItemSelector, increment, decrement } from "../counterSlice/counterSlice";
import './counter.css'
type Props = { id: number };

export const Counter = ({ id }: Props) => {
    const item = useSelector(busketItemSelector(id));
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(id))
    }

    const handleDecrement = () => {
        dispatch(decrement(id))
    }

    return (
        <div className="counter">
            <div
                onClick={handleDecrement}
                className="counter__button counter__button_decrement"
            >
                -
            </div>
            <div className="counter__value">{item?.count}</div>
            <div
                onClick={handleIncrement}
                className="counter__button counter__button_increment"
            >
                +
            </div>
        </div>
    )

}