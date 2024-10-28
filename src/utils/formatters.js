export const formatPrice = (price, currency = "€") => {
  return `${currency}${Number(price).toFixed(2)}`;
};
