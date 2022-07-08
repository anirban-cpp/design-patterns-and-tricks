import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const AcordianContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Inner = styled.div`
  position: absolute;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  text-align: left;
  cursor: pointer;
  transition: color linear 0.2s;

  &:hover {
    color: #ff032d;
  }
`;

const HeaderIcon = styled.span`
  transform: rotate(${(props) => (props.isActive ? 90 : 0)}deg);
  transition: all 0.2s;

  &:hover {
    color: #ff032d;
  }
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(props) => {
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
  transition: height 0.35s;
`;

const AcordianContent = ({ onClick, itemName, itemContent, isActive }) => {
  return (
    <div style={{ borderBottom: '1px solid lightgray', marginBottom: '2rem' }}>
      <Header onClick={onClick}>
        {itemName}
        <HeaderIcon isActive={isActive} className="material-icons">
          <MdKeyboardArrowRight size={25} />
        </HeaderIcon>
      </Header>
      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </div>
  );
};

export { AcordianContainer, AcordianContent };
