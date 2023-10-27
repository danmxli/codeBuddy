import { useNavigate } from "react-router-dom"

const PromptChat = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white p-8 rounded-3xl shadow-lg'>
            <div className=''>
                <img src='/codeBuddy.svg' alt='Logo' className='h-36' />
            </div>

            <h1 className='text-2xl font-semibold text-zinc-600'>
                Construct Amazing Ideas with the Power of your Mind.
            </h1>
            <p className='mb-3 text-gray-400'><code>Prepare your code, and get started.</code></p>
            <button
                type="submit"
                className="mt-1 bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition duration-300"
                onClick={() => {
                    navigate("/chat")
                }}
            >Open the Chat Interface</button>
        </div>
    )
}

export default PromptChat