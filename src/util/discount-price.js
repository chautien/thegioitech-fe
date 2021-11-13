import { formatCurrency } from '.';

export const discountPrice = (price, discount = 0) =>
  price && formatCurrency(price * (1 - discount / 100));
