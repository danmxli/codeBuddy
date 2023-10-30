import { useState } from "react";
import SplitView from "./SplitView";
import UserInput from "./UserInput";
import SessionLogs from "./SessionLogs";

const DialogInterface = () => {
    const [query, setQuery] = useState('');
    const [responseData, setResponseData] = useState(null)
    const [fetchQuery, setFetchQuery] = useState(false)
    const [fetchModel, setFetchModel] = useState('code_explain')

    const updateValue = (newValue) => {
        setQuery(newValue)
    }

    const updateFetchModel = (newModel) => {
        setFetchModel(newModel)
    }

    const handleSendQuery = async () => {
        if (query.trim() === '') return;
        const requestBody = {
            query: query,
            model: fetchModel
        }
        setFetchQuery(true)
        console.log(fetchModel)
        console.log(query)

        try {
            const response = await fetch('https://codebuddy-production.up.railway.app/generate', {
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
                    <UserInput query={query} fetchQuery={fetchQuery} updateValue={updateValue} handleSendQuery={handleSendQuery} updateFetchModel={updateFetchModel} />
                }
                right={
                    <SessionLogs data={responseData} isFetching={fetchQuery}/>
                }
            />
        </div>
    )
}

export default DialogInterface