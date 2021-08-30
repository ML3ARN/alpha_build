import { makeStyles } from '@material-ui/core/styles'
import {Container} from '@material-ui/core'
import ResumeSection from '../ResumeSection/ResumeSection'
import IQSection from '../IQSection/IQSection'

const useStyles = makeStyles({
   profileSection : {
    background : "white",
    padding: "0px",
    maxWidth: "100vw",
    flexGrow: 1
  }
})

const ProfileSection = () => {
  const classes = useStyles()
  return (
      <Container className={classes.profileSection}>
        <ResumeSection />
        <IQSection />
      </Container>
    )
}

export default ProfileSection