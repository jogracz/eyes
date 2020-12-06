import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles, createStyles } from "@material-ui/core";

const Post = (props) => {
  const {
    post: { id, title, thumb, date, excerpt, url },
    favorite,
    toggleFavorites,
  } = props;
  const classes = usePostStyles();
  
  return (
    <Card className={classes.post}>
      <CardActionArea className={classes.postMain} href={url}>
        <CardMedia className={classes.img} image={thumb} title={title} />
        <CardContent className={classes.postText}>
          <Typography className={classes.date}>{date}</Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.postBottom}>
        <IconButton
          size="small"
          color="primary"
          onClick={() => toggleFavorites(id)}
        >
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </Card>
  );
};

const usePostStyles = makeStyles(() =>
  createStyles({
    post: {
      marginBottom: 40,
      display: 'flex',
    },
    img: {
      width: 350,
      height: 300,
    },
    postMain: {
      display: "flex",
    },
    postText: {
      width: 500,
      // display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    postBottom: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginRight: 10,
    },
    date: {
      fontSize: 12,
      color: "grey",
    },
  })
);

export default Post;
