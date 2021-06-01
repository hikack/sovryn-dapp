export const ellipseBetween = (string: string, charectersCount = 4) => {
  const stringLength = string.length;

  return stringLength > 12
    ? `${string.substr(0, charectersCount)}...${string.substr(
        stringLength - charectersCount,
        stringLength
      )}`
    : string;
};
