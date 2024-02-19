import React from 'react';
import styled from 'styled-components';

import { monthToText } from '../utils/DateUtils';
import { formatNumber } from '../utils/NumberUtils';

const SummaryContainer = styled.div`
    background: #F4F8FA;
    border-radius: 5px;
    padding: 24px 16px;
`;

const SummaryValue = styled.span`
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
`;

const SummaryText = styled.span`
    font-family: Work Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
`;

const DonateSummary = ({ amount, date }) => {
    if (!amount) {
        return <SummaryContainer>
            <SummaryText>Please specify donation amount.</SummaryText>
        </SummaryContainer>;
    } else {
        return <SummaryContainer>
            <SummaryText>You will be spending </SummaryText>
            <SummaryValue>${formatNumber(amount || 0)}</SummaryValue>
            <SummaryText> every month until </SummaryText>
            <SummaryValue>{ monthToText(date.month) } { date.year }</SummaryValue>
            <SummaryText>. Thank you!</SummaryText>
        </SummaryContainer>;
    }
};

export default DonateSummary;