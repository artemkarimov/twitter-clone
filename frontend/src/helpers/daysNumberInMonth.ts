const getDaysNumber = (year: number, month: number): number => new Date(year, month, 0).getDate();

export default getDaysNumber;
