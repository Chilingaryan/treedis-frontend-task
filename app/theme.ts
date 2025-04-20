import { createTheme } from "@mui/material";

export const theme = (direction: "rtl" | "ltr" = "ltr") => {
  const rtl = direction === "rtl";

  return createTheme({
    direction,
    typography: {
      fontFamily: "CodecPro, sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: rtl
          ? {
              ".react-tel-input .form-control": {
                paddingRight: "unset",
                paddingLeft: "48px",
                direction: "ltr",
              },
              ".react-tel-input .selected-flag .flag": {
                left: "10px",
              },
              ".react-tel-input .selected-flag .flag .arrow": {
                right: "10px",
              },
            }
          : {},
      },

      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: 500,
            boxShadow: "none",
          },
          contained: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
          },
          notchedOutline: {
            borderColor: "#E0E0E0",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontFamily: "CodecPro, sans-serif",
          },
        },
      },
    },
  });
};
