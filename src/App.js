import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Store from './components/Store';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/products" component={Store} />
        <Redirect to="/products" />
      </Switch>
    </ProductContextProvider>
  );
}
export default App;
