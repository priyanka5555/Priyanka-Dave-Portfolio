import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='py-24 sm:py-32 bg-gradient-to-b from-black
    to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
          <p className='py-6'>Submit the below form to get in touch with me!</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/rbeqrkxb" method="POST" className='flex flex-col w-full md:w-1/2'>

            <input type="text" name="name"
              placeholder="Enter your name"
              className='p-2 bg-transparent border-2 rounded-md
             text-white focus:outline-none'
            />

            <input type="text" name="email"
              placeholder="Enter your email"
              className='my-4 p-2 bg-transparent border-2 rounded-md
             text-white focus:outline-none'
            />

            <textarea name="message" rows="10" placeholder="Please write your message here..." className="p-2 bg-transparent border-2 
            rounded-md text-white focus:outline-none"></textarea>

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 
      px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105
      duration-300'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact