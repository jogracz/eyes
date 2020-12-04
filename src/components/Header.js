import clsx from "clsx";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import catsEyes from "../images/catsEyes.gif";



const Header = () => {
  const styles = useHeaderStyles();
  const backgroundImage = "../images/catsEyes.gif";

  return (
    <div className={styles.header}>
      <div className={styles.newsDiv}>
        <div className={clsx(styles.headerLinks)}>News</div>
      </div>
      <img classNAme={styles.headerImage} src={catsEyes} />

      <div className={clsx(styles.smallLinks)}>
        <div className={styles.headerLinks}>What is this?</div>
        <div className={styles.headerLinks}>Surprise</div>
      </div>
    </div>
  );
};

const useHeaderStyles = makeStyles(() =>
  createStyles({
    header: {
      backgroundColor: "#FFF",
      // height: 150,
      position: "fixed",
      top: "0",
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      color: "#c39d31",
    },
    headerImage: {
      flex: 2,
      height: "100%",
    },
    newsDiv: {
      flex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 50,
      fontWeight: 800,
    },
    headerLinks: {
      padding: 14,
      "&:hover": {
        border: "solid 8px #0c0c0c",
        padding: 6,
      },
    },
    smallLinks: {
      flex: 2,
      fontSize: 36,
      fontWeight: 600,
      display: "flex",
      justifyContent: "space-around",
    },
  })
);

export default Header;