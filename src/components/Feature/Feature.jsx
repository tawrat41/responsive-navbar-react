import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function Feature({feature}) {
  return (
    <div className='flex'>
        <span><CheckCircleIcon className="h-6 w-6 text-green-600" /></span>
        <p className='ml-2'>{feature}</p>
    </div>
  )
}

export default Feature