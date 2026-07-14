import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link 
              href="/" 
              className="flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md transition-transform duration-200 active:scale-95" 
              aria-label="WorkLagbe Home"
            >
              <span className="text-2xl font-extrabold tracking-tight text-[#111827]">
                Work<span className="text-[#10B981] font-black">Lagbe</span>
              </span>
            </Link>
  )
}

export default Logo