import { Typography, Paper } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const NoResources = (props) => {
  const { message } = props;
  const classes = useNRStyles();
  return (
    <Paper variant="outlined" className={classes.main}>
      <Typography className={classes.message}>{message}</Typography>
    </Paper>
  );
};

const useNRStyles = makeStyles(() =>
  createStyles({
    main: {
      marginTop: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 300,
      borderWidth: 5,
    },
    message: {
      fontSize: 50,
    },
  })
);

export default NoResources;
