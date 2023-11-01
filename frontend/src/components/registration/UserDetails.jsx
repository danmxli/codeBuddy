import { motion } from "framer-motion"
import { SignIn } from "@clerk/clerk-react"

const UserDetails = ({ updatePhase }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.15,
                duration: 0.55,
                ease: [0.165, 0.84, 0.44, 1],
            }}
            className="bg-indigo-500 p-8 rounded-xl max-w-xl ml-4 mr-4 shadow-lg"
        >
            <h1 className='text-2xl font-semibold text-zinc-600'>
                
            </h1>

            <SignIn />

            <div className="inline-flex gap-3 mt-3">
                <button
                    className="bg-indigo-900 text-white p-2 rounded"
                    onClick={() => {
                        updatePhase('userType')
                    }}
                >
                    Go Back
                </button>
            </div>

        </motion.div>
    )
}

export default UserDetails