const getNumberOfDays = (year: number | undefined, month: number | undefined): number => {
  if (year && month) return new Date(year, month, 0).getDate();
  else if (!year && month) return new Date(2024, month, 0).getDate();
  return 31;
};

export default getNumberOfDays;
