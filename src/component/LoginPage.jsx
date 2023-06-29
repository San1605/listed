import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,signInWithRedirect } from "firebase/auth";
import { auth, provider } from '../utils/fireabase';
// import { GoogleButton } from "react-google-button"

const LoginPage = () => {


    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })

    const [value, setValue] = useState("");
    const handleClick = () => {
        signInWithRedirect(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)

        })
        navigate("/home")
    }


    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);

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

                    <h2 className="font-bold text-[2.25rem]">Sign in..</h2>
                    <h2 className="text=[1rem]">Sign in to your account</h2>
                    <div>
                        {/* {value!==""?navigate("/home"):<h1>"please sign up you are not registered"</h1>} */}
                        <div className="flex flex-row h-[2rem] p-1 w-[11.5rem] border border-black rounded-lg bg-white my-2 "
                        onClick={handleClick} >
                       <img className="h-[1rem] w-[1rem] mt-[0.3rem] mr-2" src="../assets/google.png" alt="" />
                      Sign in with google
                        </div>

                    </div>
                         </div>
                <div className=" flex  flex-col border border-black h-[24rem] w-[24rem]  rounded-xl bg-white items-center justify-center">

                   
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
                            Login
                        </button>
                      
                    
                </div>
                <div>
                    <p>
                    Don’t have an account? {" "}
                            
                               <Link to="/signup">
                                <span className=" text-cyan-700 ">
                                Register here
                                </span>
                                    </Link>
                           
                        </p>
                    </div>
            </div>


        </div>
    )
}

export default LoginPage
