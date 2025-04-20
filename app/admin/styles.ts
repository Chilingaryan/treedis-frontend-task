import { Box, styled } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  height: "100vh",
  overflow: "hidden",
});

export const LeftPanel = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: theme.spacing(8, 10),
}));

export const RightPanel = styled(Box)({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: 32,
});

export const Highlight = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 1.5),
  borderRadius: theme.shape.borderRadius,
  display: "inline-block",
}));

export const Wrapper = styled(Box)({
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    background: "rgb(247, 247, 247)",
    transformOrigin: "center bottom",
    transform: "skew(-13.9deg, 0deg)",
    zIndex: -1,
  },
});
