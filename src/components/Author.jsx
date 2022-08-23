import { Box, Link, Typography } from "@mui/material";

const Author = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#1976d2",
        p: 2,
        borderRadius: 3,
        mb: 1,
        color: "white",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mr: 1,
        }}
      >
        By:
      </Typography>
      <Link
        variant="h5"
        href="https://github.com/wthoutjc"
        sx={{
          color: "white",
        }}
      >
        Juan C. Ramírez
      </Link>
    </Box>
  );
};

export { Author };
