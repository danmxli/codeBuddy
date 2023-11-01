import { useState } from "react"
import UserType from "../components/registration/UserType"
import UserDetails from "../components/registration/UserDetails"
import { DescriptionCard, UserOnboard } from "../components/registration/RegistrationCards"

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
                    <DescriptionCard />
                ) : (
                    <UserOnboard name={name} />
                )}
            </div>
        </div>
    )
}

export default Portal