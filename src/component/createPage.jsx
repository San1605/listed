import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../utils/fireabase";


function CreatePage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className='flex flex-col sm:flex-row '>
     <div className='flex items-center justify-center sm:w-[36.75rem] sm:h-[47.5rem] w-[34rem] h-[20rem] bg-black'>
        <h2 className=' font-bold text-[3.25rem] text-white'>Board.</h2>
    </div>

    <div className=' flex flex-col items-center justify-center sm:w-[53.35rem] sm:h-[47.5rem] w-[34rem] h-[40rem] bg-[#F5F5F5]'>
            <div className="flex items-start flex-col w-[24rem]" >

            <h2 className="font-bold text-[2.25rem]">Sign up..</h2>
            <h2 className="text=[1rem]">Create your account</h2>
         
                 </div>
        <div className=" flex  flex-col border border-black h-[24rem] w-[24rem]  rounded-xl bg-white items-center justify-center">
        <h3 className="flex items-start ml-12 w-full font-semibold" >Name</h3>
           <input
           className="h-[2.5rem] w-[21rem] border border-black rounded-lg m-2"
               type="name"
             placeholder="Enter your name"
               onChange={(event) =>
                 setValues((prev) => ({ ...prev, name: event.target.value }))
  }
/>
          <h3 className="flex items-start ml-12 w-full font-semibold" >Email Address</h3>
            <input
                className="h-[2.5rem] w-[21rem] border border-black rounded-lg m-2"
                type='email'
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                placeholder="Enter email address"
            />
             <h3 className="flex items-start ml-12 w-full    font-semibold  " >Password</h3>
            <input
               className="h-[2.5rem] w-[21rem] border border-black rounded-lg m-2"
                type="password"
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
                placeholder="Enter Password"
            />

          
                <b >{errorMsg}</b>
                <button
                 className="h-[2.5rem] w-[21rem] border border-black bg-black text-white rounded-lg m-2"
                disabled={submitButtonDisabled} onClick={handleSubmission}>
                    Sign up
                </button>
              
            
        </div>
        <div>
            <p>
            Already have an account? {" "}
                    
                       <Link to="/">
                        <span className=" text-cyan-700 ">
                        Login here
                        </span>
                            </Link>
                   
                </p>
            </div>
    </div>


</div>
  );
}

export default CreatePage;

