import ProductBox from "./ProductBox"
import productJson from "./../data.json"
import { useState } from "react";

function ProductsPage() {

    const [products, setProducts] = useState(productJson);
    const [updatedProducts, setUpdatedProducts] = useState(productJson);

return (
    <>
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