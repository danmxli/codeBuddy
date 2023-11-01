import '../App.css'
import PromptChat from '../components/PromptChat'
import DisplayAbout from '../components/DisplayAbout'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.15,
                    duration: 0.55,
                    ease: [0.165, 0.84, 0.44, 1],
                }}
                className='bg-gray-100 rounded-full flex items-center justify-center h-screen
            '>
                <PromptChat />
            </motion.div>
            <div>
                <DisplayAbout />
            </div>
        </div>
    )
}

export default Home