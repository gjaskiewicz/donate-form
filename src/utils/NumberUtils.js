const formatNumber = (number) => {
    const numberString = (Math.round(number * 100) / 100).toString();
    const parts = numberString.split('.');
    let intPart = parts[0];
    let remPart = parts[1] || '00';
    if (remPart.length === 1) { remPart += '0'; }
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formattedNumber = intPart + '.' + remPart;
    return formattedNumber;
};

export {
    formatNumber
}