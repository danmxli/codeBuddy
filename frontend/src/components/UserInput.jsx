import { useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { AiFillCodeSandboxCircle, AiOutlineSend, AiFillBug } from 'react-icons/ai'
import { BiLogoPython } from 'react-icons/bi'
import { SiGoogleoptimize } from 'react-icons/si'
import SubmitCode from "./SubmitCode";

const UserInput = ({ query, fetchQuery, updateValue, handleSendQuery, updateFetchModel }) => {
    const [fetchModel, setFetchModel] = useState('bug_fix');
    const handleFetchModel = (model) => {
        setFetchModel(model)
        updateFetchModel(model)
    }

    return (
        <div className="h-screen relative bg-neutral-800 overflow-scroll scrollbar-hide">
            <div className="p-2 bg-neutral-900 rounded-r-3xl">
                <button
                    className={`text-neutral-300 font-semibold p-1 m-1 rounded ${fetchModel === 'bug_fix' ? 'bg-black' : ''}`}
                    onClick={() => handleFetchModel('bug_fix')}
                >
                    <div className='inline-flex gap-1'>
                        <AiFillBug className='text-lg' />Bug Fixer
                    </div>
                </button>
                <button
                    className={`text-neutral-300 font-semibold p-1 m-1 rounded ${fetchModel === 'pseudo_to_lang' ? 'bg-black' : ''}`}
                    onClick={() => handleFetchModel('pseudo_to_lang')}
                >
                    <div className='inline-flex gap-1'>
                        <BiLogoPython className='text-lg' />Pseudocode to Python
                    </div>
                </button>
                <button
                    className={`text-neutral-300 font-semibold p-1 m-1 rounded ${fetchModel === 'code_explain' ? 'bg-black' : ''}`}
                    onClick={() => handleFetchModel('code_explain')}
                >
                    <div className='inline-flex gap-1'>
                        <FaChalkboardTeacher className='text-lg' />Code Explainer
                    </div>
                </button>
                <button
                    className={`text-neutral-300 font-semibold p-1 m-1 rounded ${fetchModel === 'calc_complexity' ? 'bg-black' : ''}`}
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
                    updateValue={updateValue}
                />
            </div>
            <button
                className="p-2 w-40 hover:w-64 text-center text-indigo-600 bg-neutral-900 hover:bg-neutral-950 inline-block rounded-r-3xl duration-500"
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
        </div>
    )
}

export default UserInput