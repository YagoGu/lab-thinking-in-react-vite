import ProductBox from "./ProductBox"
import SearchBar from "./SearchBar"

import productJson from "./../data.json"
import { useState } from "react";

function ProductsPage() {

    const [products, setProducts] = useState(productJson);
    const [updatedProducts, setUpdatedProducts] = useState(productJson);

    const searchProduct = (nameProduct) => {
        const searchedProduct = updatedProducts.filter((product) => {
            console.log(nameProduct, product.name)
          return product.name.match(nameProduct)
        })
        setProducts(searchedProduct)
    }

return (
    <>
        <SearchBar key="id" searchProduct={searchProduct}/>

        <table>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
            </tr>
            {products.map((product) => <ProductBox key={product.id} product={product}/> )}
        </table>
    </>
)}

export default ProductsPage;