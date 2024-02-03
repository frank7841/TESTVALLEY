import Image from 'next/image'
import React from 'react'

function Login() {
  return (
    <div className='flex space-x-2 '>
        <Image src={'https://www.testvalley.kr/common/home-event.svg'}
        height={30}
        width={30}/>
        <div><span className="text-gray-500 mr-2 text-sm" >|</span>로그인 / 회원가입</div>
    </div>
  )
}

export default Login