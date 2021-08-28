import './PhoneAuthSection.css'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const SMSVerificationCode = ({phoneNum}) => {
  const [verified, setVerified]  = useState(false)
  const [verificationCode, setVerificationVals] = useState([0,0,0,0])

  let values = []
  let history = useHistory()


    const handleDigitChange = (e) => {

    let dataKey = parseInt(e.target.getAttribute('dataKey'))
    let temp_code = verificationCode
    temp_code[dataKey] = parseInt(e.target.value)
    setVerificationVals(temp_code)

  }

  const checkValues = async () => {
    // parsing the averification code to send to twilio from the state
      let code_from_state = verificationCode.join().split(',').join("").toString()
        let payload = {
              'verificationCode' : code_from_state,
              'phoneNum' : phoneNum
            }
            let response = await fetch('http://localhost:4000/auth/verifyCode', {
              headers : { 
                "Content-Type" : "application/json" },
              method: "POST",
              body : JSON.stringify(payload)

            })

            let approval_status = await response.json()

            if(approval_status.approval) {
              // start onboarding
            } else {
              //something else happens here
            }
  }

   return (
      <>
         <div className="verificationInputsContainer">
          <input type="text" className="verificationInput" dataKey="0" onChange={e => handleDigitChange(e)} />
          <input type="text" className="verificationInput" dataKey="1" onChange={e => handleDigitChange(e)} />
          <input type="text" className="verificationInput" dataKey="2" onChange={e => handleDigitChange(e)} />
          <input type="text" className="verificationInput" dataKey="3" onChange={e => handleDigitChange(e)} />
        </div>
        <button className="AuthClickthroughButtonWhite" onClick={() => checkValues()}>NEXT</button>
      </>
    )

}


const PhoneAuthSection = (props) => {

       const [SMSSent, setSMSSent] = useState(false)
       const [phoneNum, setPhoneNum] = useState('+1 ')

         const handlePhoneNumChange = (value) => {
          let num = value.substring(3)
          num = '+1 ' + num 
          setPhoneNum(num)

        }


      const ProcessSMSAuth = async () => {

            let payload = {
              'phoneNum' : phoneNum
            }

            let response = await fetch('http://localhost:4000/auth/textauth', {
              headers : { 
                "Content-Type" : "application/json" },
              method: "POST",
              body : JSON.stringify(payload)
            })


            let response_data = await response.json()

             setSMSSent(true)
          }

          let section

       if(!SMSSent) {
          section = (
          <>
            <div id="PhoneAuthSectionBanner">
              WHAT'S YOUR NUMBER?
            </div>
            <div id="PhoneAuthSectionText">
              We connect using phone number’s because we are friends. We promise we only want to talk when we can be helpful :)
            </div>
            <div>
              <input type="text" className="PhoneNumberInput" onChange={e => handlePhoneNumChange(e.target.value)} value={phoneNum} />
            </div>
              <button onClick={() => ProcessSMSAuth()} className="AuthClickthroughButton">NEXT</button>
            <div className="DisclaimerText">
              By continuing, you agree to our Terms of Use, Privacy Policy, and agree to receive H\FC emails and updates.
            </div>
            </>
            )
        } else {
          section = (
            <>
            <div id="PhoneAuthSectionBanner">
              ENTER YOUR VERIFICATION CODE
            </div>
            <div id="PhoneAuthSectionText">
              Please enter the code we just sent you.
            </div>
            <SMSVerificationCode phoneNum={phoneNum} />         
            </>

          )
        }
        

  return (
      <div className="PhoneAuthSection">
        <center>
          {section}
         </center>
      </div>  
    )
}
    


export default PhoneAuthSection