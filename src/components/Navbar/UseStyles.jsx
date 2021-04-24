import { makeStyles } from "@material-ui/core";

  const useStyles = makeStyles(() => ({   
    header: {
      backgroundColor: "#06623B",
      paddingRight: "85px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 900,
      size: "18px",
      fontSize: "1em",
      marginLeft: "25px",
      marginRight: "25px",
      "@media (max-width: 900px)": {
        fontSize: "0.6em",
      },   
      '&:hover': {
        background: '#F6D743',
      },
      },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
    logo: {
      marginLeft: "5px",
    },
  }));

  export default useStyles