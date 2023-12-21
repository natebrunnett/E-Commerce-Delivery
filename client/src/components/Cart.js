let Cart = (props) => {

	let renderCart=()=>(
    props.cart.map((prod,idx)=>{
    return(
    <div key={idx}className="cartRow">
    	<div className="hugLeft">
    		<img src={prod.image[0]} />
    		<div className="infoContainer">
    			<p><b>{prod.name}</b></p>
   				<p>{prod.price}</p>
    			<p className = "quantity">Quantity: {prod.quantity}</p>
    		</div>
    	</div>
    	<button onClick={() => props.removeFromCart(prod['_id'])}> x </button>	
    </div>)})
    )

	return(
	<>
	<h1>Cart</h1>
	<div className="cart">
	{renderCart()}
	</div>
	</>
	)
}

export default Cart