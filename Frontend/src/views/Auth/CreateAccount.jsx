import { useState } from "react";
import { Link } from "react-router-dom";

export function CreateAccount() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const createNewUser = async () => {
        try {
            window.alert(userName, password);
        } catch (error) {
            console.log("Não foi possível criar usuário: ", error);
        }
    }

    return (
        <section className="m-8 flex">
            <div className="w-2/5 h-full hidden lg:block">
                <img src="/img/pattern.png" className="h-full w-full object-cover rounded-3xl" />
            </div>
            <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
                <div className="text-center">
                    <h2 className="font-bold mb-4 text-2xl">Join Us Today</h2>
                    <p className="text-lg font-normal text-blue-gray-500">Enter your email and password to register.</p>
                </div>
                <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1">Your email</label>
                        <input
                            type="email"
                            placeholder="name@mail.com"
                            onChange={(e) => setUserName(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 w-full focus:border-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="***********"
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 w-full focus:border-gray-900"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-600">I agree to the&nbsp;
                            <a href="#" className="text-black hover:text-gray-900 underline">Terms and Conditions</a>
                        </span>
                    </div>
                    <button type="button" className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg w-full" onClick={createNewUser}>
                        Register Now
                    </button>

                    <div className="space-y-4 mt-8">
                        <button className="flex items-center gap-2 justify-center bg-white shadow-md py-2 px-4 rounded-lg w-full">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1156_824)">
                                    <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                                    <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                                    <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                                    <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1156_824">
                                        <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Sign in With Google</span>
                        </button>
                        <button className="flex items-center gap-2 justify-center bg-white shadow-md py-2 px-4 rounded-lg w-full">
                            <img src="/img/twitter-logo.svg" height={24} width={24} alt="" />
                            <span>Sign in With Twitter</span>
                        </button>
                    </div>
                    <p className="text-center text-blue-gray-500 font-medium mt-4">
                        Already have an account?
                        <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default CreateAccount;
