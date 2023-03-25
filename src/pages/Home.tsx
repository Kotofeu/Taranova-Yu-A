import { AboutSection } from '../modules/AboutSection'
import { ShortBlogSection } from '../modules/ShortBlogSection'
import { BioSection } from '../modules/BioSection/'
import { ShortEventsSection } from '../modules/ShortEventsSection'

export const Home = () => {
  return (

    <main>
      <AboutSection/>
      <ShortBlogSection/>
      <BioSection/>
      <ShortEventsSection/>
    </main>
  )
}

export default Home