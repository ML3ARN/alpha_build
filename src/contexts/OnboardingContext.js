import {useContext, useState, createContext} fron 'react'

const OnBoardingContext = createContext()


const OnBoardingContextProvider = (props) => {

			


	return (
		<>
			<OnBoardingContext.Provider>
				{...props.children}
			</OnBoardingContext.Provider>
		<>

		)




}