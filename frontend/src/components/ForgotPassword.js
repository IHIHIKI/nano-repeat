import React from 'react'
import NanoRepeatFullWhite from './svg/NanoRepeatFullWhite'
import WindowClose from './elements/WindowClose'
import ForgotPasswordForm from './forms/ForgotPasswordForm'

export default function ForgotPassword () {

    return (
        <div className=" flex flex-row flex-grow min-h-full text-center">
            <div className=" flex-2 bg-purple-700 hidden max-w-3/7 w-full lg:inline-block">
                <div className="m-auto py-20 max-w-4/7">
                    <NanoRepeatFullWhite />
                </div>
                <p className="text-white ml-auto mr-auto pb-10">Subscriptions made simple</p>
            </div>
            <div className="flex-4 min-h-full inline-block">
                <WindowClose color="text-green-500" />
                <h1 className="text-2xl pt-20 pb-10">Forgot Password?</h1>
                <ForgotPasswordForm />
            </div>
            
        </div>
    )
}
