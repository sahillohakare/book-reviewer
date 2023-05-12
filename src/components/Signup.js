import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: ""

  });
  const [loading, setLoading] = useState(false);
  const [otpSend, setOtpSend] = useState(false);
  const [OTP,setOTP] = useState("");
  
  return (
    <div className='w-full flex  flex-col mt-4 justify-center items-center '>
      {
        otpSend?
        <>
        <div class="p-2 w-full flex flex-col justify-center items-center ">
            <div class="relative" className=' flex flex-col   w-full md:w-1/3'>
              <label for="message" class="leading-7 text-xl text-gray-300 mb-1">Enter OTP</label>
              <input
                id="message"
                name="message"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                class="w-full bg-white rounded border border-gray-300
                                         focus:border-indigo-500 focus:bg-white focus:ring-2
                                          focus:ring-indigo-200 h-20text-base outline-none
                                           text-gray-700 py-1 px-3 resize-none leading-6 transition-colors
                                            duration-200 ease-in-out"/>
            </div>
          </div>
        </>
        :
        <>

          <h1 className='text-xl font-bold'>Sign-Up</h1>
          <div class="p-2 w-full flex flex-col justify-center items-center ">
            <div class="relative" className=' flex flex-col   w-full md:w-1/3'>
              <label for="message" class="leading-7 text-xl text-gray-300 mb-1">Full Name</label>
              <input
                id="message"
                name="message"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                class="w-full bg-white rounded border border-gray-300
                                         focus:border-indigo-500 focus:bg-white focus:ring-2
                                          focus:ring-indigo-200 h-20text-base outline-none
                                           text-gray-700 py-1 px-3 resize-none leading-6 transition-colors
                                            duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-full flex flex-col justify-center items-center ">
            <div class="relative" className=' flex flex-col   w-full md:w-1/3'>
              <label for="message" class="leading-7 text-xl text-gray-300 mb-1">Mobile No.</label>
              <input
                type={"number"}
                id="message"
                name="message"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                class="w-full bg-white rounded border border-gray-300
                                         focus:border-indigo-500 focus:bg-white focus:ring-2
                                          focus:ring-indigo-200 h-20text-base outline-none
                                           text-gray-700 py-1 px-3 resize-none leading-6 transition-colors
                                            duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-full flex flex-col justify-center items-center">
            <div class="relative" className=' flex flex-col  w-full md:w-1/3  '>
              <label for="message" class="text-xl leading-7 text-sm text-gray-300 mb-1">Password</label>
              <input
                id="message"
                name="message"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                class="w-full bg-white rounded border border-gray-300
                                         focus:border-indigo-500 focus:bg-white focus:ring-2
                                          focus:ring-indigo-200 h-20text-base outline-none
                                           text-gray-700 py-1 px-3 resize-none leading-6 transition-colors
                                            duration-200 ease-in-out"/>
            </div>
          </div>

          <div class="p-2">
            <button class="flex mx-auto text-white bg-red-500 border-0 py-1 px-5 focus:outline-none
                                 hover:bg-red-600 rounded text-lg">
              {loading ? <TailSpin color='white' height={15} /> : "SignUp"}
            </button>
          </div>

        </>
      }
      <div class="p-2">
        <button class="flex mx-auto text-white bg-red-500 border-0 py-1 px-5 focus:outline-none
                                 hover:bg-red-600 rounded text-lg">
          {loading ? <TailSpin color='white' height={15} /> : "Confirm OTP"}
        </button>
        </div>
      
      <div>
        <p>Already have an account?<Link to={'/login'}> <span className=' mr-2 text-blue-500'>Sign in</span></Link></p>
      </div>
    </div>
  )
}

export default Signup