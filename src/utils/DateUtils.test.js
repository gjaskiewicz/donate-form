import { 
    advanceDate,
    previousDate,
    monthToText,
    monthsBetween
} from './DateUtils';

describe('next / previous date', () => {
    test('shifts month without year change', () => {
        const date = { 
            month: 6,
            year: 2010
        };

        expect(advanceDate(date)).toEqual({
            month: 7,
            year: 2010
        });
        expect(previousDate(date)).toEqual({
            month: 5,
            year: 2010
        });
    });

    test('handles year change', () => {
        const firstDate = { 
            month: 0,
            year: 2011
        };
        const lastDate = { 
            month: 11,
            year: 2010
        };

        expect(advanceDate(lastDate)).toEqual(firstDate);
        expect(previousDate(firstDate)).toEqual(lastDate);
    });
});

describe('monthBetween', () => {
    test('calculate in year', () => {
        const date1 = { 
            month: 1,
            year: 2011
        };
        const date2 = { 
            month: 3,
            year: 2011
        };

        expect(monthsBetween(date1, date2)).toBe(2);
    });

    test('calculate between years', () => {
        const date1 = { 
            month: 1,
            year: 2011
        };
        const date2 = { 
            month: 3,
            year: 2012
        };

        expect(monthsBetween(date1, date2)).toBe(14);
    });
});

describe('monthToText', () => {
    test('gives month names', () => {
        for (var i = 0; i < 12; i++) {
            expect(monthToText(i)).toBeDefined();
        }
    });
});
