import { useState } from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs'

const SessionLogs = ({ data }) => {

    const CodeBlock = ({ code }) => {
        return (
            <pre className="bg-gray-600 text-white text-sm p-3 m-3 rounded-lg overflow-scroll scrollbar-hide">
                <code className="block">{code}</code>
            </pre>
        );
    };

    let textParts = []

    if (data) {
        textParts = data.response.text.split('```')
    }

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
                        <div className="bg-gray-200 border border-gray-400 text-gray-600 p-4 rounded-3xl ml-12 mr-12 my-12">
                            <div className="mb-2">
                                <div>
                                    {textParts.map((part, index) => {
                                        if (index % 2 === 0) {
                                            return <p className='whitespace-break-spaces' key={index}>{part}</p>;
                                        } else {
                                            return <CodeBlock key={index} code={part} />;
                                        }
                                    })}
                                </div>
                            </div>
                            <div className="mt-4">
                                <ul className="">

                                    {data.response.links.map((link, index) => (
                                        <li key={index} className='m-3'>
                                            <div className='bg-indigo-100 hover:bg-indigo-200 p-1 rounded border border-indigo-300 text-indigo-700 inline'>
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