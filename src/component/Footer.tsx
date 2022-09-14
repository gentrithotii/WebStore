import { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
    return (
      <Box
        sx={{
        background: "#F0EAEA",
        height: "7rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}
    >
<Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h6">
                Online Fruit & Veg © 2022 <br /> Powered by Group 5
                </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;