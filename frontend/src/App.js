import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AddProduct from './component/Add';
import ProductList from './component/List';
import DescriptionAlerts from './component/snakebar';
function App() {
  return (
   <>
   <AddProduct/>
   <ProductList/>
   </>
  );
}

export default App;
