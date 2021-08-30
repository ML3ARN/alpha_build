import { useState } from "react"
import NavBar from '../NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
	mainContainer : {
		maxWidth: "100vw",
		padding: "0px",
		display: "flex",
		flexDirection : "column",
		position: "relative"
	},
	getStartedArea : {
		background : "#DEED60",
		maxWidth: "100vw",
		padding: "0px",
		height: "94vh",

	},
	getStartedAreaContent : {
		
		background: "DEED60",
		margin: "-40px 0 0 -486px",
		height:  "600px",
		width : "900px",
		position: "absolute",
		top : "20%",
		left : "50%",
		justifyContent: "center",
		textAlign: "center",
		display: "flex",
		paddingTop:"179px"
	},
	NoAnxiety : {
		display: "inline",
		borderRadius : "66px",
		background : "#2132E6",
		padding: "10px",
		margin: "20px 0 0 10px",
		// display: "flex",
		textAlign: "center",
		color: "white",
		fontWeight: "bold",
		fontSize: "20px"
		
	}, 
	StartCareer : {
		margin: "30px 0 0 0",
		color: "#2132E6",
		fontSize : "60px"
	},
	Together : {
		margin: "30px 0 0 0",
		color: "#2132E6",
		fontSize : "75px",
		fontWeight: "bold"
	},
	viewProfileBtn : {
		borderRadius : "4px",
		height: "83px;",
		width: "350px",
		background : "#FFFFFF",
		border: "3px solid #2132E6",
		color: "#2132E6",
		fontSize : "22px",
		marginTop: "30px",
		fontWeight : "bold" 
	}
})


 const CollapsedProfile = () => {
 	const classes = useStyles()
	return (
				<Container className={classes.mainContainer}>
					<NavBar />
					<GetStartedPrompt />
				</Container>
		)
}

const GetStartedPrompt = () => {
	const classes = useStyles()
	const history = useHistory()

		const gotoProfile = () => {
			history.push('/student_profile')
		}

	return (
			<Container className={classes.getStartedArea}>
				<div className={classes.getStartedAreaContent}>
				<center>
					<div className={classes.NoAnxiety}>NO MORE ANXIETY ABOUT YOUR FUTURE</div>
					<div className={classes.StartCareer}>LET'S START YOUR CAREER</div>
					<div className={classes.Together}>TOGETHER</div>
					<button className={classes.viewProfileBtn}
							onClick={() => gotoProfile()}
					>VIEW YOUR H\FC PROFILE</button>
				</center>

				</div>	
			</Container>
		)


}




export default CollapsedProfile