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
  title: {
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
    paddingLeft: 100,
    paddingRight: 100,
    display: "flex",
    justifyContent: "space-between",
  },
  brand: {
    maxWidth: 250,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
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
      <AppBar position="fixed">
        <Toolbar className={classes.header}>
          <ButtonBase className={classes.brand} onClick={handleShowHome}>
            <Avatar src={logo} />
            <Typography className={classes.title} variant="h6" noWrap>
              {BRAND_NAME}
            </Typography>
          </ButtonBase>
          <Paper className={classes.search}>
            <InputBase
              className={classes.input}
              placeholder="Szukaj..."
              inputProps={{ "aria-label": "Search" }}
              onChange={(event) => setValue(event.target.value)}
            />
            <IconButton
              type="submit"
              aria-label="search"
              onClick={handleSubmit}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <IconButton
            aria-label="show favorites"
            color="inherit"
            onClick={handleFavoritesClick}
          >
            <Badge badgeContent={favoritesCount} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
