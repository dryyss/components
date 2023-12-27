const colors = {
  background: {
    default: "#f8f9fa",
  },

  text: {
    main: "#67748e",
    focus: "#67748e",
  },

  transparent: {
    main: "transparent",
  },

  white: {
    main: "#ffffff",
    focus: "#ffffff",
  },

  black: {
    light: "#141414",
    main: "#000000",
    focus: "#000000",
  },

  primary: {
    main: "#cb0c9f",
    focus: "#ad0a87",
  },

  secondary: {
    main: "#8392ab",
    focus: "#96a2b8",
  },

  info: {
    main: "#17c1e8",
    focus: "#3acaeb",
  },

  success: {
    main: "#82d616",
    focus: "#95dc39",
  },

  warning: {
    main: "#fbcf33",
    focus: "#fcd652",
  },

  error: {
    main: "#ea0606",
    focus: "#c70505",
  },

  light: {
    main: "#e9ecef",
    focus: "#e9ecef",
  },

  dark: {
    main: "#344767",
    focus: "#344767",
  },

  grey: {
    100: "#f8f9fa",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },

  gradients: {
    primary: {
      main: "#7928ca",
      state: "#ff0080",
    },

    secondary: {
      main: "#627594",
      state: "#a8b8d8",
    },

    info: {
      main: "#2152ff",
      state: "#21d4fd",
    },

    success: {
      main: "#17ad37",
      state: "#98ec2d",
    },

    warning: {
      main: "#f53939",
      state: "#fbcf33",
    },

    error: {
      main: "#ea0606",
      state: "#ff667c",
    },

    light: {
      main: "#ced4da",
      state: "#ebeff4",
    },

    dark: {
      main: "#141727",
      state: "#3a416f",
    },
  },

  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },

    twitter: {
      main: "#55acee",
      dark: "#3ea1ec",
    },

    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },

    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },

    pinterest: {
      main: "#cc2127",
      dark: "#b21d22",
    },

    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },

    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },

    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },

    dribbble: {
      main: "#ea4c89",
      dark: "#e73177",
    },

    github: {
      main: "#24292e",
      dark: "#171a1d",
    },

    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },

    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },

  alertColors: {
    primary: {
      main: "#7928ca",
      state: "#d6006c",
      border: "#efb6e2",
    },

    secondary: {
      main: "#627594",
      state: "#8ca1cb",
      border: "#dadee6",
    },

    info: {
      main: "#2152ff",
      state: "#02c6f3",
      border: "#b9ecf8",
    },

    success: {
      main: "#17ad37",
      state: "#84dc14",
      border: "#daf3b9",
    },

    warning: {
      main: "#f53939",
      state: "#fac60b",
      border: "#fef1c2",
    },

    error: {
      main: "#ea0606",
      state: "#ff3d59",
      border: "#f9b4b4",
    },

    light: {
      main: "#ced4da",
      state: "#d1dae6",
      border: "#f8f9fa",
    },

    dark: {
      main: "#141727",
      state: "#2c3154",
      border: "#c2c8d1",
    },
  },

  badgeColors: {
    primary: {
      background: "#f883dd",
      text: "#a3017e",
    },

    secondary: {
      background: "#e4e8ed",
      text: "#5974a2",
    },

    info: {
      background: "#abe9f7",
      text: "#08a1c4",
    },

    success: {
      background: "#cdf59b",
      text: "#67b108",
    },

    warning: {
      background: "#fef5d3",
      text: "#fbc400",
    },

    error: {
      background: "#fc9797",
      text: "#bd0000",
    },

    light: {
      background: "#ffffff",
      text: "#c7d3de",
    },

    dark: {
      background: "#8097bf",
      text: "#1e2e4a",
    },
  },

  inputColors: {
    borderColor: { main: "#d2d6da", focus: "#35d1f5" },
    boxShadow: "#81e3f9",
    error: "#fd5c70",
    success: "#66d432",
  },

  sliderColors: {
    thumb: { borderColor: "#d9d9d9" },
  },

  circleSliderColors: {
    background: "#d3d3d3",
  },

  tabs: {
    indicator: { boxShadow: "#ddd" },
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
};
const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const fonts = {
  XXXS: "8px",
  XXS: "10px",
  XS: "12px",
  P0: "15px",
  P1: "18px",
  P2: "20px",
  P3: "24px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
};
const gridUnit = 8;
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};
const shadows = {};
const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
};

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  weights,
  spacing,
  breakpoints,
};
