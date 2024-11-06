import { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Login_Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showsignupPassword, setShowSignupPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();

    // State for login form
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // State for signup form
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const toggleSignupPasswordVisibility = () => {
        setShowSignupPassword((prevState) => !prevState);
    };

    const handleToggleForm = () => {
        setIsSignup((prevState) => !prevState);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${backendUrl}/auth/login`,
                { email: loginEmail, password: loginPassword },
                { withCredentials: true }
            );
            if (response.status === 200) {
                toast.success(response.data.message, { position: "top-center" });
                navigate(-1);
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Something went wrong. Please try again later!";
            toast.error(errorMessage, { position: "top-center" });
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${backendUrl}/auth/signup`,
                { name: signupName, email: signupEmail, password: signupPassword },
                { withCredentials: true }
            );
            if (response.status === 200) {
                toast.success(response.data.message, { position: "top-center" });
                navigate(-1);
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Something went wrong. Please try again later!";
            toast.error(errorMessage, { position: "top-center" });
        }
    };

    return (
        <div className="Parent-Log flex justify-center items-center bg-black">
            <div
                className="w-full md:w-[40%] relative overflow-x-hidden flex min-h-screen justify-center items-center"
                style={{
                    overflowY: isSignup ? 'scroll' : 'hidden',
                    scrollbarWidth: isSignup ? 'auto' : 'none',
                    scrollbarWidth: 'none'
                }}
            >
                {/* Login form */}
                <form
                    onSubmit={handleLoginSubmit}
                    className={`login w-full absolute bg-[#121225] px-5 md:px-10 py-10 flex flex-col transition-all duration-500 shadow-lg rounded-lg ${isSignup ? 'left-[100%] md:left-[650px]' : 'left-0'
                        }`}
                >
                    <h1 className="mx-auto text-3xl font-serif text-white font-bold mt-5">
                        Login
                    </h1>
                    <label className="text-white mt-10 font-mono text-xl mb-2">
                        Email:
                    </label>
                    <input
                        required
                        type="email"
                        placeholder="Enter your Email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="px-3 py-2 outline-none rounded-lg shadow-md bg-[#121225] border-2 text-white border-white"
                        style={{
                            boxShadow: '0 0 10px 3px rgba(255, 255, 255, 0.6)',
                        }}
                    />
                    <label className="text-white mt-4 font-mono text-xl mb-2">
                        Password:
                    </label>
                    <div className="relative">
                        <input
                            required
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="px-3 py-2 w-full outline-none rounded-lg shadow-md bg-[#121225] border-2 text-white border-white"
                            style={{
                                boxShadow: '0 0 10px 3px rgba(255, 255, 255, 0.6)',
                            }}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button type="submit" className="text-white mt-8 mx-auto text-xl font-semibold border-2 w-36 py-2 rounded-full hover:bg-red-700 transition-all duration-500">
                        Login
                    </button>
                    <p className="text-white mt-4 mx-auto">
                        Don't have an account?{' '}
                        <span onClick={handleToggleForm} className="text-red-700 underline cursor-pointer font-mono">
                            Signup
                        </span>
                    </p>
                </form>

                {/* Signup form */}
                <form
                    onSubmit={handleSignupSubmit}
                    className={`signup w-full absolute bg-[#121225] px-5 md:px-10 py-10 flex flex-col transition-all duration-500 shadow-lg rounded-lg ${isSignup ? 'left-0' : 'left-[100%] md:left-[650px] my-3'
                        }`}
                >
                    <h1 className="mx-auto text-3xl font-serif text-white font-bold mt-5">
                        Signup
                    </h1>
                    <label className="text-white mt-10 font-mono text-xl mb-2">Name:</label>
                    <input
                        required
                        type="text"
                        placeholder="Enter your name"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        className="px-3 py-2 outline-none rounded-lg shadow-md bg-[#121225] border-2 text-white border-white"
                        style={{
                            boxShadow: '0 0 10px 3px rgba(255, 255, 255, 0.6)',
                        }}
                    />
                    <label className="text-white mt-4 font-mono text-xl mb-2">Email:</label>
                    <input
                        required
                        type="email"
                        placeholder="Enter your Email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="px-3 py-2 outline-none rounded-lg shadow-md bg-[#121225] border-2 text-white border-white"
                        style={{
                            boxShadow: '0 0 10px 3px rgba(255, 255, 255, 0.6)',
                        }}
                    />
                    <label className="text-white mt-4 font-mono text-xl mb-2">Password:</label>
                    <div className="relative">
                        <input
                            required
                            type={showsignupPassword ? 'text' : 'password'}
                            placeholder="Enter your Password"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            className="px-3 py-2 w-full outline-none rounded-lg shadow-md bg-[#121225] border-2 text-white border-white"
                            style={{
                                boxShadow: '0 0 10px 3px rgba(255, 255, 255, 0.6)',
                            }}
                        />
                        <button
                            type="button"
                            onClick={toggleSignupPasswordVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                        >
                            {showsignupPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button type="submit" className="text-white mt-8 mx-auto text-xl font-semibold border-2 w-36 py-2 rounded-full hover:bg-red-700 transition-all duration-500">
                        Signup
                    </button>
                    <p className="text-white mt-4 mx-auto">
                        Already have an account?{' '}
                        <span onClick={handleToggleForm} className="text-red-700 underline cursor-pointer font-mono">
                            Login
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login_Signup;
