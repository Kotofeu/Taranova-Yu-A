import { AboutSection } from '../modules/AboutSection'
import { ShortBlogSection } from '../modules/ShortBlogSection'
import { BioSection } from '../modules/BioSection/'
/*
import {lazy} from 'react'

const AboutSection = lazy(() =>
  import('../modules/AboutSection')
    .then(({ AboutSection }) => ({ default: AboutSection })),
);

const ShortBlogSection = lazy(() =>
  import('../modules/ShortBlogSection')
    .then(({ ShortBlogSection }) => ({ default: ShortBlogSection })),
);

const BioSection = lazy(() =>
  import('../modules/BioSection')
    .then(({ BioSection }) => ({ default: BioSection })),
);*/
export const Home = () => {
  return (

    <main>
      <AboutSection/>
      <ShortBlogSection/>
      <BioSection/>

    </main>
  )
}

export default Home