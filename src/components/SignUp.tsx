import React from "react";

const SignUp = () => {
    return(
    <div className="2xl:container h-screen m-auto">
        
        <div hidden role="hidden" className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
        <div className="relative h-full ml-auto lg:w-6/12">
            <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                <div className="space-y-4">
                    
                    <p className="font-medium text-lg text-gray-600 text-center">Sign up with:</p>
                </div>
                
                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    <button className="py-3 px-6 rounded-xl bg-[#005AE2]  hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                        <div className="flex gap-4 justify-center">
                            <img src="./src/assets/images/google-icon.png" className="w-5" alt=""/>
                            <span className="block w-max font-medium tracking-wide text-sm text-white"> Google</span>
                        </div>
                    </button>
                    <button className="py-3 px-6 rounded-xl bg-[#005AE2] transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                        <div className="flex gap-4 items-center justify-center text-white">
                        <img src="./src/assets/images/apple-icon.png" alt="Image" className="w-5"/>

                            <span className="block w-max font-medium tracking-wide text-sm text-white">Apple</span>
                        </div>
                    </button>
                </div>

                <div role="hidden" className="mt-12 border-t">
                    <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
                </div>

                <form action="" className="space-y-6 py-6">
                    <div>
                        <input 
                                type="text" 
                                placeholder="Username"
                                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        />
                    </div>

                    <div>
                        <input 
                                type="email" 
                                placeholder="Email"
                                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        />
                    </div>

                    <div className="flex flex-col items-end">
                        <input 
                                type="password" 
                                placeholder="Password"
                                className="w-full py-3 px-6 ring-1 ring-[#7e8fa8] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        />
                       
                    </div>

                    <div className="flex flex-col items-end">
                        <input 
                                type="password" 
                                placeholder="Retype Password"
                                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                        />
                       
                    </div>

                    <div>
                        <button className="w-full px-6 py-3 rounded-xl bg-[#005AE2] transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                            <span className="font-semibold text-white text-lg">Sign up with Email</span>
                        </button>
                        <a href="#" type="reset" className="w-max p-3 -ml-3">
                            <span className="text-sm tracking-wide text-blue-600 text-center">Already have an account? Log in</span>
                        </a>
                        <p className="text-center text-sm text-gray-400">By signing in with an account, you agree to <br/> Scissors's Terms of Service, Privacy Policy and Acceptable Use Policy</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default SignUp