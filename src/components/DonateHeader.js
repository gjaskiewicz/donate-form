import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import SmallButton from '../common/SmallButton';

import logo from '../images/natur_logo.png';
import icon_close from '../images/icon_close.png';
import Colors from '../colors';

const DonateHeaderContainer = styled.div.attrs(props => props)`
    background: ${Colors.ACCENT};
    padding: 20px 40px;
    gap: 20px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;

    @media (max-width: 427px) {
        justify-content: center;
        display: ${props => props.$dismissed ? 'none' : 'flex'};
    }

    position: relative;

    border-radius: 5px 5px 0px 0px;
`;

const DonateHeaderTextContainer = styled.div`
    font-family: Work Sans;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0px;
    text-align: left;
    color: ${Colors.PURPLE};
`;

const DonateHeaderSubTextContainer = styled.div`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: ${Colors.PURPLE};
`;

const DonateHeaderLogo = styled.img`
    width: 72px;
    height: 72px;
`;

const CloseButton = styled(SmallButton)`
    position: absolute;
    top: 16px;
    right: 16px;
    display: none;

    @media (max-width: 427px) {
        display: block;
    }
`;

const DonateHeader = ({text, subtext}) => {
    const [headerHidden, setHeaderHidden] = useState(false);

    const onCloseButtonClicked = useCallback((e) => {
        e.preventDefault();
        setHeaderHidden(true);
    }, []);

  return <DonateHeaderContainer $dismissed={headerHidden}>
    <DonateHeaderLogo src={logo} alt="Logo" />
    <div>
        <DonateHeaderTextContainer>{text}</DonateHeaderTextContainer>
        <DonateHeaderSubTextContainer>{subtext}</DonateHeaderSubTextContainer>
    </div>
    <CloseButton $size={40} onClick={onCloseButtonClicked} data-testid={"CloseHeader"} $hoverColor="#F2D0C1" $activeColor="#F2D0C1">
        <img src={icon_close} alt="Hide header" />
    </CloseButton>
  </DonateHeaderContainer>;
};

export default DonateHeader;