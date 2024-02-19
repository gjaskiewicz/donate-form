import { render, screen, fireEvent } from '@testing-library/react';
import InputDateMonth from './InputDateMonth';

describe('InputDateMonth', () => {

    const startDate = {
        month: 6,
        year: 2010
    };
    const nextDate = {
        month: 7,
        year: 2010
    };
    const next2Date = {
        month: 8,
        year: 2010
    };
    const next3Date = {
        month: 9,
        year: 2010
    };

    test('renders date', () => {
        render(<InputDateMonth date={next2Date} startDate={startDate}/>);

        expect(screen.getByText('September')).toBeInTheDocument();
        expect(screen.getByText('2010')).toBeInTheDocument();
    });

    describe ('prev button state', () => {
        test('is diabled when no prev date', () => {
            render(<InputDateMonth date={nextDate} startDate={startDate}/>);
    
            const prevButton = screen.getByRole('button', { name: 'Previous date' });
            
            expect(prevButton).toBeInTheDocument();
            expect(prevButton).toBeDisabled();
        });
    
        test('is enabled when exists prev date', () => {
            render(<InputDateMonth date={next2Date} startDate={startDate}/>);
    
            const prevButton = screen.getByRole('button', { name: 'Previous date' });
            
            expect(prevButton).toBeInTheDocument();
            expect(prevButton).not.toBeDisabled();
        });
    });


    describe('clicking', () => {
        test('prev changes date', () => {
            const monthCallback = jest.fn();
            render(<InputDateMonth date={next2Date} startDate={startDate} onMonthDateChanged={monthCallback}/>);
    
            const prevButton = screen.getByRole('button', { name: 'Previous date' });
            fireEvent.click(prevButton);

            expect(monthCallback.mock.calls[0][0]).toEqual(nextDate);
        });

        test('next changes date', () => {
            const monthCallback = jest.fn();
            render(<InputDateMonth date={next2Date} startDate={startDate} onMonthDateChanged={monthCallback}/>);
    
            const nextButton = screen.getByRole('button', { name: 'Next date' });
            fireEvent.click(nextButton);

            expect(monthCallback.mock.calls[0][0]).toEqual(next3Date);
        });
    });
})

