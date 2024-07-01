export const formateMyDate = (date) => {
  let options = {
    year: "neumeric",
    month: "shot",
    day: "neumeric",
  };
  const formateDate = new Intl.DateTimeFormat("bn", options).format(date);
  return formateDate;
};
