export const required = (value) => {
  if (!value.toString().trim().length)  {
    return true;
  }
};

export const isNegativeOrZero = (value) => {
  if (parseInt(value.trim()) <= 0)  {
    return true;
  }
};
