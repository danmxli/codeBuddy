import SubmitCode from "./SubmitCode"

const UserPrompt = () => {
    return (
        <div className="h-screen relative bg-gray-400 overflow-scroll scrollbar-hide">
            <div className="fixed p-2 bg-gray-800 text-center text-white rounded-r-3xl">
                Enter your query below
            </div>
            <div className="pt-12 pb-2 pr-6">
                <SubmitCode />
            </div>
            <button className="p-2 pl-16 pr-16 hover:pl-24 hover:pr-24 text-center bg-gray-300 hover:bg-gray-100 border border-gray-500 inline-block rounded-r-3xl duration-500">
                Submit
            </button>
        </div>
    )
}

export default UserPrompt