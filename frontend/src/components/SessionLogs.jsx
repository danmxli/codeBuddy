import { BsFillChatDotsFill } from 'react-icons/bs'

const SessionLogs = () => {
    return (
        <div className="h-screen bg-gray-300">
            <div className="text-center pt-40 text-gray-400">
                <div className='mb-3 inline-flex text-9xl'>
                    <BsFillChatDotsFill />
                </div>
                <h1 className="text-3xl">New session logs</h1>
                <p className="text-xl">Type your query in coduitCode chat on the left.</p>
                <p className="text-lg">Tip: you can resize the chat window by dragging the rightmost side.</p>
            </div>
        </div>
    )
}

export default SessionLogs