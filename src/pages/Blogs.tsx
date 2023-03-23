import { FC, memo } from 'react'
import BlogCard from '../components/BlogCard/BlogCard'
/* <header>
                    <input type="text" placeholder='Поиск' />
                    <select id="selectID">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>

                    </select>
                </header> */
export const Blogs = () => {
    return (
        <section className='blogs-page'>
            <div className='container'>

                <div className='blogs-page__list'>
                    <BlogCard
                        repost={1}
                        likes={66}
                        dateTime={Date.now()}
                        desc='Сегодня на Балтик Плюс говорили про год педагога, наставника.
                        Обсудили повышение престижа профессии педагога.
                        Дефицит преподавателей в регионе.
                        Варианты поддержки молодых педагогов. Действующие программы поддержки учителей в регионе. В том числе в сельской местности.
                        Среднее профессиональное образование.
                        Дополнительное образование.
                        Сертификаты ПФДО.
                        
                        И после эфира еще долго говорили о построении СИСТЕМЫ подготовки кадров в нашем уникальном регионе, в каком возрасте правильнее начинать/помогать выбирать профессии и нужно ли управлять выбором. И, главное, как закрыть потребность наших предприятий в специалистах.
                        #ЗакСоб39 #депутатТаранова  #dfdfgdbfg  #dgbcbtb  #dkfggpbk  #4rtnjgndf  #дcbfbgg  #деf'
                        imageSrc='https://sun9-18.userapi.com/impg/-FBhgAtRoQmwMaKuFL4iP_h9WmHccrtMzQubWw/4PWRp43ZUmA.jpg?size=1200x1600&quality=95&sign=91269a878e22c323abbe341ca9b1835a&type=album'
                    />
                    <BlogCard
                        repost={0}
                        likes={1500}
                        dateTime={Date.now()}
                        desc='Сегодня на Балтик Плюс говорили про год педагога, наставника. \nОбсудили повышение престижа профессии педагога. \nДефицит преподавателей в регионе. \nВарианты поддержки молодых педагогов. Действующие программы поддержки учителей в регионе. В том числе в сельской местности. \nСреднее профессиональное образование. \nДополнительное образование. \nСертификаты ПФДО. \n\nИ после эфира еще долго говорили о построении СИСТЕМЫ подготовки кадров в нашем уникальном регионе, в каком возрасте правильнее начинать\/помогать выбирать профессии и нужно ли управлять выбором. И, главное, как закрыть потребность наших предприятий в специалистах. \n#ЗакСоб39 #депутатТаранова'
                        imageSrc='https://sun9-38.userapi.com/impg/Ji7WMLToIr-9dPwLwKx56zkTBsSk88BY9YZHhQ/5lHH2E6mi00.jpg?size=2560x1920&quality=95&sign=69c7b9bf585ae1278eb4d4244498ad72&type=album'
                    />
                </div>

            </div>

        </section>
    )
}

export default Blogs