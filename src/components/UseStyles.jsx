import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#06623B",
        paddingRight: "79px",
        paddingLeft: "118px",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        color: "#F6D743",
     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
  }));

  export default useStyles