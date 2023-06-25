import { memo } from 'react'
import { AboutSection } from '../modules/AboutSection'
import { BioSection } from '../modules/BioSection/'
import { ShortBlogSection } from '../modules/ShortBlog'
import { ShortEventsSection } from '../modules/ShortEventsSection'
export const Home = memo(() => {
  return (
    <main>
      <AboutSection />
      <ShortBlogSection />
      <BioSection />
      <ShortEventsSection />
    </main>
  )
})

export default Home