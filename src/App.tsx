import Router from "./components/Router";
import { useEffect } from 'react'
import './styles/style.scss'
import { blogStore, eventStore } from "./store";
const App = () => {
  useEffect(() => {
    blogStore.loadBloags()
    eventStore.loadEvents()
  }, [])
  return (
    <Router></Router>
  );
}

export default App;
