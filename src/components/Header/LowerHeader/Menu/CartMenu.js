import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../redux/shop/selectors";

import { ReactComponent as CartIcon } from "../../../../icons/Cart.svg";
import { CartModal } from "../Modal/CartModal";

import { MenuStyled } from "./Menu.styled";

export const CartMenu = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector(selectCart);

  let numberOfItems = 0;
  cartItems.length > 0 &&
    cartItems.map(
      ({ quantity }) => (numberOfItems += quantity),
    );

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      !e.target.closest('[name="cart"]') &&
        setIsCartOpen(false);
    });

    return () => {
      document.removeEventListener("mousedown", (e) => {
        !e.target.closest('[name="cart"]') &&
          setIsCartOpen(false);
      });
    };
  });

  return (
    <MenuStyled $quantity={numberOfItems}>
      <button
        name="cart"
        type="button"
        aria-label="Open Cart Modal"
        onClick={() =>
          setIsCartOpen((prevState) => !prevState)
        }>
        <CartIcon />
      </button>
      {isCartOpen && (
        <CartModal onClick={() => setIsCartOpen(false)} />
      )}
    </MenuStyled>
  );
};
