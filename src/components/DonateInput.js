import React from 'react';
import styled from 'styled-components';

import InputLabel from '../common/InputLabel';
import InputDateMonth from '../common/InputDateMonth';
import CurrencyInput from '../common/CurrencyInput';
import DonateTotalAmount from './DonateTotalAmount';
import DonateSummary from './DonateSummary';

import { monthsBetween } from '../utils/DateUtils';

const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 558px) {
        flex-direction: column;
        gap: 16px;
    }
`;

const InputControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    width: 248px;
    gap: 6px;
    @media (max-width: 558px) {
        width: 100%;
    }
`;

const SummaryRow = styled.div`
    margin-top: 32px;

    display: flex;
    flex-direction: column;

    border-color: #E9EEF2;
    border-width: 1px;
    border-style: none;
    border-radius: 5px;

    @media (max-width: 558px) {
        border-style: solid;
    }
`;

const DonateInput = ({ amount, startDate, date, onMonthDateChanged, onAmountChanged }) => { 

    const totalAmount = monthsBetween(startDate, date) * (amount || 0);
    return <>
        <InputRow>
            <InputControlContainer>
                <InputLabel>I can donate</InputLabel>
                <CurrencyInput amount={amount} onAmountChanged={onAmountChanged} />
            </InputControlContainer>
            <InputControlContainer>
                <InputLabel>Every month until</InputLabel>
                <InputDateMonth date={date} startDate={startDate} onMonthDateChanged={onMonthDateChanged} ></InputDateMonth>
            </InputControlContainer>
        </InputRow>
        <SummaryRow>
            <DonateTotalAmount amount={totalAmount} />
            <DonateSummary amount={amount} date={date} />
        </SummaryRow>
    </>;
};

export default DonateInput;