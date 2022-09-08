import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { List } from "@mui/material";

export default function Main() {
  const cards = [1, 2, 3, 4, 5];
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {cards.map(() => (
        <Card sx={{ width: 200 }}>
          <CardContent>
            <div style={{ backgroundImage: "url(/images/Fruits/banana.jpg)", height: "100px" }}>
            </div>
          </CardContent>
          <CardActions>
            <List>
              <Button size="small">Name</Button>
              <Button size="small">Price</Button>
              <Button size="small">Add to cart</Button>
            </List>
           
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
}