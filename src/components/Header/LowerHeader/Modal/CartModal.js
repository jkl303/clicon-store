import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../../../redux/shop/selectors";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { fetch } from "../../../../API";

import { ReactComponent as CrossIcon } from "../../../../icons/header/X.svg";
import { ReactComponent as ArrowRightIcon } from "../../../../icons/ArrowRight.svg";

import { removeFromCart } from "../../../../redux/shop/cartSlice";
import {
  countSalePrice,
  countPrice,
  countTotalPrice,
} from "../../../../countPrice";
import { Loader } from "../../../Loader/Loader";
import { Link } from "react-router-dom";
import {
  CartModalPriceStyled,
  ModalItemTextStyled,
  ModalLinkStyled,
  ModalListStyled,
  ModalLowerStyled,
  ModalStyled,
  ModalTitleStyled,
} from "./Modal.styled";

export const CartModal = ({ onClick }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let numberOfItems = 0;
  cartItems.length > 0 &&
    cartItems.map(
      ({ quantity }) => (numberOfItems += quantity),
    );

  console.log(items);

  console.log(countSalePrice(1999, 21));

  useEffect(() => {
    cartItems.forEach(({ id, quantity }) => {
      const getCartItems = async () => {
        try {
          setLoading(true);
          const responce = await fetch(`products/${id}`);
          responce.data.quantity = quantity;
          setItems(
            (prevState) =>
              !prevState.some((item) => item.id === id) && [
                ...prevState,
                responce.data,
              ],
          );
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      getCartItems();
    });
  }, [cartItems]);

  return (
    <ModalStyled name="cart">
      <ModalTitleStyled>
        Shopping Cart{" "}
        {numberOfItems > 0 && (
          <span>
            (
            {numberOfItems > 9
              ? numberOfItems
              : "0" + numberOfItems}
            )
          </span>
        )}
      </ModalTitleStyled>
      <ModalListStyled>
        {items.map(
          ({
            id,
            images,
            title,
            quantity,
            price,
            discountPercentage,
          }) => {
            return (
              <li key={id}>
                <img
                  src={images[0]}
                  alt={title}
                  width="80px"
                  height="80px"
                  loading="lazy"
                />
                <ModalItemTextStyled>
                  <Link
                    to={`/details/${id}`}
                    onClick={onClick}>
                    {title}
                  </Link>
                  <CartModalPriceStyled>
                    {quantity} x{" "}
                    <span>
                      {countSalePrice(
                        price,
                        discountPercentage,
                      )}
                    </span>
                  </CartModalPriceStyled>
                </ModalItemTextStyled>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(removeFromCart(id))
                  }>
                  <CrossIcon />
                </button>
              </li>
            );
          },
        )}
      </ModalListStyled>
      <ModalLowerStyled>
        <p>Sub-Total:</p>
        <span>{countTotalPrice(items)}</span>
        <ModalLinkStyled to="/cart" onClick={onClick}>
          VIEW CART
          <ArrowRightIcon />
        </ModalLinkStyled>
      </ModalLowerStyled>
      {error && Notify.failure(error.message)}
      {loading && <Loader />}
    </ModalStyled>
  );
};