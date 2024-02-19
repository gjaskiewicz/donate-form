import styled from 'styled-components';

import Colors from '../colors';

const FormButton = styled.button`
    width: 238px;
    height: 52px;
    border-radius: 5px;
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;    
    cursor: pointer;
`;

const FormButtonPrimary = styled(FormButton)`
    background: ${Colors.PURPLE};
    border-style: none;
    border-width: 0px;
    color: #fff;

    &:hover {
        background: #645D93;
    }

    &:active {
        background: #241E47;
    }
`;

const FormButtonSecondary = styled(FormButton)`
    background: white;
    border-style: solid;
    border-width: 1px;
    border-color: ${Colors.PURPLE_GRAY}
    color: ${Colors.PURPLE_GRAY};

    &:hover {
        background: rgba(178, 167, 244, 0.1);
    }

    &:active {
        background: rgba(178, 167, 244, 0.25);
    }
`;

export {
    FormButtonPrimary,
    FormButtonSecondary
};