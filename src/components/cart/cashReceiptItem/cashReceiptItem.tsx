import { Dish } from "../../../types";
import './cashReceiptItem.css';

type Props = {
    dish: Dish & { count: number };
    onClick?: () => void
};

export const CashReceiptItem = ({ dish: { id, count, categories, description, name, price, url } }: Props) => {
    return (
        <div className="cash-receipt-item">
            <div>{name},</div>
            <div>{count} шт.</div>
            <div>{price * count}.00 ₽</div>
        </div>
    )

}