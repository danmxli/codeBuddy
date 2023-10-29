import { useState } from 'react'
import { FaUserAstronaut, FaChalkboardTeacher } from 'react-icons/fa'
import { AiFillCodeSandboxCircle, AiOutlineSend, AiFillBug } from 'react-icons/ai'
import { BiLogoPython } from 'react-icons/bi'
import { SiGoogleoptimize } from 'react-icons/si'
import SubmitCode from "./SubmitCode";

const UserInput = ({ query, fetchQuery, handleQueryInput, handleSendQuery, updateFetchModel }) => {
    const [fetchModel, setFetchModel] = useState('bug_fix');
    const handleFetchModel = (model) => {
        setFetchModel(model)
        updateFetchModel(model)
    }

    return (
        <div className="h-screen relative bg-gray-800 overflow-scroll scrollbar-hide">
            <div className="p-2 bg-gray-900 rounded-r-3xl">
                <button
                    className={`bg-gray-500 p-1 m-1 rounded ${fetchModel === 'bug_fix' ? 'bg-indigo-700 text-indigo-200' : ''}`}
                    onClick={() => handleFetchModel('bug_fix')}
                >
                    <div className='inline-flex gap-1'>
                        <AiFillBug className='text-lg' />Bug Fixer
                    </div>
                </button>
                <button
                    className={`bg-gray-500 p-1 m-1 rounded ${fetchModel === 'pseudo_to_lang' ? 'bg-indigo-700 text-indigo-200' : ''}`}
                    onClick={() => handleFetchModel('pseudo_to_lang')}
                >
                    <div className='inline-flex gap-1'>
                        <BiLogoPython className='text-lg' />Pseudocode to Python
                    </div>
                </button>
                <button
                    className={`bg-gray-500 p-1 m-1 rounded ${fetchModel === 'code_explain' ? 'bg-indigo-700 text-indigo-200' : ''}`}
                    onClick={() => handleFetchModel('code_explain')}
                >
                    <div className='inline-flex gap-1'>
                        <FaChalkboardTeacher className='text-lg' />Code Explainer
                    </div>
                </button>
                <button
                    className={`bg-gray-500 p-1 m-1 rounded ${fetchModel === 'calc_complexity' ? 'bg-indigo-700 text-indigo-200' : ''}`}
                    onClick={() => handleFetchModel('calc_complexity')}
                >
                    <div className='inline-flex gap-1'>
                        <SiGoogleoptimize className='text-lg' />Time Complexity Calculator
                    </div>
                </button>
            </div>
            <div className="pt-2 pb-2">
                <SubmitCode
                    value={query}
                    onChange={handleQueryInput}
                />
            </div>
            <button
                className="p-2 w-40 hover:w-64 text-center text-indigo-400 bg-gray-900 hover:bg-slate-950 inline-block rounded-r-3xl duration-500"
                onClick={handleSendQuery}
            >
                {fetchQuery ? (
                    <div className="inline-flex gap-3">
                        <AiFillCodeSandboxCircle className="animate-spin text-2xl" />generating...
                    </div>
                ) : (
                    <div className="inline-flex gap-3">
                        <AiOutlineSend className="text-2xl" />
                    </div>
                )}

            </button>
            <div className="text-gray-500 text-center mt-12 mb-8">
                <p className='text-2xl'>Welcome to conduitCode chat!</p>
                <div className='mt-3 inline-flex text-5xl gap-4'>
                    <AiFillCodeSandboxCircle />
                    <AiOutlineSend />
                    <FaUserAstronaut />
                </div>
                <p className='mr-10 ml-10'>Select a model above. The assistant will evaluate your response based on the code you supply and the details of your query.</p>

            </div>
        </div>
    )
}

export default UserInput