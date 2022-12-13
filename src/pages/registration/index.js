import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiEyeCloseFill } from 'react-icons/ri';
import { ImEye } from 'react-icons/im';
const Registration = () => {
  let [email,setEmail] = useState()
  let [fullname,setFullname] = useState()
  let [password,setPassword] = useState()
  let [emailerr,setEmailerr] = useState()
  let [fullNameerr,setFullnameerr] = useState()
  let [passworderr,setPassworderr] = useState()
  let [show,setShow] = useState(false)


  let handleEmail = (e)=>{
    setEmail(e.target.value)
    setEmailerr("")
  }
  let handleFulname = (e)=>{
    setFullname(e.target.value)
    setFullnameerr("")
  }
  let handlePassword = (e)=>{
    setPassword(e.target.value)
    setPassworderr("")
  }
  let handleSubmit = ()=>{
    if(!email){
      setEmailerr("Email is required")
    }else{
      if( (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        setEmailerr("Valid email is required")
      }
    }
    if(!fullname){
      setFullnameerr("Fullname is required")
    }else{
      if( fullname.length <= 2){
        setFullnameerr("Fullname must be greater than 2 charecters")
      }
    }
    if(!password){
      setPassworderr("Password is required")
    }else{
      if( (!/^(?=.*[a-z])/.test(password))){
        setPassworderr("Password must have a lowercase")
      }else if( (!/^(?=.*[A-Z])/.test(password))){
        setPassworderr("Password must have a uppercase")
      }else if( (!/^(?=.*[0-9])/.test(password))){
        setPassworderr("Password must have a number")
      }else if( (!/^(?=.*[!@#$%^&*])/.test(password))){
        setPassworderr("Password must have a special character")
      }else if( (!/^(?=.{8,})/.test(password))){
        setPassworderr("Password must have at least 8 character")
      }
      
    }
  }
  let handlepassShow=()=>{
    setShow(!show);
  }
  return (
   <div className="flex justify-between px-2.5 xl:px-0 sml:px-2.5 md:px-3 xl:!mx-0">
     <div className="sml:w-1/2 flex flex-col items-end justify-center sml:mr-[30px] xl:!mr-[90px] ">
      <div className="sml:w-497px text-center sml:text-left ">
              <h1 className="font-nun font-bold text-4xl sml:text-[20px] md:!text-4xl text-lightblue">Get started with easily register</h1>
              <p className="font-nun font-normal text-xl sml:text-[16px] md:!text-2xl text-lightblue mt-9 sml:mt-3 md:!mt-9">Free register and you can enjoy it</p>
              <div className="relative">
                <input type="email" className="font-nun font-normal text-xl text-lightblue w-full border border-solid border-black py-4 sml:py-2 md:!py-4 px-6 mt-9 rounded outline-0"
                onChange={handleEmail}
                />
                <p className="absolute top-6 left-4 bg-white px-3 font-nun font-normal text-xl text-black">Email Address</p>
                <p className="top-6 left-4 bg-white px-3 font-nun font-normal  text-xl text-white bg-primary rounded mt-2">{emailerr}</p>
              </div>
              <div className="relative">
                <input type="text" className="font-nun font-normal text-xl text-lightblue w-full border border-solid border-black py-4 sml:py-2 md:!py-4 px-6 mt-9 rounded outline-0	"
                onChange={handleFulname}
                />
                <p className="absolute top-6 left-4 bg-white px-3 font-nun font-normal text-xl text-black">Full Name</p>
                <p className="top-6 left-4 bg-white px-3 font-nun font-normal  text-xl text-white bg-primary rounded mt-2">{fullNameerr}</p>
              </div>
              <div className="relative">
                <input type={show?"text":"password"} className="font-nun font-normal text-xl text-lightblue w-full border border-solid border-black py-4 sml:py-2 md:!py-4 px-6 mt-9 rounded outline-0"
                onChange={handlePassword}
                />
                <p className="absolute top-6 left-4 bg-white px-3 font-nun font-normal text-xl text-black">Password</p>
                <p className="top-6 left-4 bg-white px-3 font-nun font-normal  text-xl text-white bg-primary rounded mt-2">{passworderr}</p>
                {show ?
                <ImEye onClick={handlepassShow} className="absolute top-14 right-3"/>
                :
                <RiEyeCloseFill onClick={handlepassShow} className="absolute top-14 right-3"/>
                } 
              </div>
              <button onClick={handleSubmit} className="w-full bg-primary font-nun font-normal text-xl text-white rounded-[86px] py-2.5 sml:py-1 md:!py-2.5  mt-9">Sign up</button>
              <p className="font-nun font-bold text-xl sml:text-[16px] md:text-xl text-lightblue mt-9 sml:mt-2 md:!mt-9 text-center">Already  have an account ?<Link to="/login" className="font-nun font-bold text-xl text-[#EA6C00]"> Sign In</Link></p>
          </div>
      </div>
     <div className="sml:w-1/2">
       <picture>
        <img className="sml:h-auto md:!h-screen hidden sml:block w-full object-cover" src="images/regis.webp" loading="lazy"/>
       </picture>
     </div>
   </div>
   
  )
}

export default Registration