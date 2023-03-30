import Router from "./components/Router";
import { useEffect } from 'react'
import './styles/style.scss'
import BlogsStore from "./store/BlogsStore";
function App() {

  useEffect(() => {
    BlogsStore.loadBloags()

  }, [])
  return (
    <Router></Router>
  );
}

export default App;
