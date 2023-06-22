import Router from "./components/Router";
import { useEffect } from 'react'
import './styles/style.scss'
import { observer } from "mobx-react-lite";
import { blogStore, eventStore } from "./store";
const App = observer(() => {
  useEffect(() => {
    blogStore.loadBloags()
    eventStore.loadEvents()
  }, [])
  console.log(eventStore.events)
  return (
    <Router></Router>
  );
})

export default App;
