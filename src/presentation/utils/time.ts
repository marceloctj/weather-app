export const formatToHourString = (date: Date) => {
  const hour = date.getHours();
  const period = hour > 12 ? 'PM' : 'AM';
  return `${hour.toString().padStart(2, '0')} ${period}`;
};
