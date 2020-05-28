import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles: any = makeStyles((theme: Theme) => 
createStyles({
    generationDisplay: {
      color: "black",
    },
    btngroupStyle: {
      display: "flex",
      justifyContent: "center",
      margin: "5%"
    },
    canvasStyle: {
      backgroundColor: "white",
      '&:hover': {
        background: "pink",
        cursor: "pointer"
      }
    }
  })
)
