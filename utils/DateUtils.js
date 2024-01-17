export const DateUtils = {
  getDateString: (date) => {
    return (
      date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
    );
  },
  getNextDate: (type, count, date) => {
    const today = date ? date : new Date();
    const next = new Date(
      today.getFullYear() + (type === "year" ? count : 0),
      today.getMonth() + (type === "month" ? count : 0),
      today.getDate() + (type === "day" ? count : 0)
    );
    return next;
  },
};
