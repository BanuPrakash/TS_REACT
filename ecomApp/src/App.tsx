import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import NavbarComponent from './components/NavbarComponent';
import DefferedDemo from './components/DeferredDemo';
import ActionStateComponent from './components/ActionStateComponent';
import OptimisticTodoList from './components/OptimisticTodoList';
import Container from './components/ImperativeComponent';
import CartList from './components/CartList';


function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/deffer" element={<DefferedDemo />} />
        <Route path="/actionState" element={<ActionStateComponent />} />
        <Route path="/opt" element={<OptimisticTodoList />} />
        <Route path='/imperative' element={<Container />} />
        <Route path='/cart' element={<CartList />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
