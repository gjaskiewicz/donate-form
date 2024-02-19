import { React, useCallback } from 'react';
import styled from 'styled-components';

import SmallButton from './SmallButton';

import Colors from '../colors';
import icon_larr from '../images/icon_larr.png';
import icon_rarr from '../images/icon_rarr.png';

import { advanceDate, previousDate, monthToText, monthsBetween } from '../utils/DateUtils';

const InputDateMonthContainer = styled.div`
    display: grid;
    grid-template-columns: 48px auto 48px;
    grid-template-rows: 60px;

    height: 60px;

    border-color: ${Colors.BLUE_GRAY};
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
`;

const InputDateDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InputDateMonthValue = styled.div`
    height: 20px;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
`;

const InputDateYearValue = styled.div`
    height: 16px;
    font-family: Work Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
`;

const InputDateMonth = ({ className, startDate, date, onMonthDateChanged }) => {
    const onNextMonthClick = useCallback((e) => {
        const newDate = advanceDate(date);
        onMonthDateChanged(newDate);
    }, [date, onMonthDateChanged]);

    const onPrevMonthClick = useCallback((e) => {
        const newDate = previousDate(date);
        onMonthDateChanged(newDate);
    }, [date, onMonthDateChanged]);

    const canGoBack = monthsBetween(startDate, date) > 1;

  return <InputDateMonthContainer className={className}>
    <SmallButton onClick={onPrevMonthClick} disabled={!canGoBack} aria-label={"Previous date"}>
        <img src={icon_larr} alt="Previous month"/>
    </SmallButton>
    <InputDateDisplay>
        <InputDateMonthValue>{monthToText(date.month)}</InputDateMonthValue>
        <InputDateYearValue>{date.year}</InputDateYearValue>
    </InputDateDisplay>
    <SmallButton onClick={onNextMonthClick} aria-label={"Next date"}>
        <img src={icon_rarr} alt="Next month"/>
    </SmallButton>
  </InputDateMonthContainer>;
};

export default InputDateMonth;