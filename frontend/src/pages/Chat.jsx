import SplitView from "../components/SplitView";
import UserPrompt from "../components/UserPrompt";

const Chat = () => {
    return (
        <div>
            <SplitView
                left={
                    <UserPrompt />
                }
                right={
                    <div>
                        
                    </div>
                }
            />
        </div>
    );
};

export default Chat;