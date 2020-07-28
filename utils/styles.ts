import { createGlobalStyle } from "styled-components";

export const { xxs, xs, sm, md, lg, xl, xxl } = {
  xxs: "@media (max-width: 32rem)", // 512px
  xs: "@media (max-width: 38rem)", // 608px
  sm: "@media (max-width: 48rem)", // 768px
  md: "@media (max-width: 64rem)", // 1024px
  lg: "@media (max-width: 80rem)", // 1280px
  xl: "@media (max-width: 90rem)", // 1440px
  xxl: "@media (max-width: 120rem)", // 1920px
};

export const Global = createGlobalStyle`
    @font-face {
        font-family: "Noto Sans KR", Inter, sans-serif;
        src: url("https://fonts.googleapis.com/earlyaccess/notosanskr.css") format("Noto Sans KR");
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Noto Sans KR", Inter, sans-serif;
        overscroll-behavior: none;
        user-select: none;
    }

    .container {
        width: 1560px;
        min-width: 1560px;
        margin: 0 auto;
        height: 100%;

        ${md} {
            width: 1280px;
            min-width: 1280px;
        }
        ${xl} {
            width: 1080px;
            min-width: 1080px;
        }
        ${lg} {
            width: 100%;
            min-width: 100%;
        }

        .row {
            display: flex;
            height: 100%;
            padding: 0 2rem;

            ${xxs} {
                padding: 0 1rem;
            }
        }

        .v-center {
            align-items: center;
        }
        .space-between {
            justify-content: space-between;
        }
        .justify-content-center {
          justify-content: center;
        }
        .align-center {
          align-items: center;
        }
    }

    .page {
        height: 100vh;
        width: 100%;
        background-color: white;

        .row {
            flex-direction: column;
        }
    }

    /** 스크롤바 커스텀 */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(34, 45, 50, 0.5);
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(34, 45, 50, 1);
    }
`;

type ColorKey =
  | "icon"
  | "default"
  | "orange"
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "error"
  | "next";

export type Colors = {
  light: string;
  normal: string;
  dark: string;
};

export type Palette = {
  [key in ColorKey]: Colors;
};

const palette: Palette = {
  /** Icon */
  icon: {
    light: "#b3b3b3",
    normal: "#666",
    dark: "#333",
  },
  /** Default */
  default: {
    light: "#5b5b5b",
    normal: "#3d3d3d",
    dark: "#1f1f1f",
  },
  // Orange
  orange: {
    light: "#ff6f4c",
    normal: "#ff5127",
    dark: "#f24d25",
  },
  // Primary
  primary: {
    light: "#2681ec",
    normal: "#0070f3",
    dark: "#0056bc",
  },
  // Secondary
  secondary: {
    light: "#f1f3f5",
    normal: "#e9ecef",
    dark: "#dee2e6",
  },
  // Tertiary
  tertiary: {
    light: "#e3e3e3",
    normal: "none",
    dark: "#b3b3b3",
  },
  // Success
  success: {
    light: "#38d9a9",
    normal: "#20c997",
    dark: "#12b886",
  },
  // Warning
  warning: {
    light: "#f8bb57",
    normal: "#f5a623",
    dark: "#f39800",
  },
  // Error
  error: {
    light: "#e55858",
    normal: "#e00",
    dark: "#be0000",
  },
  // next
  next: {
    light: "#e0e0e0",
    normal: "#bababa",
    dark: "#949494",
  },
};

export default palette;
