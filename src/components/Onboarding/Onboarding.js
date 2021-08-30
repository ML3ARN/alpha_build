import { useState } from "react"
import NavBar from '../NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core';
import fake_modal_bg from "./fake_modal_background.svg"
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  useHistory,
  Link,
  useParams
} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Chip } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles({
	OnboardingSection : {
		padding: "0px",
		maxWidth : "100vw",
		background: "#242F57",
		flexGrow: 1,
		position: "relative"
	},
	fakeModal : {
		height: "500px",
		width: "800px",
		border: "3px solid white",
		borderRadius: "8px",
		margin: "-250px 0 0 -400px",
		position: "absolute",
		top: "50%",
		left: "50%",
		backgroundImage: `url(${fake_modal_bg})`
	},
	actionSection : {
		border: "1px solid white",
		background: "#FFFFFF",
		padding: "20px",
		borderRadius: "16px",
		width: "400px;",
		top: "50%",
		left: "50%",
		margin: "132px 0 0 111px",
		fontFamily: "Antonio",
		lineHeight: "100%",
		fontSize: "25px",
	},
	am_copy: {
		fontStyle : "normal",
		lineHeight: "20px"
	},
	ActionButton : {
		justifyContent: "center",
		padding: "24px, 32px",
		width: "220px",
		height: "60px",
		background: "#2132E6",
		borderRadius: "5px",
		border: "2px solid #2132E6",
		color: "#FFFFFF",
		fontFamily: "Roboto Condensed",
		fontWeight: "bold",
		fontSize: "14px"
	},
	resumeUploadSection : {
		border: "1px solid white",
		background: "#FFFFFF",
		padding: "20px",
		borderRadius: "8px",
		height: "600px",
		width: "900px;",
		top: "50%",
		left: "50%",
		margin: "228px 0 0 523px",
		display: "flex"
	}, 
	ResumeUploadLeft : {
		background : "#FFF186",
		margin: "10px",
		flexBasis: "50%",
		borderRadius: "10px",
		textAlign: "center",
		fontStyle: "Antonio",
		// lineHeight : "68px",
		fontWeight: "700",
		fontSize: "30px",
		wordWrap: "normal",
		paddingTop: "60px"
	},
	ResumeUploadRight : {
		// background : "green",
		margin: "10px",
		flexBasis: "50%",
		border: "1px dotted",
		borderRadius: "10px"
	}, 
	uploadResumeText : {
		fontSize: "22px",
		font : "Roboto",
		lineHeight: "2px",
		fontWeight: "normal"
	},
	NextButton : {
		background: "#242F57",
		color : "#FFFFFF",
		height: "50px",
		width: "160px",
		borderRadius : "8px",
		margin: "20px",
		fontSize: "18px"
	},
	OBLocationSection : {
		border: "1px solid white",
		background: "#FFFFFF",
		padding: "20px",
		borderRadius: "8px",
		height: "600px",
		width: "900px;",
		top: "50%",
		left: "50%",
		margin: "228px 0 0 523px",
		// display: "flex"
		fontStyle: "Antonio",
		fontWeight: "700",
		fontSize: "30px",
	},
	locationTextField : {
		width : "500px"
	},
	OBSkillsSection : {
				border: "1px solid white",
		background: "#FFFFFF",
		padding: "20px",
		borderRadius: "8px",
		height: "600px",
		width: "900px;",
		top: "50%",
		left: "50%",
		margin: "228px 0 0 523px",
		display: "flex"
	},
	OBSkillsLeft : {
		background : "#DEED60",
		margin: "10px",
		flexBasis: "40%",
		borderRadius: "10px",
		textAlign: "center",
		fontStyle: "Antonio",
		// lineHeight : "68px",
		fontWeight: "700",
		fontSize: "30px",
		wordWrap: "normal",
		paddingTop: "60px"
	},
	OBSkillsRight : {
		margin: "10px",
		flexBasis: "60%",
	
		borderRadius: "10px"
	},
	HFCChip : {
		border: "1px solid #D2D5E1",
		boxSizing: "border-box",
		borderRadius: "52px",
		display: "inline",
		padding: "6px 9px",
	},
	HFCChipPlus : {
		borderRadius: "50px",
		display: "inline",
		border : "1px solid"
	},
	OBinterestsSection : {
					border: "1px solid white",
		background: "#FFFFFF",
		padding: "20px",
		borderRadius: "8px",
		height: "600px",
		width: "900px;",
		top: "50%",
		left: "50%",
		margin: "228px 0 0 523px",
		display: "flex",
		color: "#2132E6",
		flexDirection: "column"
		
	},
	OBinterestsSectionHeader : {
		fontSize: "62px",
		fontWeight: "bold",
		fontFamily: "Antonio"

	},
	OBinterestsSectionText : {
		fontFamily: "Roboto",
		color: "#000000",
		fontSize: "18px",
		margin: "20px"
	}

})


