import { css } from "@emotion/core";

export const { xxs, xs, sm, md, lg, xl, xxl } = {
  xxs: "@media (max-width: 32rem)", // 512px
  xs: "@media (max-width: 38rem)", // 608px
  sm: "@media (max-width: 48rem)", // 768px
  md: "@media (max-width: 64rem)", // 1024px
  lg: "@media (max-width: 80rem)", // 1280px
  xl: "@media (max-width: 90rem)", // 1440px
  xxl: "@media (max-width: 120rem)", // 1920px
};

export const palette = {
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

/** Global */
export const root = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Noto Sans KR", Inter, sans-serif;
    src: url("https://fonts.googleapis.com/earlyaccess/notosanskr.css")
      format("Noto Sans KR");
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
  }
  .page {
    height: 100vh;
    width: 100%;
    background-color: white;

    .row {
      align-items: center;
    }
  }
`;

export const body = css`
  body {
    font-family: "Noto Sans KR", Inter, sans-serif;
    overscroll-behavior: none;
    user-select: none;
  }
`;

/**
 * 스크롤바 커스텀
 */
export const globalScrollbar = css`
  /** width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  /** Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /** Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(34, 45, 50, 0.5);
  }
  /** Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(34, 45, 50, 1);
  }
`;

/**
 * button
 */
export const buttonStyle = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 30px;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const buttonThemes = {
  default: css`
    background: ${palette.default.normal};
    color: white;
    &:hover {
      background: ${palette.default.light};
    }
    &:active {
      background: ${palette.default.dark};
    }
  `,
  orange: css`
    background: ${palette.orange.normal};
    color: white;
    &:hover {
      background: ${palette.orange.light};
    }
    &:active {
      background: ${palette.orange.dark};
    }
  `,
  primary: css`
    background: ${palette.primary.normal};
    color: white;
    &:hover {
      background: ${palette.primary.light};
    }
    &:active {
      background: ${palette.primary.dark};
    }
  `,
  secondary: css`
    background: ${palette.secondary.normal};
    color: #343a40;
    &:hover {
      background: ${palette.secondary.light};
    }
    &:active {
      background: ${palette.secondary.dark};
    }
  `,
  tertiary: css`
    background: ${palette.tertiary.normal};
    color: #3d3d3d;
    &:hover {
      background: ${palette.tertiary.light};
    }
    &:active {
      background: ${palette.tertiary.dark};
    }
  `,
  success: css`
    background: ${palette.success.normal};
    color: white;
    &:hover {
      background: ${palette.success.light};
    }
    &:active {
      background: ${palette.success.dark};
    }
  `,
  warning: css`
    background: ${palette.warning.normal};
    color: white;
    &:hover {
      background: ${palette.warning.light};
    }
    &:active {
      background: ${palette.warning.dark};
    }
  `,
  error: css`
    background: ${palette.error.normal};
    color: white;
    &:hover {
      background: ${palette.error.light};
    }
    &:active {
      background: ${palette.error.dark};
    }
  `,
  next: css`
    background: ${palette.next.normal};
    color: black;
    &:hover {
      background: ${palette.next.light};
    }
    &:active {
      background: ${palette.next.dark};
    }
  `,
};

export const buttonSizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  default: css`
    height: 2rem;
    font-size: 0.875rem;
    padding: 0 1rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};
