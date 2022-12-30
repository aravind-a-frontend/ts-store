import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { title, image, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={image} alt={`${title}`} />
      <ItemDetails>
        <span>{title}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
