import Picture from '../components/UI/Picture'
import Title, { MTitle, TitleType } from '../components/UI/Title/Title'
import Card, { MCard } from '../components/Card'
import UniversalList from '../components/UniversalList'
import Section, { SectionType } from '../components/Section'
import TextBlock from '../components/TextBlock'
import { achievements, includedIn, text } from '../store/objects'
import { bio, slogan } from '../store/strings'
import blog1 from '../assets/images/1.png'
import blog2 from '../assets/images/2.png'
import profile from '../assets/images/profile-picture.jpg'
import profileWebp from '../assets/images/profile-picture.webp'
import BlogCard, { MBlogCard } from '../components/BlogCard'

import { motion } from 'framer-motion'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionFlip, MotionLeft, MotionRight, MotionUp } from '../const/animation'


const Home = () => {
  return (

    <main>
      <Section
        className='profile'
        title='Таранова Юлия Анатольевна'
        sectionType={SectionType.fullSize}
      >
        <div className='profile__info'>
          <motion.div
            className='profile__info-right'
            variants={MotionRight}
          >
            <Picture
              srcWebp={profileWebp}
              src={profile}
              alt='profile picture'
              className='profile__info-img'
            />
            <Title className='profile__info-slogan'>{slogan}</Title>
          </motion.div>
          <TextBlock className='profile__info-desc' textBlock={text}></TextBlock>
        </div>
        <div>
          <UniversalList
            className='profile__included'
            items={includedIn}
            renderItem={
              (item, index) => <MCard
                cardImage={item.cardImage}
                title={item.title}
                desc={item.desc}
                className='profile__included-card'
                index={index + 1}
                key={item.title}
              />
            }
          />
        </div>

      </Section>

      <Section className='short-blog' title='Последние публикации'>
        <div
          className='short-blog__inner'
        >

          <MBlogCard
            className='short-blog__blog'
            title='Блог1'
            time='17:30'
            date='1 сентября 2022'
            pictureSrc={blog1}
            variants={MotionRight}
          />
          <MBlogCard
            className='short-blog__blog'
            title='Блог2'
            time='19:30'
            date='3 сентября 2022'
            pictureSrc={blog2}
            variants={MotionLeft}
            viewport={{ once: true, amount: 1 }}
          />
        </div>
      </Section>


      <Section
        className='bio'
        title='Краткая биография'
        sectionType={SectionType.fullSize}
      >
        <TextBlock
          className='bio__text-block'
          textBlock={[{ title: "Lorem", text: bio }]}
        />
        <MTitle
          className='bio__achievements-title'
          titleType={[TitleType.posCetner]}
          initial={ANIMATION_HIDDEN}
          whileInView={ANIMATION_VISIBLE}
          variants={MotionUp}
          viewport={{ once: true }}
        >
          Победитель
        </MTitle>
        <motion.div
          initial={ANIMATION_HIDDEN}
          whileInView={ANIMATION_VISIBLE}
          viewport={{ once: true }}
        >
          <UniversalList
            className='bio__achievements-list'
            items={achievements}
            renderItem={
              (item, index) => <MCard
                cardImage={item.cardImage}
                title={item.title}
                desc={item.desc}
                index={index + 1}
                className='bio__achievements-card'
                key={item.title} />
            }
          />
        </motion.div>


      </Section>
    </main>
  )
}

export default Home