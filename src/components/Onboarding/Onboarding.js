import { useState } from "react"
import NavBar from '../NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core';
import fake_modal_bg from "./fake_modal_background.svg"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  Link,
  useParams
} from "react-router-dom";

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
	let [onBoardingStage, setonBoardingStage] = useState(false)

	console.log(onBoardingStage)

		const ShowResumeUpload = () => {
				setonBoardingStage(true)
		}

	let OBSection

		if(onBoardingStage === false) {
			 OBSection = (<OBStartSection ShowResumeUpload={ShowResumeUpload} />)
		} else {
			 OBSection = (
			 	<>
				 	<ResumeUploadSection />
				 	<center><button className={classes.NextButton}><b>NEXT</b></button></center>
			 	</>
			 	)
		}


	return (
				<Container className={classes.OnboardingSection}>
					{OBSection}
				</Container>		
				
		)

}


const OBStartSection = (props) => {
	const {url, path} = useRouteMatch()
	console.log(`url : ${url}`)
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


const ResumeUploadSection = () => {
	const classes = useStyles()
	return (
			<div className={classes.resumeUploadSection}>
				<div className={classes.ResumeUploadLeft}>
					<h2>UPLOAD YOUR RESUME</h2>
					<span className={classes.uploadResumeText}>
						We know resumes suck, we promise we just want to save you time so you don’t need to spell out your life again.
					</span>
				</div>
				<div className={classes.ResumeUploadRight}></div>
			</div>
		)
}


// const OBStatus = () => {
// 	let { OBStatus } = useParams();
// 	return (
// 			<div>
// 				{OBStatus}
// 			</div>
// 		)
// } 

export {OnboardingContainer}


