import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import NavbarComponent from './components/NavbarComponent';
import DefferedDemo from './components/DeferredDemo';


function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/deffer" element={<DefferedDemo />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
