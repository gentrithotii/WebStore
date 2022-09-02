import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "/images/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    logo: {
      maxWidth: 40,
      marginRight: '10px'
    }
  })
);

 function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: 'black'}} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt=" Fresh Fruits!" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit">Products</Button>
          </Typography>

          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
