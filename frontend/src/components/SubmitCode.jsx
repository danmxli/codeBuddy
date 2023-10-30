import Editor from '@monaco-editor/react';
import { AiFillCodeSandboxCircle, AiOutlineSend } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const SubmitCode = ({ value, updateValue, language, updateProgrammingLanguage, handleSendQuery, isFetchingQuery }) => {
    const handleLangChange = (e) => {
        updateProgrammingLanguage(e.target.value)
    }

    const handleEditorChange = (newValue) => {
        updateValue(newValue);
    };

    return (
        <div className="">
            <Editor
                height="500px"
                defaultLanguage={language}
                defaultValue={value}
                theme='vs-dark'
                onChange={handleEditorChange}
            />
            <div className='grid grid-cols-5'>
                <div className='col-span-2 p-1 text-center text-gray-300 hover:text-indigo-300 bg-neutral-900'>
                    <button
                        className=""
                        onClick={handleSendQuery}
                    >
                        {isFetchingQuery ? (
                            <div className="inline-flex gap-2">
                                Generating...<AiFillCodeSandboxCircle className="animate-spin text-2xl" />
                            </div>
                        ) : (
                            <div className="inline-flex gap-2">
                                Send Your Query<AiOutlineSend className="text-2xl" />
                            </div>
                        )}

                    </button>
                </div>
                <div className='col-span-3 p-0.5 text-center bg-black/50 inline-flex justify-center gap-2 overflow-scroll scrollbar-hide'>
                    <div className='relative inline-flex gap-2 items-center'>
                        <div className='p-0.5 pl-2 pr-2 text-neutral-400 bg-neutral-800 border border-neutral-600 rounded-3xl'>
                            Language:
                        </div>
                        <select
                            className='p-0.5 pl-2 pr-2 text-indigo-300 bg-indigo-950 border border-indigo-500 rounded-3xl'
                            value={language}
                            onChange={handleLangChange}
                        >
                            <option value='python'>Python</option>
                            <option value='javascript'>JavaScript</option>
                            <option value='cpp'>C++</option>
                            <option value='sql'>SQL</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitCode;
