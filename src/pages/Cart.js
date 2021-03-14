import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePokemon } from '../store/actions';

const Cart = () => {
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<>
			<main className="cart">
				{cartItems.length <= 0 && <p>No Items in the Cart!</p>}
				<ul>
					{cartItems.map((cartItem) => (
						<li key={cartItem.id}>
							<div>
								<strong>{cartItem.title}</strong> - €{cartItem.price} (
								{cartItem.quantity})
							</div>
								<button onClick={() => dispatch(removePokemon(cartItem.id))}>
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