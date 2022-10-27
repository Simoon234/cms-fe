import React from 'react';
import styled from 'styled-components';

interface BurgerInterface {
    setOpen: (x: (y: boolean) => boolean) => void;
    setActive: (x: boolean) => void;
    open: boolean;
}

export interface OpenProp {
    open: boolean;
}


export const Burger = ({setOpen, open, setActive}: BurgerInterface) => {
    const handleBurger = () => {
        setOpen((prev) => !prev);
        setActive(true)
    }
    return (
        <StyledBurger open={open} onClick={handleBurger}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    )
}


export const StyledBurger = styled.button<OpenProp>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  position: fixed;
  right: 2.2rem;
  cursor: pointer;
  padding: 0;
  z-index: 2001;
  margin: 0 auto;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #F29F09;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

;
`;