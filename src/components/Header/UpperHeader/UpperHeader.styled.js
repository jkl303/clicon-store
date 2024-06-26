import styled from "styled-components";
import { Link } from "react-router-dom";

export const UpperHeaderStyled = styled.div`
  padding: 16px 0;
  background-color: var(--title);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FridayStyled = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--textSecondary);

  span {
    display: inline-block;
    margin-right: 12px;
    padding: 6px 10px;
    transform: rotate(-3deg);
    background-color: #f3de6d;

    font-size: 20px;
    line-height: 1.4;
    color: var(--title);
  }
`;

export const HeadSaleStyled = styled.p`
  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--textSecondary);

  span {
    margin: 0 8px;

    font-size: 40px;
    line-height: 1.2;
    color: var(--warning);
  }
`;

export const ShopLinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: var(--warning);
  transition: background-color 250ms ease;

  font-size: 14px;
  font-weight: 700;
  line-height: 3.43;
  color: var(--title);

  &:hover,
  &:focus {
    background-color: var(--textSecondary);
  }

  svg {
    margin-left: 8px;
  }
`;
