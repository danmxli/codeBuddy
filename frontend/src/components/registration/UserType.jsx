import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

const UserType = ({ name, updateName, user, updateUserType, updatePhase }) => {
    const navigate = useNavigate()

    const handleUserChange = (e) => {
        updateName(e.target.value);
    };

    const buttonOptions = [
        "I am a general STEM enthusiast",
        "I am a software engineer candidate",
        "I am a data scientist candidate",
        "I am a quantitative analyst candidate",
        "I am a freelance fullstack developer"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.15,
                duration: 0.55,
                ease: [0.165, 0.84, 0.44, 1],
            }}
            className="bg-white p-8 rounded-xl max-w-xl ml-4 mr-4 shadow-lg"
        >
            <h1 className='text-2xl font-semibold text-zinc-600'>
                Customized and powerful optimization for your coding journey.
            </h1>
            <p className='mb-3 text-gray-400'><code>conduitCode is proud to serve a plethora of users.</code></p>
            <div className="grid grid-cols-3 gap-3 pb-3 items-center">
                <div className="col-span-1 font-semibold p-1 border rounded text-center">What is your name?</div>
                <input
                    value={name}
                    onChange={handleUserChange}
                    className="col-span-2 border border-gray-400 ring-2 ring-gray-200 rounded focus:outline-none p-1
                "/>
            </div>
            <>
                <ul>
                    {buttonOptions.map((option, index) => (
                        <li key={index} className="m-2">
                            <button
                                className={`border p-2 rounded duration-200 ${user === option ? 'border-indigo-500 ring-2 ring-indigo-200' : ''}`}
                                onClick={() => { updateUserType(option) }}
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            </>
            <div className="inline-flex gap-3 mt-3">
                <button
                    className="bg-gray-950 text-white p-2 rounded"
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    Dashboard
                </button>
                <button
                    className={`bg-indigo-500 text-white p-2 pl-12 pr-12 rounded ${name === "" ? "bg-indigo-200 cursor-not-allowed" : ""}`}
                    onClick={() => {
                        if (name !== "") {
                            updatePhase('userDetails')
                        }
                    }}
                >
                    Next
                </button>
            </div>

        </motion.div>
    )
}

export default UserType