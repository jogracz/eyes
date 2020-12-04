import { createStyles, makeStyles } from "@material-ui/core/styles";
import catpic from "../images/catpic.jpg";

const Post = (props) => {
  const styles = usePostStyles();
  const {
    post: { title, article },
  } = props;

  return (
    <div className={styles.post}>
      <img className={styles.img} src={catpic} alt="catpic" />
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.article}>{`${article.substring(
          0,
          500
        )} ...`}</div>
      </div>
    </div>
  );
};

const usePostStyles = makeStyles(() =>
  createStyles({
    post: {
      display: "flex",
      backgroundColor: "pink",
      margin: 30,
      height: 300,
    },
    img: {
      width: 300,
      height: 300,
    },
    text: {
      padding: 20,
      marginLeft: 30,
      marginRight: 30,
      display: "flex",
      flexDirection: "column",
    },
    title: {
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 20,
    },
    article: {
      lineHeight: 1.5,
    },
  })
);

export default Post;
