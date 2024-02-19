import { render, screen } from '@testing-library/react';
import DonateTotalAmount from './DonateTotalAmount';

describe('DonateTotalAmount', () => {

    test('renders default when amount is not specified', () => {
        render(<DonateTotalAmount amount={undefined} />);

        expect(screen.getByText('Total amount')).toBeInTheDocument();
        expect(screen.getByText('$0.00')).toBeInTheDocument();
    });

    test('renders amount when amount is specified', () => {
        render(<DonateTotalAmount amount={1000.50} />);

        expect(screen.getByText('Total amount')).toBeInTheDocument();
        expect(screen.getByText('$1,000.50')).toBeInTheDocument();
    });
});