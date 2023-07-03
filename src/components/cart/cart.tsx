import { Provider, useSelector } from "react-redux";
import { Counter } from "../../app/counter/counter";
import './cart.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { busketItemSelector, busketSelector } from "../../app/counterSlice/counterSlice";
import { CartDish } from "./cartDish/cartDish";
import { useId, useState } from "react";
import { CashReceiptItem } from "./cashReceiptItem/cashReceiptItem";

enum DeliveryCind {
    takeAway = "Самовывозом из нашего прекрасного ресторана.",
    deliveryAddressCash = "До вашего места, с оплатой наличными на месте.",
    deliveryAddressBankCard = "До вашего места, с оплатой по банковской карте на месте."
}

type IFormImput = {
    name: string
    phone: number
    address: string
    email: string
    comment: string
    delivery: DeliveryCind
}

export const Cart = () => {
    const [message, setMessage] = useState<IFormImput>({
        name: "",
        phone: 0,
        address: "",
        email: "",
        comment: "",
        delivery: DeliveryCind.takeAway
    });
    const [visibility, setVisibility] = useState(false);
    const hendaleClickButton = () => {
        setVisibility(!visibility);
    }
    const onSubmit: SubmitHandler<IFormImput> = (data) => {
        setMessage(data);
        hendaleClickButton();
        console.log(message);
    };

    const { register, handleSubmit } = useForm<IFormImput>()
    const busket = useSelector(busketSelector);
    const sumPriceAllDish = busket.dishes.reduce((sum, currentValue) => sum + (currentValue.price * currentValue.count), 0)
    const postTextAreaId = useId();
    const nameInputId = useId();
    const phoneInputId = useId();
    const addressInputId = useId();
    const emailInputId = useId();
    const deliveryInputId = useId();

    return (
        <div className="cart-page">
            {!visibility && <div>
                <h1 className="cart-page__title">Заказ</h1>
                {busket.dishes.map((elem) => <CartDish dish={elem} />)}
                <div className="sum-price">
                    Цена за всё: {`  ${sumPriceAllDish}.00 ₽`}
                </div>
                <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form__lable" htmlFor={nameInputId}>Имя:<span className="red-start">*</span></label>
                    <input className="form__input" id={nameInputId} type="text" {...register("name")} required />
                    <label className="form__lable" htmlFor={phoneInputId}>Телефон:<span className="red-start">*</span></label>
                    <input className="form__input form__input_number" id={phoneInputId} type="number" {...register("phone")} required />
                    <label className="form__lable" htmlFor={addressInputId}>Адрес доставки:<span className="red-start">*</span></label>
                    <input className="form__input" id={addressInputId} type="text" {...register("address")} placeholder="Не заполняйте данное поле, если выбрали самовывоз" />
                    <label className="form__lable" htmlFor={emailInputId}>Ваша почта:</label>
                    <input className="form__input" id={emailInputId} type="email" {...register("email")} />
                    <label className="form__lable" htmlFor={postTextAreaId}>Комментарий к заказу:</label>
                    <textarea className="form__textarea" id={postTextAreaId} {...register("comment")}>
                    </textarea>
                    <label className="form__lable" htmlFor={deliveryInputId}>Доставка:<span className="red-start">*</span></label>
                    <select className="form__select" id={deliveryInputId} {...register("delivery") } required>
                        <option value={DeliveryCind.takeAway}>
                            Самовывозом из нашего прекрасного ресторана.
                        </option>
                        <option value={DeliveryCind.deliveryAddressCash}>
                            До вашего места, с оплатой наличными на месте.
                        </option>
                        <option value={DeliveryCind.deliveryAddressBankCard}>
                            До вашего места, с оплатой по банковской карте на месте.
                        </option>
                    </select>
                    <input className="form__submit-button" type="submit" value="Оформить заказ" />
                </form>
            </div>}
            {visibility && <div className="cash-receipt">
                <h1 className="cash-receipt__title">Ваш заказ принят</h1>
                <p className="cash-receipt__message">{message.name}, ваш заказ обрабатывается и вскором времени мы уведомим, Вас, о его готовности.</p>
                <hr />
                <div className="cash-receipt__dishs">
                    <p>Заказ:</p>
                    {busket.dishes.map((item) => <CashReceiptItem dish={item} />)}
                </div>
                <hr />
                <p className="cash-receipt__final-price">Итог :{`  ${sumPriceAllDish}.00 ₽`}</p>
                <div className="cash-receipt__delivery">
                    <span>Доставка:</span>
                    <span>{message.delivery}</span>
                    <span>{message.address}</span>
                </div>
            </div>}
        </div>
    )
}