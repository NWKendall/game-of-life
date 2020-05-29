import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    divStyle: {
        zIndex: -999,
        position: "relative",
        top: "6rem",
        left: "15rem",
        marginTop: "-15%"
        // border: "1px solid pink",
    },
    bgDisplay: {
      zIndex: -999,
      width: "100%",
    //   hieght: "100vh",
    //   border: "1px solid green",
    },
  })
);
