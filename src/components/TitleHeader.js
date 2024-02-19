import React from 'react';
import styled from 'styled-components';

import logo from '../images/title_logo.png';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const HeaderImage = styled.img`
    width: 146px;
    height: 32px;

    margin-left: 40px;

    mix-blend-mode: multiply;
`;

const TitleHeader = () => {
  return <HeaderContainer>
    <HeaderImage src={logo} alt="Natur.ally" />
  </HeaderContainer>;
};

export default TitleHeader;