import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { MBlogCard } from '../components/BlogCard/BlogCard'

export const Blogs = () => {
    const router = useNavigate()

    return (
        <section className='blogs-page'>
            <div className='container'>
                <header>
                    <input type="text" placeholder='Поиск' />
                    <select id="selectID">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>

                    </select>
                </header>
                <div className='blogs-page__list'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20].map(item =>
                        <MBlogCard
                            className='blogs-page__blog'
                            title={`Блог${item}`}
                            time={Date.now().toString()}
                            date='1 сентября 2022'
                            pictureSrc={`https://starwars-visualguide.com/assets/img/planets/${item}.jpg`}
                            key={item}
                            onClick={() => router(`/blog/${item}`)}
                        />)}
                </div>

            </div>

        </section>
    )
}

export default Blogs