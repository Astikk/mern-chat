import axios from "axios"
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = 'http://localhost:4040';
  // we can set cookies from our API and this will be valid to the whole applicaiotn
  axios.defaults.withCredentials = true
  return (
    <>
    <UserContextProvider>
      <Routes/>
    </UserContextProvider>
    </>
  )
}

export default App
