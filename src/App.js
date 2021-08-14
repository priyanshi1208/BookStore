import BookStoreHome from './component/bookStore-home/bookStore-home';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CartPage from './component/Cart/CartPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <BookStoreHome/>
          </Route>
          <Route path='/cart'>
            <CartPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
