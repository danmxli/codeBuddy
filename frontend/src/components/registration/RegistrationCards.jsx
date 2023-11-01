import { motion } from "framer-motion"

const DescriptionCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.15,
                duration: 0.55,
                ease: [0.165, 0.84, 0.44, 1],
            }}
            className="m-8 p-8 max-w-xs bg-indigo-500 text-white rounded-3xl shadow-lg">
            <h1 className="text-3xl">conduitCode accelerates productivity.</h1>
            <h2 className="mb-6">Your performance and time are deeply valued. The optimal balance between the two is what our software looks for.</h2>
            <h1 className="text-3xl">A refreshing user interface.</h1>
            <h2 className="mb-6">Our intuitive design gives you the confidence and enjoyment you need to move forward with your tasks.</h2>
            <h1 className="text-3xl">Reliable and accurate results.</h1>
            <h2>Our models range from time complexity calculations to the conversion of pseudocode to programming languages.</h2>
        </motion.div>
    )
}

const UserOnboard = ({ name }) => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.15,
                    duration: 0.55,
                    ease: [0.165, 0.84, 0.44, 1],
                }}
                className='p-2 shadow-lg rounded-3xl flex items-center justify-center'>
                <img src='/codeBuddy.svg' className="h-40" alt='Logo' />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.15,
                    duration: 0.55,
                    ease: [0.165, 0.84, 0.44, 1],
                }}
                className="m-8 p-8 max-w-xs bg-indigo-500 text-white rounded-3xl shadow-lg">
                <h1 className="text-3xl">Welcome aboard, {name}!</h1>
                <p className="mb-6"><code>Great things lie ahead.</code></p>
                <h2>To complete the signup process, we must verify your email.</h2>
            </motion.div>
        </div>
    )
}

export {
    DescriptionCard,
    UserOnboard
}