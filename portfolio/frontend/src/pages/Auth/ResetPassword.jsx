import { useEffect, useState } from 'react';
import useAuthContext from '../../context/AuthContext';
import { axiosClient } from '../../api/axios';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [errors, setErrors] = useState("");
    const [status, setStatus] = useState(null);
    const { csrf } = useAuthContext()
    const [searchParams] = useSearchParams();
    const {token} = useParams();

    useEffect(()=>{
        setEmail(searchParams.get('email'))
        console.log(email)
    })

    const handelResetPassword = async (event) => {
        event.preventDefault();
        await csrf();
        setErrors([])
        setStatus(null)
        try {
            const response = await axiosClient.post('/reset-password', { email,token,password,password_confirmation });
            setStatus(response.data.status);
            console.log(status)

        } catch (e) {

            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }

        }
    }
    return (
        <>
            <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
                            >
                                {
                                status && <div className='bg-green-700 m-2 p-2 rounded text-white'>

                                    {status}
                                    <div className='ml-3'>
                                        Go to <Link to='/login'>Login</Link>
                                    </div>

                                    </div>
                                    }
                                <div className="mb-10 text-center md:mb-16">Forgot Password</div>
                                <form onSubmit={handelResetPassword} >
                                    <div className="mb-4">
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                            className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                                        />
                                        <div className="flex">
                                            {errors.password && <span className="text-red-400 text-sm m-2 p-2">{errors.password[0]}</span>}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="password"
                                            value={password_confirmation}
                                            onChange={(e) => setPassword_confirmation(e.target.value)}
                                            placeholder="Password Confirmation"
                                            className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                                        />
                                        <div className="flex">
                                            {errors.password_confirmation && <span className="text-red-400 text-sm m-2 p-2">{errors.password_confirmation[0]}</span>}
                                        </div>
                                    </div>

                                    <div className="mb-10">
                                        <button
                                            type="submit"
                                            className="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                                        >
                                            Rest Password
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPassword
