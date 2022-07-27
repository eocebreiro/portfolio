// Get color
export const handleColorType = (color) => {
  switch (color) {
    case "primary":
      return "#00b85b";
    case "dark":
      return "";
    case "light":
      return "";
    case "danger":
      return "";
    case "success":
      return "";
    default:
      return color;
  }
};

export const handleDesktopSizeType = (size) => {
  //Desktop
  switch (size) {
    case "XL":
      return "3rem";
    case "L":
      return "3rem";
    case "lead":
      return "1.25rem";
    case "normal":
    case "N":
      return "1.15rem";
    case "S":
      return "1rem";
    default:
      return "1.15rem";
  }
};
