import React, { useCallback, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Colors from '../colors';
import { formatNumber } from '../utils/NumberUtils';

import icon_dollar from '../images/icon_dollar.png';

const CurrencyInputContainer = styled.div`
    width: 100%;
`;

const InputValue = styled.input`
    height: 60px;
    width: 100%;

    border-color: ${Colors.BLUE_GRAY};
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;

    font-family: Rubik;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;

    color: ${Colors.PURPLE_GRAY};

    padding-left: 40px;
    box-sizing: border-box;
`;

const CurrencyInputIcon = styled.img`
    position: absolute;
    left: 8px;
    top: 41px;
    width: 24px;
    height: 24px;
`;

const CurrencyInput = ({ amount, onAmountChanged }) => {
    const inputRef = useRef();
    const [cursorPosition, setCursorPosition] = useState(0);

    const onInputAmountChanged = useCallback((e) => {
        const val = e.target.value;
        e.preventDefault();

        const numVal = val.replace(/[^0-9.]/g, '');
        const parts = numVal.split('.');
        const intPart = parts[0];
        const remPart = parts.slice(1).join('');

        let newAmount = 0;
        if (numVal === '') {
            newAmount = undefined;
        } else {
            newAmount = (Math.floor(Number(intPart + "." + remPart) * 100) / 100);
        }

        const oldDigits = ("" + Math.floor(amount || 0)).length;
        const newDigits = ("" + Math.floor(newAmount || 0)).length;

        const oldSep = Math.floor((oldDigits - 1) / 3);
        const newSep = Math.floor((newDigits - 1) / 3);

        let cursorShift = 0;
        if (inputRef.current.selectionStart > 1) {
            cursorShift = newSep - oldSep;
        }

        setCursorPosition(Math.max(0, inputRef.current.selectionStart + cursorShift));
        onAmountChanged(newAmount);
    }, [amount, onAmountChanged]);

    useEffect(() => {
        inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
    });

    let value = '';
    if (amount !== undefined) {
        value = formatNumber(amount);
    }

    return <CurrencyInputContainer>
        <InputValue ref={inputRef} placeholder="0.00" value={value} onChange={onInputAmountChanged} />
        <CurrencyInputIcon src={icon_dollar}/>
    </CurrencyInputContainer>;
}

export default CurrencyInput;