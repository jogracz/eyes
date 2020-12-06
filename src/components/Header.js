import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  AppBar,
  Avatar,
  Badge,
  ButtonBase,
  InputBase,
  Toolbar,
  Typography,
  Paper,
} from "@material-ui/core";
import logo from "../images/rn.png";
const BRAND_NAME = "Real News";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    // flexGrow: 1,
    marginLeft: 10,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  brand: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    flexGrow: 1,
    maxWidth: 250,
    marginRight: 20,
  },
  grow: {
    flexGrow: 2,
  },
  favorites: {
    // flexGrow: 1,
  },
  // root: {
  //   padding: "2px 4px",
  //   display: "flex",
  //   alignItems: "center",
  //   width: 400,
  // },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const Header = (props) => {
  const { handleFavoritesClick, setQuery, favoritesCount } = props;
  const classes = useStyles();
  const handleShowHome = () => {
    window.location.href = "/";
  };
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    setQuery(value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <ButtonBase className={classes.brand} onClick={handleShowHome}>
            <Avatar src={logo} />
            <Typography className={classes.title} variant="h6" noWrap>
              {BRAND_NAME}
            </Typography>
          </ButtonBase>
          <div className={classes.grow}></div>
          <Paper className={classes.search}>
            <InputBase
              className={classes.input}
              placeholder="Szukaj..."
              inputProps={{ "aria-label": "Search" }}
              onChange={(event) => setValue(event.target.value)}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={handleSubmit}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className={classes.grow} />
          <IconButton
            aria-label="show favorites"
            color="inherit"
            className={classes.favorites}
            onClick={handleFavoritesClick}
          >
            <Badge badgeContent={favoritesCount} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
