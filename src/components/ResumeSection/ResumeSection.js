
import { makeStyles } from '@material-ui/core/styles'
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ResumeSection = () => {

  return (
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          RESUME SECTION
          </AccordionSummary>
          <AccordionDetails>
            This is the resume section
          </AccordionDetails>
        </Accordion>
      </div>
    )
}

export default ResumeSection