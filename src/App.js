import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import NotMatch from "./pages/NotMatch";
import Post from "./pages/Post";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <hr />
      <Switch>
        <Route exact path={"/"} component={Home} />
        {/* Route koji se nalazi ispod, sa path "/posts/:id" trenutno nam renderuje komponentu Post koja na novoj strani prikazuje podatke
        o single post-u koji dobavlja preko parametra id is url-a. U slucaju da hocemo da koristimo nested route koji se nalazi u 
        komponenti Posts, ovu rutu ispod moramo zakomentarisati kako bismo izbegli da na dva mesta imamo Route sa istim path-om jer cemo dobiti gresku */}
        {/* <Route path={"/posts/:id"}>
          <Post />
        </Route> */}

        <Route path={"/posts"}>
          <Posts />
        </Route>
        <Route path={"*"} component={NotMatch} />
      </Switch>
    </Router>
  );
}

export default App;
