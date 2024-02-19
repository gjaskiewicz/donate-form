import { render } from '@testing-library/react';
import DonateSummary from './DonateSummary';

describe('DonateSummary', () => {

    const endDate = {
        month: 0,
        year: 2012
    };

    test('displays propmpt when amount is zero', () => {
        const view = render(<DonateSummary amount={0} date={endDate} />);

        expect(view.container).toHaveTextContent('Please specify donation amount.');
    });

    test('displays summary when amount is positive', () => {
        const view = render(<DonateSummary amount={10} date={endDate} />);

        expect(view.container).toHaveTextContent('You will be spending $10.00 every month until January 2012. Thank you!');
    });
});