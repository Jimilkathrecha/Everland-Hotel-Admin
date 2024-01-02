import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/actions/auth';

export default function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
    })

    const handlePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    const validateInput = (name, value) => {
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email address';
            }
        } else if (name === 'password') {
            const passwordRegex = /.{8,}/;
            if (!passwordRegex.test(value)) {
                return 'Password must be at least 8 characters long';
            }
        }
        return '';
    };

    const handleChangeLoginData = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
            [`${name}Error`]: validateInput(name, value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailError = validateInput('email', loginData.email);
        const passwordError = validateInput('password', loginData.password);

        setLoginData((prevData) => ({
            ...prevData,
            emailError,
            passwordError,
        }));

        if (!emailError && !passwordError) {
            dispatch(loginAction(loginData));




            // setLoginData({ email: "", password: "" })
            // navigate('/home')
        }
            console.log("🚀 ~ file: Login.jsx:67 ~ handleSubmit ~ loginData.email:", loginData.email)
    };

    return (
        <>
            <div className="w-100 h-[100vh] flex items-center justify-center ">
                <div className="border-2 border-red rounded-lg p-4 min-w-[400px] max-w-[400px]">
                    <div className="text-center">
                        <p className="font-bold tx-red fs-2">Only Admin Access</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="col mt-4">
                            <input
                                className={`form-control  `}
                                placeholder="Enter Your Mail"
                                type="text"
                                name="email"
                                id="email"
                                value={loginData?.email}
                                onChange={handleChangeLoginData}
                            />
                            <span style={{ color: 'red' }}>{loginData.emailError}</span>
                        </div>
                        <div className=" mt-4 col">
                            <div className="position-relative">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    value={loginData?.password}
                                    className={`form-control  ? "border-red" : "" }`}
                                    placeholder="Enter Password"
                                    onChange={handleChangeLoginData}
                                />
                                <div className="end-[10px] top-[7px] absolute"
                                    onClick={handlePasswordVisibility}>
                                    {isPasswordVisible ? (
                                        <i className="fa-regular fa-eye-slash "></i>
                                    ) : (
                                        <i className="fa-regular fa-eye "></i>
                                    )}
                                </div>
                                <span style={{ color: 'red' }}>{loginData.passwordError}</span>
                            </div>
                        </div>
                        <div className="col text-center mt-5 ">
                            <button type="submit" className="rounded-md tx-red border-2 border-red px-3 ">
                                <b>Login</b>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
