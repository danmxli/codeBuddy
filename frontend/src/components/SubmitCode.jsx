import Editor from '@monaco-editor/react';

const SubmitCode = ({ value, updateValue }) => {
    const handleEditorChange = (newValue) => {
        updateValue(newValue);
    };

    return (
        <div className="">
            <Editor
                height="500px"
                defaultLanguage="python"
                defaultValue={value}
                theme='vs-dark'
                onChange={handleEditorChange}
            />
        </div>
    );
};

export default SubmitCode;
