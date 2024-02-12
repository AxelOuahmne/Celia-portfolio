
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from '../../context/AuthContext';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const{register,errors} = useAuthContext() ;

    const handelRegister = async (event) => {
        event.preventDefault();
        register({name,email,password,password_confirmation})

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
                                <div className="mb-10 text-center md:mb-16">Laraveller</div>
                                <form  onSubmit={handelRegister}>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
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
                                        { errors.name && <span className="text-red-400 text-sm m-2 p-2">{errors.name[0]}</span>}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
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
                                        { errors.email && <span className="text-red-400 text-sm m-2 p-2">{errors.email[0]}</span>}
                                        </div>
                                    </div>
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
                                        { errors.password && <span className="text-red-400 text-sm m-2 p-2">{errors.password[0]}</span>}
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
                                        { errors.password_confirmation && <span className="text-red-400 text-sm m-2 p-2">{errors.password_confirmation[0]}</span>}
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
                                            Register
                                        </button>
                                    </div>
                                </form>
                                <p className="text-base text-[#adadad]">
                                    Not a member yet?
                                    <Link to="/login" className="text-primary hover:underline">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register;
