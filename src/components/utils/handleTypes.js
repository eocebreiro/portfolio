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
    case "logo":
      return "1.75rem";
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

export const handleButtonType = (type) => {
  switch (type) {
    case "main-page":
      return "background: none; color: white; border: 2px solid white; &:hover {background: #00b85b; border: 2px solid #00b85b;}";
    case "submit":
      return "background: #00b85b; color: white; border: 2px solid #00b85b; &:hover {background: black; border: 2px solid black;}";
    default:
      return "color: white; border: 2px solid white; &:hover {background: #00b85b; border: 2px solid #00b85b;}";
  }
};
