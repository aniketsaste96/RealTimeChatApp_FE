
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChatPage from "./pages/ChatPage"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  >
          <HomePage />
        </Route>
        <Route exact path="/chats"  >
          <ChatPage />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
