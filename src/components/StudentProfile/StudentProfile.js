import NavBar from '../NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper, AppBar, Toolbar, Accordion,
          AccordionSummary, AccordionDetails, Typography  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import HeroSection from '../HeroSection/HeroSection'
import ProfileSection from '../ProfileSection/ProfileSection'



const useStyles = makeStyles({
  mainContainer : {
    background : "red",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    maxWidth: "100vw",
    padding: "0px"
  },
  navBar : {
    maxWidth: "100vw",
    minHeight: "64px;"
  }
})

const StudentProfileContainer = () => {
	const classes = useStyles()
	return (
		
		<Container className={classes.mainContainer}>
			<NavBar />
			<HeroSection />
			<ProfileSection />
		</Container>
		)
}






const IQSection = () => {
  const classes = useStyles()
  return (
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            IQ Section
          </AccordionSummary>
          <AccordionDetails>
            This is the IQSection
          </AccordionDetails>
        </Accordion>
      </div>
    )
}



export default StudentProfileContainer