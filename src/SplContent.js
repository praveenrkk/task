import React from 'react'

export default function SplContent() {
  return (
    <div className='spl-container border'>
      <div className='spl-content-banner'></div>
      <img src='https://f.vimeocdn.com/p/images/badges/1.svg' className='spl-image' />
      <div className='d-flex flex-column mt-5 p-3'>
        <span className='fw-bold pb-3'>Vimeo Staff Picks</span>
        <span className='text-muted'>The best short films on the internet, handpicked by Vimeo staff</span>
        <div className='bg-primary rounded-pill border-0 mt-4 p-1 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
          <span className='text-white'>Watch Now</span>
        </div>
      </div>
    </div>
  )
}
