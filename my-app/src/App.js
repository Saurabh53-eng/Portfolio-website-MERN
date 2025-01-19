import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import INotebook from './image/INotebook.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from "react-router"
function App() {
  return (
    <div>
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
