const advanceDate = (date) => {
    if (date.month >= 11) {
        return {
            month: 0,
            year: (date.year + 1)
        };
    } else {
        return {
            ...date,
            month: (date.month + 1)
        };
    }
};

const previousDate = (date) => {
    if (date.month <= 0) {
        return {
            month: 11,
            year: (date.year - 1)
        };
    } else {
        return {
            ...date,
            month: (date.month - 1)
        };
    }
}

const monthToText = (m) => {
    switch (m) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
        default: return "---";
    }
};

const monthsBetween = (d1, d2) => {
    return (d2.year - d1.year) * 12 + (d2.month - d1.month);    
}

export {
    advanceDate,
    previousDate,
    monthToText,
    monthsBetween
};