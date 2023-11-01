import { useState } from "react";
import SplitView from "./SplitView";
import UserInput from "./UserInput";
import SessionLogs from "./SessionLogs";

const DialogInterface = () => {
    const [query, setQuery] = useState('');
    const [responseData, setResponseData] = useState(null)
    const [fetchQuery, setFetchQuery] = useState(false)
    const [fetchModel, setFetchModel] = useState('code_explain')
    const [programmingLanguage, setProgrammingLanguage] = useState('python')

    const updateValue = (newValue) => {
        setQuery(newValue)
    }

    const updateFetchModel = (newModel) => {
        setFetchModel(newModel)
    }

    const updateProgrammingLanguage = (newLang) => {
        setProgrammingLanguage(newLang)
    }

    const handleSendQuery = async () => {
        if (query.trim() === '') return;
        const requestBody = {
            query: query,
            model: fetchModel,
            programming_language: programmingLanguage
        }
        setFetchQuery(true)
        console.log(programmingLanguage)
        console.log(fetchModel)
        

        try {
            const response = await fetch('https://codebuddy-production.up.railway.app/dummy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            if (!response.ok) {
                throw new Error('Request failed');
            }

            const data = await response.json();
            setResponseData(data)
            console.log(data)

        }
        catch(error) {
            console.log('error sending request', error)
        }

        setFetchQuery(false)
    }

    return (
        <div>
            <SplitView
                left={
                    <UserInput query={query} fetchQuery={fetchQuery} updateValue={updateValue} handleSendQuery={handleSendQuery} updateFetchModel={updateFetchModel} language={programmingLanguage} updateProgrammingLanguage={updateProgrammingLanguage} />
                }
                right={
                    <SessionLogs data={responseData} isFetching={fetchQuery} language={programmingLanguage}/>
                }
            />
        </div>
    )
}

export default DialogInterface