import Image from 'next/image'
import React from 'react'

function Login() {
  return (
    <div className='flex space-x-2 '>
        <Image src={'https://www.testvalley.kr/common/home-event.svg'}
        height={25}
        width={25}/>
        <div><span className="text-gray-500 mr-2" >|</span>Login/Logout</div>
    </div>
  )
}

export default Login