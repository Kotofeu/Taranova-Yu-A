import { Router } from './Router';
import { useEffect } from 'react'
import { applicationStore, blogStore, eventStore } from "./store";
import Section, { SectionType } from "./components/Section/Section";
import Loader from "./components/Loader/Loader";
import { observer } from "mobx-react-lite";

import './styles/style.scss'

const App = observer(() => {
  useEffect(() => {
    applicationStore.loadGeneralData()
    blogStore.loadBloags()
    eventStore.loadEvents()
  }, [])
  if (applicationStore.isLoading) {
    return (
        <Section sectionType={SectionType.fullSize} >
            <Loader />
        </Section>
    )
}
  return (
    <Router/>
  );
})

export default App;
