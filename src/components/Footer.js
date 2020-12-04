import { createStyles, makeStyles } from "@material-ui/core/styles";

const Footer = () => {
  const styles = useFootetStyles();

  return (
    <div className={styles.footer}>
      <div>Copyright by Joanna Graczyk 2020</div>
    </div>
  );
};

const useFootetStyles = makeStyles(() =>
  createStyles({
    footer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // position: "absolute",
      // left: 0,
      // bottom: 0,
      // right: 0,
      padding: 10,
      fontSize: 14,
    },
  })
);

export default Footer;
