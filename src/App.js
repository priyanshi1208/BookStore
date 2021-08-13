import BookStoreHome from './component/bookStore-home/bookStore-home';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import BookDetails from './component/BookDetails/BookDetails';
import Footer from './component/bookStore-home/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <BookStoreHome/>
            <BookDetails/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
