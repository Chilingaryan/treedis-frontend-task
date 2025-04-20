import { createTheme } from "@mui/material";

export const theme = (direction: "rtl" | "ltr" = "ltr") => {
  const isRtl = direction === "rtl";

  return createTheme({
    direction,
    typography: {
      fontFamily: "CodecPro, sans-serif",
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": {
              right: isRtl ? 25 : "auto",
              left: isRtl ? "auto" : 0,
              transformOrigin: isRtl ? "top right" : "top left",
            },

            ".MuiOutlinedInput-notchedOutline": {
              textAlign: "unset",
            },

            ".MuiFormHelperText-root": {
              textAlign: "unset",
            },
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: 500,
            boxShadow: "none",
            // paddingTop: 15,
            // paddingBottom: 15,
          },
          contained: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      // MuiTextField: {
      //   defaultProps: {
      //     variant: "outlined",
      //   },
      // },
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
