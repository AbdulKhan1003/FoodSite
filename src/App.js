import Navbar from './Components/Navbar';
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AppRoutes from './AppRoutes';

function App() {
  return (
        <>
        <Navbar />
        <AppRoutes />
        </>
  );
}

export default App;
