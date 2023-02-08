import "./App.css";
import Home from "./view/app/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter , Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
    return (
        <HashRouter>
            <Container>
                <Routes >
                    <Route path="/*" exact element={<Home />} />
                    {/* <Route path="**" exact element={<Home />} /> */}
                </Routes>
            </Container>
        </HashRouter>
    );
}

export default App;
