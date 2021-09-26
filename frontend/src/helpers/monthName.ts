const currentYear = new Date().getFullYear();

const getMonthName = (monthNumber: number): string => {
  return new Date(currentYear, monthNumber).toLocaleString('default', { month: 'long' });
};

export default getMonthName;
