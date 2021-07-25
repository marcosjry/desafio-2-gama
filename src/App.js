import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Cliente from './pages/Cliente'
import Produto from './pages/Produtos'
import Home from './pages/Home'


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/cliente" exact component={Cliente} />
          <Route path="/produtos" exact component={Produto} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
