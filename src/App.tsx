import Router from "./components/Router";
import { useEffect } from 'react'
import './styles/style.scss'
import BlogsStore from "./store/BlogsStore";
import { observer } from "mobx-react-lite";
const App = observer(() => {

  useEffect(() => {
    BlogsStore.loadBloags()
  }, [])

  return (
    <Router></Router>
  );
})

export default App;
