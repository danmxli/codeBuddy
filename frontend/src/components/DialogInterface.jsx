import SplitView from "./SplitView";
import { FaUserAstronaut } from 'react-icons/fa'
import { AiFillCodeSandboxCircle, AiOutlineSend } from 'react-icons/ai'
import SubmitCode from "./SubmitCode";
import SessionLogs from "./SessionLogs";

const DialogInterface = () => {
    return (
        <div>
            <SplitView
                left={
                    <div className="h-screen relative bg-gray-800 overflow-scroll scrollbar-hide">
                        <div className="p-2 bg-slate-950 text-gray-300 text-gray-300 rounded-r-3xl">
                            Enter your query below
                        </div>
                        <div className="pt-2 pb-2">
                            <SubmitCode />
                        </div>
                        <button className="p-2 pl-16 pr-16 hover:pl-24 hover:pr-24 text-center text-indigo-400 bg-gray-900 hover:bg-slate-950 inline-block rounded-r-3xl duration-500">
                            Submit
                        </button>
                        <div className="text-gray-500 text-center mt-12 mb-8">
                            <p className='text-2xl'>Welcome to conduitCode chat!</p>
                            <div className='mt-3 inline-flex text-5xl gap-4'>
                                <AiFillCodeSandboxCircle />
                                <AiOutlineSend />
                                <FaUserAstronaut />
                            </div>
                            <p className='mr-10 ml-10'>The assistant will evaluate your response based on the code you supply and the details of your query.</p>

                        </div>
                    </div>
                }
                right={
                    <SessionLogs />
                }
            />
        </div>
    )
}

export default DialogInterface