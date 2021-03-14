import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePokemon } from '../store/actions';

const Cart = () => {
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<>
			<main className="cart">
				{cartItems.length <= 0 && <h2 className="title">No Items in the Cart!</h2>}
				<ul>
					{cartItems.map((cartItem) => (
						<li key={cartItem.id}>
							<div>
								<h2>{cartItem.title}
								</h2>
								<p>€{cartItem.price}</p>
								<p>Ammount: {cartItem.quantity}</p>									
							</div>
								<button className="btn btn-red" onClick={() => dispatch(removePokemon(cartItem.id))}>
									Remove from Cart
								</button>
						</li>
					))}
				</ul>
			</main>
		</>
	)
};

export default Cart;