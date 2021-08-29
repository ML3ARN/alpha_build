import { useState, createContext } from 'react'

const AuthContext = createContext()
	

const AuthContextProvider = (props) => {
	const [sess_id, setSessID] = useState(0)
	return (

	<>
		<AuthContext.Provider value={boom="hi"}>
			{props.children}
		</AuthContext.Provicer>
	</>	
)}

	export default AuthContextProvider