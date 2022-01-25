import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  card: {
    maxWidth: 400,
    margin: "auto",
    transition: "0.5s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    marginTop: "2em",
  },
  image: {
    height: "60vh",
    margin: "1em 1em 0 1em",
  },
  card_heading: {
    textAlign: "left",
  },

  heading: {
    fontWeight: "bold",
  },

  button: {
    width: "100%",
    color: "red",
    border: "1px solid red",
  },
  name: {
    marginTop: "0px",
    marginBottom: "10px",
  },
  prices: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "0px",
    paddingTop: "0px",
    marginBottom: "20px",
    fontSize: "1.1rem",
  },
}));
