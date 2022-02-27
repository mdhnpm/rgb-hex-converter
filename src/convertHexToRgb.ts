export const convertHexToRgb = (hex: string) => {
  const sanitisedHex = hex.replace("#", "").toLowerCase();

  if (validateHexString(sanitisedHex)) {
    const chars = [...sanitisedHex];
    return [
      parseInt(chars[0] + chars[1], 16),
      parseInt(chars[2] + chars[3], 16),
      parseInt(chars[4] + chars[5], 16),
    ];
  } else {
    throw new Error("Invalid HEX input");
  }
};

const validateHexString = (hex: string) => {
  const regex = new RegExp(/[0-9a-f]{6}/);
  if (hex.length === 6 || regex.test(hex)) {
    return true;
  }
  return false;
};
