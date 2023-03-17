import Button from "~/component/Button";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SelectInput from "~/component/Select";
import Product from "./Product";
import { ProductContext, ProductContextValue } from "~/context/Context";

const sortList = [
    { label: 'Price low to high', value: 'Price low to high' },
    { label: 'Price high to low', value: 'Price high to low' },
]

const Category = () => {  
    const {productList} = useContext<ProductContextValue>(ProductContext)
    const [sortType, setSortType] = useState<string>(sortList[0].value)

    useEffect(() => {
        switch (sortType) {
            case 'Price low to high':
                productList.sort((a,b) => { return b.Product_Price - a.Product_Price})
                break
            case 'Price high to low':
                productList.sort((a,b) => { return a.Product_Price - b.Product_Price})
                break
        } 
    }, [sortType]);

    return ( 
     <Container>
        <div className="header-nav">
            <span>{productList.length} items</span>
            <span className="sort-section">
                <SelectInput label='Sort' id='Sort' width='150px' valueList={sortList} setValue={setSortType}/>
            </span>
        </div>

        <div className="product-list-wrap">
            <div className="product-list">
            {productList && productList.map((product) => {
                return (<Product key={product.id} product={product}/>)
            })}
            </div>
        </div>

     </Container>
     );
}
 
export default Category;

const Container = styled.div `
    padding: 0 15px;

    .header-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 30px;
    }

    .product-list-wrap {
        .product-list{
            display: flex;
            flex-wrap: wrap;
            gap: 50px 0;
        }
    }
`