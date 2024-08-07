import { useEffect, useState } from "react";
import { usePrice } from "../../../hooks/usePrice";
import { fetch } from "../../../API";

import { Loader } from "../../Loader/Loader";
import { ReactComponent as ArrowIcon } from "../../../icons/ArrowRight.svg";
import { ReactComponent as AppleIcon } from "../../../icons/Apple.svg";

import { ErrorMessageStyled } from "../../../styles/common";
import {
  ShopArticleLinkStyled,
  ShopArticlePriceStyled,
  ShopArticleStyled,
} from "./ShopArticle.styled";
import { CartBtn } from "../../CartBtn/CartBtn";

export const ShopArticle = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { countSalePrice } = usePrice();

  useEffect(() => {
    const getItem = async () => {
      try {
        setLoading(true);
        const responce = await fetch("/106");
        setItem(responce.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getItem();
  }, []);

  return (
    <>
      {item && (
        <ShopArticleStyled>
          <img
            src={item.thumbnail}
            alt={item.title}
            width={180}
            height={180}
            loading="lazy"
          />
          <h3>
            <AppleIcon />
            WATCH<span>SERIES 7</span>
          </h3>
          <p>Heavy on Features. Light on Price.</p>
          <ShopArticlePriceStyled>
            Only for:
            <span>
              {countSalePrice(
                item.price,
                item.discountPercentage,
              )}
            </span>
          </ShopArticlePriceStyled>
          <CartBtn id={item.id} />
          <ShopArticleLinkStyled
            to={`/shop/${item.category}/${item.title
              .toLowerCase()
              .replaceAll(" ", "-")}?id=${item.id}`}>
            VIEW DETAILS
            <ArrowIcon />
          </ShopArticleLinkStyled>
        </ShopArticleStyled>
      )}

      {error && (
        <ErrorMessageStyled>
          {error.message}
        </ErrorMessageStyled>
      )}
      {loading && <Loader />}
    </>
  );
};
