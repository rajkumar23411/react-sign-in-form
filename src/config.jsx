export const Logo = "https://aimedlabs.com/logo1.svg";
export const mediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;
export const colors = {
    primary: "#4834d4",
    primaryLight: "#686de0",
    hoverColor: "#6c5ce7",
    borderColor: "rgba(0, 0, 0, 0.5)",
    textColor: "#444",
    smallText: "#777",
    dark: "#222",
    bg_light: "rgba(255, 255, 255, 0.95)",
};

export const textSize = {
    xs: mediaQuery(786) ? "0.6rem" : "0.8rem",
    sm: mediaQuery(786) ? "0.8rem" : "0.9rem",
    base: mediaQuery(786) ? "0.9rem" : "1rem",
    md: mediaQuery(786) ? "1rem" : "1.2rem",
    lg: "1.5rem",
    xl: mediaQuery(786) ? "1.5rem" : "2rem",
    "2xl": "2.5rem",
    "3xl": "3rem",
    "4xl": "3.5rem",
};
