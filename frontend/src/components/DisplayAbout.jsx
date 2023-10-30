const DisplayAbout = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 sm:p-10">
                <div className="bg-gray-100 p-3 rounded-lg">
                    <h1 className="text-xl sm:text-5xl break-words mb-1">Meet conduitCode.</h1>
                    <code className='text-indigo-500'>your online code optimization assistant.</code>
                    <p className='mt-3 mb-2'>
                        Leverage conduitCode to debug, learn, and improve your code. Stand atop the mountain of giants and produce scalable, reliable products!
                    </p>
                    <a href="https://github.com/danmxli/codeBuddy" className="p-1 bg-emerald-100 hover:bg-emerald-200 border border-emerald-500 rounded">conduitCode Beta Version 1.0.0</a>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                    <a href="https://www.conduify.com/">
                        <div className="p-1 bg-indigo-100 hover:bg-indigo-200 border border-indigo-500 rounded">conduitCode is a service for Conduify - check out the project!</div>
                    </a>
                    <h1 className="text-xl mt-1">Efficient and User Friendly. ⚡</h1>
                    <p className='italic mb-1'>Easy to use, and delivers a response that gets you straight to the point! ~ anonymous</p>
                    <a href="https://stackoverflow.com/" className="">
                        <div className="p-1 bg-gray-50 hover:bg-gray-200 border border-gray-500 rounded mb-1">Resources gathered from StackOverflow</div>
                    </a>
                    <a href="https://cohere.com/" className="">
                        <div className="p-1 bg-gray-50 hover:bg-gray-200 border border-gray-500 rounded">Responsive chat API from Cohere</div>
                    </a>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <a href='https://www.linkedin.com/in/danli591/' className='text-indigo-500 hover:text-indigo-600'>
                        <h1 className="text-lg font-bold">Reach out to the Creator</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DisplayAbout