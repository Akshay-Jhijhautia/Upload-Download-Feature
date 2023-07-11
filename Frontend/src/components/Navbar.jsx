import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                flexGrow: 1,
                alignItems: "center",
              }}
            >
              Varthana
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
