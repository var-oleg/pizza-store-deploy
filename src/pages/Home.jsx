import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, PizzaBlock} from "../components";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import PizzaLoadingBlock from "../components/PizzaBlock/PizzaLoadingBlock";
import {addPizzaToCart} from "../redux/actions/cart";

const categoryNames = ['М\'ясна', 'Вегетарианська', 'Гриль', 'Гостра', 'Смачна'];
const sortItems = [
    {name: 'популярності', type: 'popular', order: 'desc'},
    {name: 'ціні', type: 'price', order: 'desc'},
    {name: 'алфавіту', type: 'name', order: 'asc'},
];
const Home = () => {
    const dispatch = useDispatch();

    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const cartItems = useSelector(({cart}) => cart.items);
    const {category, sortBy} = useSelector(({filters}) => filters);

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy]);

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback(type => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCard = obj => {
        dispatch(addPizzaToCart(obj));
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}/>
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Всі піци</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items.map((item) => <PizzaBlock
                            onClickAddPizza={handleAddPizzaToCard}
                            key={item.id}
                            addedCount={cartItems[item.id] && cartItems[item.id].items.length}

                            {...item} />)
                        : Array(12)
                            .fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
                }
            </div>
        </div>
    )
}

export default Home