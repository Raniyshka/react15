import { Card } from '../../components/Card/Card'
import s from './Catalog.module.css'
import { products } from '../../data/data'
import { NavLink } from 'react-router-dom'
import { Search } from '../../components/Search/Search'
import { useState } from 'react';
export function Catalog({cart, addToCart}){
    const [query, setQuery] = useState("");
    const [sorting, setSorting] = useState("");
    const [category, setCategory] = useState(0);
    function sort(e){
        setSorting(e.target.value);
    }
    function handleChange(e){
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product)=>{
        return product.name.toLowerCase().includes(query.toLowerCase())
        &&
        (product.category == category || category == 0)
        ;
    });
    const sortProducts = (sorting, products)=>{
        switch(sorting){
            case "price_asc":
                return [...products].sort((a,b)=>a.price - b.price);
            case "count_asc":
                return [...products].sort((a,b)=>a.count - b.count);
            case "price_desc":
                return [...products].sort((a,b)=> b.price - a.price);
            case "count_desc":
                return [...products].sort((a,b)=> b.count - a.count);
            default:
                return products;
        }
    };
    const sortedFilteredProducts = sortProducts(sorting, filteredProducts);
    return(
        <section>
            <div className={s.catalog}>
                <h1>Каталог товаров</h1>
                <div className={s.categories}>
                    <h3>Категории:</h3>
                    <nav>
                        <button onClick={()=>setCategory(0)} className={s.btn}>Все товары</button>
                        <button onClick={()=>setCategory(1)} className={s.btn}>Шины/колеса</button>
                        <button onClick={()=>setCategory(2)} className={s.btn}>Масла</button>
                        {/* <NavLink className={s.active} to="#">Все товары</NavLink>
                        <NavLink to="#">Шины/колеса</NavLink>
                        <NavLink to="#">Масла</NavLink>
                       <NavLink to="#">Ароматизаторы</NavLink> */}
                    </nav>
                </div>
                <Search handleChange={handleChange}/>
                <select onChange={sort}>
                    <option value="0">Выберите</option>
                    <option value="price_asc">По возрастанию цены</option>
                    <option value="price_desc">По убыванию цены</option>
                    <option value="count_asc">По возрастанию количества</option>
                    <option value="count_desc">По убыванию количества</option>
                </select>
                <div className={s.cards}>
                    {
                        sortedFilteredProducts.length ?
                        sortedFilteredProducts.map((product, index)=>{
                        return(
                            <Card {...product} addToCart={()=>addToCart([...cart, product.id])}/>
                        )
                    })
                    :
                    <p className={s.error}>Ничего не найдено по запросу "{query}"</p>
                    }
                    
                </div>
                <div className={s.more}>
                  <a href="#">Загрузить еще товары</a>
                </div>
            </div>
        </section>
    )
}