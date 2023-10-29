import { useState, useEffect } from 'react';
import { AiFillCodeSandboxCircle } from 'react-icons/ai'

const FetchAnimation = () => {

    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg((currentImg) => (currentImg + 1) % 4);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full p-4 bg-gray-200 border border-gray-400 p-4 rounded-3xl ml-12 mr-12 my-12">
                <div className='inline-flex text-8xl animate-spin'>
                    <AiFillCodeSandboxCircle />
                </div>
                <ColorfulDiv                    
                    active={currentImg === 0}
                    transitionDelay={0}
                    text='Through the use of an embedding layer, the model transforms these tokens into numerical representations...'
                />
                <ColorfulDiv
                    active={currentImg === 1}
                    transitionDelay={100}
                    text='Layers enable the model to comprehend word relationships and produce logical answers...'
                />
                <ColorfulDiv
                    active={currentImg === 2}
                    transitionDelay={100}
                    text='The created tokens are transformed back into text that can be read by humans. Multiple tokens in a response are concatenated to create a sentence or paragraph if they are present...'
                />
                <ColorfulDiv
                    active={currentImg === 3}
                    transitionDelay={100}
                    text='Include safeguards and content control systems to stop the creation of damaging, improper, or deceptive content...'
                />
            </div>
        </div>
    )
}

const ColorfulDiv = ({ active, transitionDelay, text }) => {
    return (
        <div
            className={`animate-bounce rounded-lg bg-gray-200 border border-gray-400 p-2 ml-24 mr-24 ${active ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-700 ease-in-out`}
            style={{ animationDelay: `${transitionDelay}ms` }}
        >
            <h1 className='text-center'>
                {text}
            </h1>

        </div>
    );
};

export default FetchAnimation