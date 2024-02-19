import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyInput from './CurrencyInput';

describe('CurrencyInput', () => {

    test('renders value', () => {
        render(<CurrencyInput amount={1950.50} />);
        const input = screen.getByRole('textbox');

        expect(input.value).toBe('1,950.50');
    });

    test('can add separator on edit', () => {
        const amountCallback = jest.fn();
        render(<CurrencyInput amount={195.00} onAmountChanged={amountCallback} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: '1950.50'}})

        expect(amountCallback.mock.calls[0][0]).toEqual(1950.50);
    });

    test('can remove separator on edit', () => {
        const amountCallback = jest.fn();
        render(<CurrencyInput amount={1950.50} onAmountChanged={amountCallback} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: '1,95.50'}})

        expect(amountCallback.mock.calls[0][0]).toEqual(195.50);
    });

    test('can handle dot - regular input', () => {
        const amountCallback = jest.fn();
        render(<CurrencyInput amount={195.50} onAmountChanged={amountCallback} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: '195..50'}})

        expect(amountCallback.mock.calls[0][0]).toEqual(195.50);
    });

    test('can handle dot - edit input', () => {
        const amountCallback = jest.fn();
        render(<CurrencyInput amount={1950.50} onAmountChanged={amountCallback} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: '1.950.50'}})

        expect(amountCallback.mock.calls[0][0]).toEqual(1.95);
    });
}); 