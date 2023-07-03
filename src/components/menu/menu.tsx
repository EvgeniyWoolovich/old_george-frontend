import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dish as DishType } from '../../types';
import { Dish } from '../../dish';
import "./menu.css";
import { MenuButton } from './menuButton/menuButton';
import { Link } from 'react-router-dom';
import { Paths } from '../../shared/lib/paths';
import { useSelector } from 'react-redux';
import { busketSelector } from '../../app/counterSlice/counterSlice';

export const Menu = () => {
    const busket = useSelector(busketSelector);
    const [dishes, setDishes] = useState<DishType[]>([]);
    const [active, setActive] = useState('Все товары');
    const filteredDishes = active === 'Все товары' ? dishes : dishes.filter((dish) => dish.categories === active);

    useEffect(() => {
        (async () => {
            const response = await axios.get<DishType[]>('http://localhost:8080/api/dishs/');
            console.log(response.data);
            setDishes(response.data);
        })();
    }, [])

    return (
        <div className='dish-wrapper'>
            <h1 className="dish__title">Меню</h1>
            <div className='dish__button-container'>
                <MenuButton active={active} name={'Все товары'} onClick={setActive} />
                <MenuButton active={active} name={'Салаты'} onClick={setActive} />
                <MenuButton active={active} name={'Брускетты'} onClick={setActive} />
                <MenuButton active={active} name={'Горячие блюда'} onClick={setActive} />
                <MenuButton active={active} name={'Бургеры'} onClick={setActive} />
                <MenuButton active={active} name={'Паста'} onClick={setActive} />
                <MenuButton active={active} name={'Десерты'} onClick={setActive} />
                <MenuButton active={active} name={'Напитки'} onClick={setActive} />
            </div>
            <div className="container">
                {filteredDishes.map((dish) => <Dish key={dish.id} {...dish} />)}
            </div>
            <Link to="/cart" className='cart-link'>
                <div className='cart-link-container'>
                    <div className='cart-link-image-container'>
                        <img src="/image/cartActive.svg" alt="" />
                    </div>
                    <span>Корзина:</span>
                    <span className='cart-count'>{busket.dishes.length}</span>
                </div>
            </Link>
        </div>
    )
}