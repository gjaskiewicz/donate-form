import { formatNumber } from './NumberUtils';

describe('format number', () => {

    test('formats single digit', () => {
        expect(formatNumber(0)).toBe('0.00');
        expect(formatNumber(1)).toBe('1.00');
        expect(formatNumber(5)).toBe('5.00');
        expect(formatNumber(9)).toBe('9.00');
    });

    test('formats 3 digits', () => {
        expect(formatNumber(100)).toBe('100.00');
        expect(formatNumber(500)).toBe('500.00');
        expect(formatNumber(792)).toBe('792.00');
        expect(formatNumber(999)).toBe('999.00');
    });

    test('formats 4 digits', () => {
        expect(formatNumber(1000)).toBe('1,000.00');
        expect(formatNumber(5000)).toBe('5,000.00');
        expect(formatNumber(7921)).toBe('7,921.00');
        expect(formatNumber(9999)).toBe('9,999.00');
    });

    test('formats 7 digits', () => {
        expect(formatNumber(1000000)).toBe('1,000,000.00');
        expect(formatNumber(5000000)).toBe('5,000,000.00');
        expect(formatNumber(7921111)).toBe('7,921,111.00');
        expect(formatNumber(9999999)).toBe('9,999,999.00');
    });

    test('formats fractional', () => {
        expect(formatNumber(1.001)).toBe('1.00');
        expect(formatNumber(52.52)).toBe('52.52');
        expect(formatNumber(7921.111)).toBe('7,921.11');
        expect(formatNumber(9999999.99)).toBe('9,999,999.99');
    });
});


