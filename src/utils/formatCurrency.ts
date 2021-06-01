export const formatCurrency = (
  currency: number | string | undefined | null,
  digits = 4
) => {
  if (!currency) return "0";

  return parseFloat(currency.toString()).toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
};
