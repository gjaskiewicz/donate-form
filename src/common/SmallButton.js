import styled from 'styled-components';

const SmallButton = styled.button.attrs(props => { return {
    size: props.size || 24,
    hoverColor: props.hoverColor || '#F3F5FE',
    activeColor: props.activeColor || '#E8EAF2',
}; })`
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    padding: 0;
    border: 0;
    margin: auto;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0);

    & > img {
        width: 24px;
        height: 24px;
    }

    &:hover {
        background: ${p => p.hoverColor};
    }

    &:active {
        background: ${p => p.activeColor};
    }

    &:disabled {
        opacity: 0;
    }
`;

export default SmallButton;