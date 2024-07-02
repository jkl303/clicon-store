import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

export const SectionStyled = styled.div`
  padding: 72px 0;
`;

export const TitleStyled = styled.h2`
  text-align: ${(props) =>
    props.$left ? "left" : "center"};
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  color: var(--title);
`;

export const ItemListStyled = styled.ul`
  display: flex;
  grid-area: list;
  flex-wrap: wrap;
  gap: 16px;

  ${mediaQueries("mobile")`
      li {width: 100%;}`}
`;

export const ErrorMessageStyled = styled.p`
  padding: 20px;

  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
`;

export const CartBtnStyled = styled.button`
  display: flex;
  width: 176px;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid var(--primary);
  border-radius: 2px;
  background-color: var(--primary);
  transition: background-color 250ms ease, color 250ms ease;

  font-weight: 700;
  line-height: 1;
  color: var(--textSecondary);

  svg {
    ${({ $inList }) => {
      return $inList && "fill: #fff;";
    }}
  }

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: var(--primary);

    svg {
      ${({ $inList }) => {
        return $inList && "fill: var(--primary);";
      }}
    }

    &:disabled {
      cursor: default;
      color: #fff;
    }
  }

  &:disabled {
    border-color: #adb7bc;
    background-color: #adb7bc;
  }
`;

/// List Styles

export const ListWrapper = styled.div`
  border: 1px solid var(--disabledSecondary);

  h2 {
    padding: 20px 24px;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    color: var(--title);
  }

  > p {
    padding: 24px;
    color: var(--text);
  }
`;

export const ListPriceStyled = styled.p`
  gap: 4px;
  font-weight: 500;
  color: var(--title);

  span {
    text-decoration-line: line-through;
    font-weight: 400;
    color: ${(props) =>
      props.$gray ? "var(--text)" : "#929fa5"};
  }
`;

export const ListRemoveBtnStyled = styled.button`
  height: 24px;
  padding: 0;
  border: none;
  background-color: #fff;
  color: var(--disabled);
  transition: color 200ms ease;

  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--danger);
  }
`;
