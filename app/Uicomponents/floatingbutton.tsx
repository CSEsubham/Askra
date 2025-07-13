import React from 'react'

export default function Floatingbutton() {
  return (
    <>
     <div className="fixed bottom-4 left-4 z-50">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full shadow-lg animate-bounce transition-transform duration-300 hover:scale-110 cursor-pointer">
          💬 Chat with Askra
        </button>
      </div>
    </>
  )
}
