import { MCard } from '../components/Card'
import UniversalList from '../components/UniversalList'
import Section, { SectionType } from '../components/Section'
import TextBlock from '../components/TextBlock'
import { motion } from 'framer-motion'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionLeft, MotionRight, MotionUp } from '../const/animation'
import { AboutSection } from '../modules/AboutSection'
import { ShortBlogSection } from '../modules/ShortBlogSection'
import { BioSection } from '../modules/BioSection/BioSectionComponents/BioSection'


const Home = () => {
  return (

    <main>
      <AboutSection/>
      <ShortBlogSection/>
      <BioSection/>

    </main>
  )
}

export default Home