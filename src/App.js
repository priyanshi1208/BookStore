import BookStoreHome from './component/bookStore-home/bookStore-home';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import BookStoreCart from './component/bookStore-cart/bookStore-cart';
import OrderPlaced from './component/OrderPlaced/Orderplaced';
import Main from './component/bookStore-Login/BookStore-Main';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <BookStoreHome/>
          </Route>
          <Route path='/cart'>
            <BookStoreCart/>
          </Route>
          <Route path='/summary'>
            <OrderPlaced/>
          </Route>
          <Route path='/login'>
            <Main/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
