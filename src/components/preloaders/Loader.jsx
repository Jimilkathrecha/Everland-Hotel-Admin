import React from 'react'

export default function Loader1() {
    return (
        <>
            <div className="w-100 h-[100vh] fixed bs-red top-0 start-0 flex justify-center items-center"> 
                <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )
}
