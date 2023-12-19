  // name: "Bulgogi Beef Dish",
  // description: "Rib-eye beef 600 grams",
  // price: 1699 
  // quantity: 1

let Products = (props) => {

	let renderProducts=()=>(
    props.thisProducts.map((prod,idx)=>{
    return(
    <div className="product">
    <img key={idx }src={prod.image[0]} />
    <p key={idx}><b>{prod.name}</b></p>
    <p key={idx}>{prod.description}</p>
    <p key={idx}>{prod.price}</p>
    <p key={idx}>Quantity: {prod.quantity}</p>
    <p key={idx}>Idx: {idx}</p>
    <button onClick={() => props.addToCart({idx})}>Add to cart</button>	
    </div>)})
    )
	return (
	<><h1>Dishes</h1>
	<div className="productGrid">
	{renderProducts()}
	</div>
	</>)
}

export default Products