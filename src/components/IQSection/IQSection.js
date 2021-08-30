
import { makeStyles } from '@material-ui/core/styles'
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({

})

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


export default IQSection