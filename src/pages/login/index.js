import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { RiEyeCloseFill } from 'react-icons/ri';
import { ImEye } from 'react-icons/im';
const Login = () => {
  let [email,setEmail]  = useState();
  let [password,setPassword]  = useState();
  let [emailerr,setEmailerr]  = useState();
  let [passwordeerr,setPassworderr]  = useState();
  let [show,setShow] = useState(false)


  let handleEmail = (e)=>{
    setEmail(e.target.value);
    setEmailerr("");
  }
  let handlepassword = (e)=>{
    setPassword(e.target.value);
    setPassworderr("");
  }
  let hangleSubmit = ()=>{
    if(!email){
      setEmailerr("Required is email")
    }
    if(!password){
      setPassworderr("Required is password")
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
    <div className="flex justify-between px-2.5 ">
    <div className="sml:w-1/2 flex flex-col items-end justify-center  sml:mr-[30px] xl:!mr-[90px]">
     <div className="sml:w-497px  text-center sml:text-left ">
             <h1 className="font-nun font-bold text-4xl text-lightblue"> Login to your account!</h1>
             <button className="w-full font-open font-medium text-xl text-black rounded-[5px] py-6 mt-9 border border-solid border-black"><FcGoogle className="inline-block mr-6"/> Login with Google</button>
             <div className="relative">
               <input type="email" className="font-nun font-normal text-xl text-lightblue w-full border-b border-solid border-black py-4 sml:py-2 md:!py-4 mt-9  outline-0"
               onChange={handleEmail}
               />
               <p className="absolute top-6 bg-white  font-nun font-normal text-xl text-black">Email Address</p>
               <p className=" font-nun font-normal text-xl text-black">{emailerr}</p>
             </div>
             <div className="relative">
               <input type={show?"text":"password"} className="font-nun font-normal text-xl text-lightblue w-full border-b border-solid border-black py-4 sml:py-2 md:!py-4  mt-9  outline-0	"
                onChange={handlepassword}
               />
               <p className="absolute top-6 bg-white font-nun font-normal text-xl text-black">Password</p>
               <p className=" font-nun font-normal text-xl text-black">{passwordeerr}</p>
               {show ?
                <ImEye onClick={handlepassShow} className="absolute top-14 right-3"/>
                :
                <RiEyeCloseFill onClick={handlepassShow} className="absolute top-14 right-3"/>
                } 
             </div>
             <button onClick={hangleSubmit} className="w-full bg-primary font-nun font-normal text-xl text-white rounded-[5px] py-2.5 mt-9">Login to Continue</button>
             <p className="font-nun font-bold text-xl text-lightblue mt-9 text-center">Don’t have an account ? Sign up</p>
         </div>
     </div>
    <div className="sml:w-1/2 ">
      <picture>
       <img className="sml:h-auto md:!h-screen hidden sml:block w-full w-full object-cover" src="images/rec.webp" loading="lazy"/>
      </picture>
    </div>
  </div>
  )
}

export default Login