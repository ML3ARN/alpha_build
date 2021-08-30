import { makeStyles } from '@material-ui/core/styles'
import {Container} from '@material-ui/core'


const useStyles = makeStyles({
   heroSection : {
    background: "yellow",
    maxWidth: "100vw",
    padding: "0px",
    minHeight: "45vh",
    display: "flex",
    flexDirection: "row"
  },
  heroLeft : {
    flexBasis : "40%",
    background: "white",
    display: "flex",
    flexDirection: "column",
    padding: "60px"

  },
  heroRight : {
    flexBasis : "60%",
    background: "#CBE68E",
    // margin: "10px"
  },
  NameContainer : {
    color : "#2132E6",
    fontWeight: "600",
    fontSize: "100px",
    fintStyle: "normal",
    fontFamily: "Staff X Condensed",
    marginBottom: "10px",
    lineHeight : "90px"
  },
  ProfileHeroCopy : {
    fontFamily : "Roboto",
    fontSize : "22px"
  },
  buttonsHolder : {
    marginTop: "30px"
  },
  AddtoList : {
    background : "#2132E6",
    borderRadius: "4px",
    height: "57px",
    width: "141px",
    color: "#FFFFFF",
    border : "2px solid #2132E6",
    fontFamily : "Roboto Condensed",
    fontWeight : "700",
    lineHeight: "25.2px",
    marginRight: "10px"
  },
  Contact : {
    background : "#FFFFFF",
    borderRadius: "4px",
    height: "57px",
    width: "141px",
    color: "#2132E6",
    border : "3px solid #2132E6",
    fontFamily : "Roboto Condensed",
    fontWeight : "700",
    lineHeight: "25.2px",
    marginLeft: "10px"
  }

})


const HeroSection = () => {
  const classes = useStyles()

  return (
    <Container className={classes.heroSection}>
      <HeroLeft />
      <HeroRight />
    </Container>
    )
}


const HeroLeft = () => {
    const classes = useStyles()
   return (
    <div className={classes.heroLeft}>
      <div className={classes.NameContainer}>JOHN <br />CENA</div>
      <div className={classes.ProfileHeroCopy}>I am a famous wrestler and actor. <br />I do a lot of business things. You can't see me!</div>
      <div className={classes.buttonsHolder}>
        <button className={classes.AddtoList}>ADD TO LIST</button>
        <button className={classes.Contact}>CONTACT</button>
      </div>
    </div>
    )
  }

const HeroRight = () => {
const classes = useStyles()
  return (
  <div className={classes.heroRight}>
    
  </div>
)}

export default HeroSection