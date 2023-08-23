
function ProductBox(props) {
    const dataProducts = props.product

    console.log(dataProducts)

    return (
        <>
        <tr>
            <td>{dataProducts.name}</td>
            <td>{dataProducts.category}</td>
            {dataProducts.inStock && <td>Yes</td>}
            {!dataProducts.inStock && <td>No</td>}
            <td>{dataProducts.price}</td>
        </tr>
        </>
    )
}


export default ProductBox;