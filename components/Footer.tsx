// import React from 'react'

const Footer = () => {
    return (
        <div id="contact" className="w-full h-full bg-slate-100 p-4 md:px-16 md:pt-16 lg:">
            <div className="lg:flex w-full justify-between">
                <div className="mb-8 flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl">Streamline<span className="text-blue-500">Recruit</span></h1>
                    <p className="text-slate-500 text-sm">No.69 Some Street, Some City, Some State, Some Country</p>
                    <div className="flex gap-4 flex-col md:flex-row">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#64748b" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <p className="text-slate-500 text-sm hover:text-slate-800 transition-all duration-300 cursor-pointer">+91 6548964581</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#64748b" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <p className="text-slate-500 text-sm hover:text-slate-800 transition-all duration-300 cursor-pointer">streamline@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                    <div className="">
                        <h1 className="font-medium mb-2">Product</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Job Seeker</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Job Fit Connect</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Job Alert</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Career Advice</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-medium mb-2">Employers</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Employer Login</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Job Posting</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Reseacrh Report</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">CV Database</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-medium mb-2">Information</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">About</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Contact Us</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Send Feedback</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Testimonial</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-medium mb-2">Legal</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Privacy Policy</p>
                            <p className="text-sm cursor-pointer text-slate-500 hover:text-slate-800 transition-all duration-300">Terms and Condition</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 mt-2 border-t border-slate-300">
                <p className="text-xs text-slate-500">&copy; Copyright 2023 Streamline Recruit</p>
            </div>
        </div>
    )
}

export default Footer
