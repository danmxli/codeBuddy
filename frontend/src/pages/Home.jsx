import '../App.css'
import PromptChat from '../components/PromptChat'
import DisplayAbout from '../components/DisplayAbout'

const Home = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className='bg-gray-100 rounded-full flex items-center justify-center h-screen'>
                <PromptChat />
            </div>
            <div>
                <DisplayAbout />
            </div>
        </div>
    )
}

export default Home