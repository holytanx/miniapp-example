'use client'

import { useEffect } from "react";
import BackButton from "./BackButton";


export default function Navbar() {

  return (
    <div
      className="fixed left-0 right-0 h-[32px] bg-gray-800 shadow-sm flex items-center"
      style={{
        // top: 'calc(env(safe-area-inset-top) + 6px)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}
    >
      <div className="flex items-center w-full px-4">
        {/* Back button */}
        <BackButton/>

        {/* Title */}
        <div className="flex-1 text-center text-white">
          Webview Demo
        </div>
      </div>
    </div>
  )
}