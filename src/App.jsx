import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import  Navbar   from './view/app/navBar';
import Main from "./components/main"; 
function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/main" element={<Main />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    {/* <Route path="/createpost" element={<CreatePost />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
