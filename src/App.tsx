import Router from "./components/Router";
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react'
import './styles/style.scss'
import BlogsStore from "./store/BlogsStore";
import { observer } from "mobx-react-lite";
import ApplicationStore from "./store/ApplicationStore";
const App = observer(() => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 479.98px)"
  });
  useEffect(() => {
    BlogsStore.loadBloags()
  }, [])
  useEffect(() => {
    ApplicationStore.setIsDesktop(isDesktop)
  }, [isDesktop])
  return (
    <Router></Router>
  );
})

export default App;
