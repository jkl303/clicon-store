import styled from "styled-components";
import { mediaQueries } from "../../../../styles/mediaQueries";
import { Link } from "react-router-dom";

export const ModalStyled = styled.div`
  position: absolute;
  z-index: 2;
  top: 44px;
  right: 0;
  width: 376px;
  border: 1px solid rgb(228, 231, 233);
  border-radius: 4px;
  box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;

  ${mediaQueries("tablet")`width: 373px;`}
  ${mediaQueries("mobile")`width: 300px;`}

  @media screen and (max-width: 767px) {
    right: ${(props) =>
      props.$wishlist ? "-55px" : "-99px"};
  }
`;

export const ModalTitleStyled = styled.h2`
  padding: 16px 24px;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--title);

  span {
    color: var(--text);
  }
`;

export const ModalListStyled = styled.ul`
  padding: 20px 24px;
  border-top: 1px solid #e4e7e9;
  border-bottom: 1px solid #e4e7e9;

  li {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    img {
      margin-right: 16px;
      border: 1px solid #f5f5f5;
    }

    a {
      transition: color 250ms ease, font-weight 100ms linear;
      color: var(--title);

      &:hover,
      &:focus {
        color: var(--primary);
        font-weight: 600;
      }
    }

    button {
      margin-left: auto;
      width: 20px;
      height: 20px;
      padding: 2px;
      border: none;
      border-radius: 2px;
      background-color: transparent;
      color: var(--disabled);
      transition: background-color 250ms ease,
        color 250ms ease;

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: var(--primary);
        color: var(--textSecondary);
      }
    }
  }
`;

export const CartModalPriceStyled = styled.span`
  display: block;
  margin-top: 6px;
  color: var(--text);

  span {
    font-weight: 600;
    color: var(--price);
  }
`;

export const WishlistModalPriceStyled = styled.span`
  display: block;

  font-weight: 600;
  color: var(--price);
`;

export const EmptyMessageStyled = styled.p`
  padding: 0 24px;
  color: var(--text);
`;

export const ModalLowerStyled = styled.div`
  display: flex;
  padding: 20px 24px;
  justify-content: space-between;
  flex-wrap: wrap;

  color: var(--text);

  span {
    margin-bottom: 20px;

    font-weight: 500;
    color: var(--title);
  }
`;

export const ModalLinkStyled = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid var(--primary);
  border-radius: 2px;
  transition: color 250ms ease, background-color 250ms ease;

  font-weight: 700;
  line-height: 3.15;
  color: var(--primary);

  &:hover,
  &:focus {
    background-color: var(--primary);
    color: var(--textSecondary);
  }
`;