const OnboardingContainer = () => {

		const classes = useStyles()
		let { path, url } = useRouteMatch();

	return (
			<>
					<NavBar />
					<OnboardingSection />
			</>
		)
}


const OnboardingSection = (props) => {
	const classes = useStyles()
	let [onBoardingStage, setonBoardingStage] = useState("ob_start")
	const history = useHistory()

	console.log(onBoardingStage)

		const ShowResumeUpload = () => {
				setonBoardingStage("resume_upload")
		}

		const showLocationSection = () => {
				setonBoardingStage("show_location")
		}

		const showInterestsSection = () => {
				setonBoardingStage("show_interest")
		}

		const showSkillsSection = () => {
				setonBoardingStage("show_skills")
		}

		const CompleteOnBoarding = () => {
				history.push('/collapsed_profile')
		}


	let OBSection


		switch (onBoardingStage) {
			case "resume_upload":
				OBSection =  (<><ResumeUploadSection showLocationSection={showLocationSection} /></>)
				break;
			case "show_location":
				OBSection = (<OBLocationSection showSkillsSection={showSkillsSection} />)
				break;
			case "ob_start":
				OBSection = (<OBStartSection ShowResumeUpload={ShowResumeUpload} />)
				break;
			case "show_skills":
				OBSection = (<OBSkillsSection showInterestsSection={showInterestsSection} />)
				break;
			case "show_interest":
				OBSection = (<OBInterestsSection CompleteOnBoarding={CompleteOnBoarding} />)
				break;


		}

	return (
				<Container className={classes.OnboardingSection}>
					{OBSection}
				</Container>		
				
		)

}


const OBStartSection = (props) => {
	const {url, path} = useRouteMatch()
	// console.log(`url : ${url}`)
	const classes = useStyles()
	return (
		/* class is named fakeModal because the figma calls it a modfal when it is not*/
			<div className={classes.fakeModal}>
				<div className={classes.actionSection}>
				<center>
					<b>WELCOME TO YOUR H\FC PROFILE!</b>
					<br /><br />
					<span className={classes.am_copy}>
						Your profile is your place to shine and show job recruiters who you are. Let’s make this easy and build your profile together.
					</span>
					<br /><br />
				<button  className={classes.ActionButton} onClick={() => props.ShowResumeUpload()} >LET'S DO THE DAMN THING</button>
				</center>
				</div>
			</div>

		)
}


const ResumeUploadSection = (props) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.resumeUploadSection}>
				<div className={classes.ResumeUploadLeft}>
					<h2>UPLOAD YOUR RESUME</h2>
					<span className={classes.uploadResumeText}>
						We know resumes suck, we promise we just want to save you time so you don’t need to spell out your life again.
					</span>
				</div>
				<div className={classes.ResumeUploadRight}></div>
			</div>
			<center><button className={classes.NextButton} onClick={() => props.showLocationSection()}><b>NEXT</b></button></center>
			</>
		)
}



const OBLocationSection = (props) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.OBLocationSection}>
				<h1>WHERE ARE YOU BASED?</h1>
				    <TextField
				          id="outlined-helperText"
				          label="What city are you based in?"
				          defaultValue=""
				          // helperText="Some important text"
				          variant="outlined"
				          className={classes.locationTextField}
        						/><br />
        						   ARE YOU OPEN TO IN-PERSON WORK?><br />
        						   <Switch color="default"/>		
			</div>
			<center><button className={classes.NextButton} onClick={() => props.showSkillsSection()}><b>NEXT</b></button></center>
			</>
		)
}

const OBSkillsSection = (props) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.OBSkillsSection}>
					<div className={classes.OBSkillsLeft}>
						<h2>SELECT UP TO 4 SKILLS</h2>
						<span>What are you most proud of?</span>
					</div>
					<div className={classes.OBSkillsRight}>
						      <Chip
						        label="Accounting"				        
						      />
					</div>
			</div>
			<center><button className={classes.NextButton} onClick={() => props.showInterestsSection()}><b>NEXT</b></button></center>
			</>
		)
}

const OBInterestsSection = (props) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.OBinterestsSection}>
					<div className={classes.OBinterestsSectionHeader} >WHAT ARE<br />
					YOUR PASSIONS?</div><br />
					<div className={classes.OBinterestsSectionText}>What gets you up at in the morning?</div>
					<Select
				          // labelId="demo-controlled-open-select-label"
				          // id="demo-controlled-open-select"
				          // open={open}
				          // onClose={handleClose}
				          // onOpen={handleOpen}
				          value={"Interests"}
				          // onChange={handleChange}
	        >
	        </Select>
			</div>
			<center><button className={classes.NextButton} onClick={() => props.CompleteOnBoarding()}><b>NEXT</b></button></center>
		</>
		)
}



// chip branded per Figma design file
// const HFCCHip = ({chipValue}) => {
// 	const classes = useStyles()
// 	return (
// 			<div className={classes.HFCChip}>
// 				{chipValue} <div className={classes.HFCChipPlus}>+</div>
// 			</div>
// 		)
// }










export {OnboardingContainer}








