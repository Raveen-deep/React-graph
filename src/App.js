import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter , Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Dashboard from "./view/app/Dashboard";
import GraphDataForm from "./view/app/GraphDataForm";
import Chart from "./view/app/Chart";

function App() {
    return (
        <HashRouter>
            <Container>
                <Routes >
                    <Route path="/Chart" exact element={<Chart />} />
                    <Route path="/DataForm" exact element={<GraphDataForm />} />
                    <Route path="*" exact element={<Dashboard />} />
                </Routes>
            </Container>
        </HashRouter>
    );
}

export default App;
