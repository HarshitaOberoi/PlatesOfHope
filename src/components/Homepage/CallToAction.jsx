import React from 'react'

const CallToAction = () => {
  return (
    <>
            <div className="bg-[#B7B1F2]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to make a difference?</span>
          <span className="block text-gray-100">Join our community today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#FFB433] bg-white hover:bg-gray-50"
            >
              Get Started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#493D9E] hover:bg-[#FFB433]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CallToAction