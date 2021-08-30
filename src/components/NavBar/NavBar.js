import { AppBar, Toolbar, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import logo from './logo.svg'
import './NavBar.css'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
// import StudentProfile from '../StudentProfile/StudentProfile'

const useStyles = makeStyles({
	iconArea : {
		background: "#2132E6",
		minHeight : "64px"
	},
	toolbar : {
		background: "#FFFFFF"
	}
})

const NavBar = () => {
	const classes = useStyles()
	return (
			<AppBar position="static"  >

				<Toolbar disableGutters className={classes.toolbar}>
						<MenuItem className={classes.iconArea}>
							<img src={logo} />
						</MenuItem>
						<MenuItem>
						
						</MenuItem>
				</Toolbar>
        </AppBar >
		)
}

export default NavBar



