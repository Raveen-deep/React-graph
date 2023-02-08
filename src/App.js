import "./App.css";
import Home from "./view/app/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter , Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Dashboard from "./view/app/Dashboard";
import GraphForm from "./components/GraphForm";

function App() {
    return (
        <HashRouter>
            <Container>
                <Routes >
                    <Route path="/home" exact element={<Home />} />
                    <Route path="/DataForm" exact element={<GraphForm />} />
                    <Route path="*" exact element={<Dashboard />} />
                </Routes>
            </Container>
        </HashRouter>
    );
}

export default App;
