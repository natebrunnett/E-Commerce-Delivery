let Cart = (props) => {

	let renderCart=()=>(
    props.cart.map((prod,idx)=>{
    return(
    <div className="cartRow">
    	<div className="hugLeft">
    		<img key={idx }src={prod.image[0]} />
    		<div className="infoContainer">
    			<p key={idx}><b>{prod.name}</b></p>
   				<p key={idx}>{prod.price}</p>
    			<p className = "quantity" key={idx}>Quantity: {prod.quantity}</p>
    		</div>
    	</div>
    	<button> x </button>	
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