import { useState } from "react"
import UserType from "../components/registration/UserType"
import UserDetails from "../components/registration/UserDetails"

const Portal = () => {
    // default user data
    const [name, setName] = useState('')
    const [userType, setUserType] = useState('I am a general STEM enthusiast')
    const [phase, setPhase] = useState('userType')

    const updateName = (newName) => {
        setName(newName)
    }
    const updateUserType = (newType) => {
        setUserType(newType)
    }
    const updatePhase = (newPhase) => {
        setPhase(newPhase)
    }

    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2 bg-gray-200 w-full h-screen rounded-r-3xl flex items-center justify-center">
                {phase === 'userType' ? (
                    <UserType name={name} updateName={updateName} user={userType} updateUserType={updateUserType} updatePhase={updatePhase} />
                ) : (
                    <UserDetails updatePhase={updatePhase} />
                )}

            </div>
            <div className="col-span-1 w-full h-screen flex items-center justify-center">
                {phase === 'userType' ? (
                    <div className="m-8 p-8 max-w-xs bg-indigo-500 text-white rounded-3xl shadow-lg">
                        <h1 className="text-3xl">conduitCode accelerates productivity.</h1>
                        <h2 className="mb-6">Your performance and time are deeply valued. The optimal balance between the two is what our software looks for.</h2>
                        <h1 className="text-3xl">A refreshing user interface.</h1>
                        <h2>Our intuitive design gives you the confidence and enjoyment you need to move forward with your tasks.</h2>
                    </div>
                ) : (
                    <div className="m-8 p-8 max-w-xs bg-indigo-500 text-white rounded-3xl shadow-lg">
                        <h1 className="text-3xl">Welcome aboard, {name}!</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portal