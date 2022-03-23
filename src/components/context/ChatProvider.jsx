import { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  //fetch local storage
  useEffect(() => {
    //SON.parse bcz it is in stringify format
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    //if user is not looged in push to home
    if (!userInfo) {
      history.push("/");
    }
  }, [history]);

  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
