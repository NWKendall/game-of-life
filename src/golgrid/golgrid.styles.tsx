import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles: any = makeStyles((theme: Theme) => 
createStyles({
    generationDisplay: {
      color: "red",
      width: "8rem",
      border: "1px solid black",
    },
    btngroupStyle: {
      display: "flex",
      justifyContent: "center",
      margin: "2%"
    }
  })
)
