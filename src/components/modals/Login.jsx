import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // const handleChangeLoginData = (e) => {
    //     const { name, value } = e.target;
    //     formik.setFieldValue(name, value);
    // };
    const handlePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };
    return (
        <>
            <div className="w-100 h-[100vh] flex items-center justify-center ">
                <div className="border-2 border-red rounded-lg p-4 min-w-[400px] max-w-[400px]">
                    <div className="text-center">
                        <p className="font-bold tx-red fs-2">Only Admin Access</p>
                    </div>
                    <form>
                        <div className="col mt-4">
                            <input
                                className={`form-control  `}
                                // ${formik.touched?.email && formik.errors?.email ? "is-invalid" : ""}
                                placeholder="Enter Your Mail"
                                type="text"
                                name="email"
                                id="email"
                            // onChange={handleChangeLoginData}
                            // onBlur={formik.handleBlur}
                            // value={formik.values?.email}
                            />
                            {/* {formik.touched.email && formik.errors.email && (
                                        <div className="invalid-feedback">{formik.errors.email}</div>
                                    )} */}
                        </div>
                        <div className=" mt-4 col">
                            <div className="position-relative">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    className={`form-control  ? "border-red" : "" }`}
                                    // ${formik.touched?.password && formik.errors?.password

                                    placeholder="Enter Password"
                                // onChange={handleChangeLoginData}
                                // onBlur={formik.handleBlur}
                                // value={formik.values?.password}
                                />
                                <div className="end-[10px] top-[7px] absolute"
                                    onClick={handlePasswordVisibility}>
                                    {isPasswordVisible ? (
                                        <i className="fa-regular fa-eye-slash "></i>
                                    ) : (
                                        <i className="fa-regular fa-eye "></i>
                                    )}
                                </div>
                                {/* {formik.touched.password && formik.errors.password && (
                                            <div className="tx-red fs-6">{formik.errors.password}</div>
                                        )} */}
                            </div>
                        </div>
                        <div className="col text-center mt-5 ">
                            <Link to="/home">
                                <button type="submit" className="rounded-md tx-red border-2 border-red px-3 ">
                                    <b>Login</b>
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
