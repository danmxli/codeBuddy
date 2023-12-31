import Editor from '@monaco-editor/react';
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FaUserAstronaut } from 'react-icons/fa'
import { AiOutlineSend, AiFillCodeSandboxCircle } from 'react-icons/ai'
import FetchAnimation from './FetchAnimation';

const SessionLogs = ({ data, isFetching, language }) => {

    const CodeBlock = ({ code }) => {
        let window = "500px"
        if(code.length < 300) {
            window = "200px"
        }
        return (
            <Editor
                defaultLanguage={language}
                height={window}
                defaultValue={code}
                theme='vs-dark'
            />
        );
    };

    let textParts = []

    if (data) {
        textParts = data.response.text.split('```')
    }

    return (
        <div className="h-screen bg-gray-300 overflow-scroll scrollbar-hide">
            <div className="text-gray-400">
                {isFetching ? (
                    <FetchAnimation />
                ) : (
                    <>
                        {data === null ? (
                            <div className='text-center'>
                                <div>
                                    <div className="text-center mt-12 mb-8">
                                        <p className='text-2xl'>Welcome to conduitCode chat!</p>
                                        <div className='mt-3 inline-flex text-5xl gap-4'>
                                            <AiFillCodeSandboxCircle />
                                            <AiOutlineSend />
                                            <FaUserAstronaut />
                                        </div>
                                        <p className='mr-32 ml-32'>Select a model above. The assistant will evaluate your response based on the code you supply and the details of your query.</p>

                                    </div>

                                    <div className="bg-gray-200 border border-gray-400 text-gray-400 p-4 rounded-3xl ml-12 mr-12 my-12">
                                        <div className='mb-3 inline-flex text-9xl'>
                                            <BsFillChatDotsFill />
                                        </div>
                                        <h1 className="text-3xl">New session logs</h1>
                                        <p className="text-xl">Type your query in coduitCode chat on the left.</p>
                                        <p className="text-lg">Tip: you can resize the chat window by dragging the rightmost side.</p>
                                    </div>

                                </div>

                            </div>) : (
                            <div>
                                <div className="bg-gray-200 border border-gray-400 text-gray-600 p-4 rounded-3xl ml-12 mr-12 my-12">
                                    <div className="mb-2">
                                        <div>
                                            {textParts.map((part, index) => {
                                                if (index % 2 === 0) {
                                                    return <p className='whitespace-break-spaces' key={index}>{part}</p>;
                                                } else {
                                                    return (<CodeBlock key={index} code={part} />);
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
                    </>
                )}
            </div>
        </div>
    )
}

export default SessionLogs