import { Box, styled } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  height: "100vh",
  overflow: "hidden",
});

export const BrandPanel = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: theme.spacing(8, 10),

  [theme.breakpoints.between("xs", "md")]: {
    display: "none",
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: 32,

  [theme.breakpoints.between("xs", "md")]: {
    width: "100%",
  },
}));

export const Highlight = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 1.5),
  borderRadius: theme.shape.borderRadius,
  display: "inline-block",
}));
