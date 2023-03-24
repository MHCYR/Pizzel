import RegisterForm from './components/RegisterForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-screen h-screen bg-stone-800 grid grid-cols-3 grid-rows-6">
      <BrowserRouter>
        <Navbar className="col-span-3 h-10 bg-gray-600" />
        <Routes>
          <Route path="/" element={<RegisterForm className="col-start-2 row-span-4 place-self-center" />} />
          <Route path="/login" element={<div>aqui va el componente de quike</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
