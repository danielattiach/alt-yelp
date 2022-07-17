import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { NavBar } from './components';
import Search from './pages/search';
import Saved from './pages/saved';
import { BusinessContextProvider } from './context/businessContext';


function App() {
    return (
        <Router>
            <BusinessContextProvider>
                <NavBar />
                <Container>
                    <Routes>
                        <Route path="/saved" element={<Saved />} />
                        <Route path="/" element={<Search />} />
                    </Routes>
                </Container>
            </BusinessContextProvider>
        </Router>
    );
}

export default App;
