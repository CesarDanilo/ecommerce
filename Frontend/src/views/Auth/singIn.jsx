import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Importa o hook useNavigate

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Hook para navegação

    const basedUrl = "http://localhost:3001/users/auth/login";

    const userData = {
        "email": userName,
        "senha": password
    };

    const signIn = async () => {  // Corrigido o nome da função para 'signIn'
        try {
            const response = await axios.post(basedUrl, userData);
            console.log("Login feito com sucesso: ", response.status);

            if (response.status === 200 && response.data) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.dados));

                console.log("Dados gravados no localStorage");
                navigate("/");  // Redireciona para a página Home
            }
        } catch (error) {
            console.log("Não foi possível fazer o login: ", error);
        }
    };

    return (
        <section className="m-8 flex gap-4">
            <div className="w-full lg:w-4/5 mt-24">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Sign In</h2>
                    <p className="text-lg text-blue-gray-600">Enter your email and password to Sign In.</p>
                </div>
                <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-1 flex flex-col gap-6">
                        <label className="text-sm font-medium text-blue-gray-600">Your email</label>
                        <input
                            type="email"
                            placeholder="name@mail.com"
                            className="border border-blue-gray-200 p-3 rounded-lg focus:border-gray-900 focus:outline-none"
                            onChange={(e) => { setUserName(e.target.value); }}
                        />
                        <label className="text-sm font-medium text-blue-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="border border-blue-gray-200 p-3 rounded-lg focus:border-gray-900 focus:outline-none"
                            onChange={(e) => { setPassword(e.target.value); }}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" className="mr-2" />
                            I agree to the
                            <a href="#" className="text-black ml-1 underline">Terms and Conditions</a>
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={signIn}  // Corrigido para chamar a função correta
                        className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Sign In
                    </button>

                    <div className="flex items-center justify-between gap-2 mt-6">
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" className="mr-2" />
                            Subscribe me to the newsletter
                        </label>
                        <a href="#" className="text-sm font-medium text-gray-900">Forgot Password?</a>
                    </div>

                    <div className="space-y-4 mt-8">
                        <button className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1156_824)">
                                    <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                                    <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                                    <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                                    <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                                </g>
                            </svg>
                            <span className="ml-2">Sign in With Google</span>
                        </button>
                    </div>
                    <p className="text-center text-blue-gray-500 font-medium mt-4">
                        Not registered?
                        <Link to="/auth/sign-up" className="text-gray-900 ml-1">Create account</Link>
                    </p>
                </form>
            </div>
            <div className="w-5/12 h-full hidden lg:block">
                <img
                    src={`http://localhost:3001/uploads/img/person.jpg`}
                    className="h-full w-full object-cover rounded-3xl"
                    alt="Pattern"
                />
            </div>
        </section>
    );
}

export default SignIn;
