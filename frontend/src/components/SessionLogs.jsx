import { BsFillChatDotsFill } from 'react-icons/bs'

const SessionLogs = ({ data }) => {

    return (
        <div className="h-screen bg-gray-300 overflow-scroll scrollbar-hide">
            <div className="text-gray-400">
                {data === null ? (
                    <div className='text-center'>
                        <div className='pt-40 mb-3 inline-flex text-9xl'>
                            <BsFillChatDotsFill />
                        </div>
                        <h1 className="text-3xl">New session logs</h1>
                        <p className="text-xl">Type your query in coduitCode chat on the left.</p>
                        <p className="text-lg">Tip: you can resize the chat window by dragging the rightmost side.</p>
                    </div>) : (
                    <div>
                        <div className="bg-gray-200 border border-gray-400 text-gray-600 p-4 rounded-3xl max-w-lg mx-auto my-12">
                            <div className="mb-2">
                                <p>{data.response.text}</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-500 font-bold">Related Links:</p>
                                <ul className="">

                                    {data.response.links.map((link, index) => (
                                        <li key={index} className='m-1'>
                                            <div className='bg-indigo-100 hover:bg-indigo-200 p-1 rounded border border-indigo-300 text-indigo-700'>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                    {link.title}
                                                </a>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>)}

            </div>
        </div>
    )
}

export default SessionLogs