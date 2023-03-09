import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/icons/logo.png';
import { email, tel } from '../store/strings';
import { motion, useScroll, useSpring } from 'framer-motion'
interface IHeader {
    links: ILink[];
}
export interface ILink {
    title: string;
    link: string;
}

const Header: FC<IHeader> = React.memo(
    (props) => {
        const { scrollYProgress } = useScroll();
        const scaleX = useSpring(scrollYProgress, {
            stiffness: 150,
            damping: 30,
            restDelta: 0.001
        });
        return (
            <header className='header'>
                <div className='header__inner'>
                    <div className='container'>
                        <nav className='header__nav'>
                            <div className='header__nav-links'>
                                <img
                                    className='header__nav-logo'
                                    src={logo}
                                    alt='logo'>
                                </img>
                                {props.links.map(link => {
                                    return (
                                        <NavLink
                                            to={link.link}
                                            key={link.link}
                                            className='header__link'>
                                            {link.title}
                                        </NavLink>
                                    )
                                })}
                            </div>
                            <ul className='header__nav-contacts-list'>
                                <li className='header__contact-item'>
                                    <a
                                        className='header__contact-link header__contact-link--email'
                                        href={`mailto:${email}`}
                                    >
                                        {email}
                                    </a>
                                </li>
                                <li className='header__contact-item'>
                                    <a
                                        className='header__contact-link header__contact-link--phone'
                                        href={`tel:${tel}`}
                                    >
                                        {tel}
                                    </a>
                                </li>
                                <li className='header__contact-item'>
                                    <button className='header__btn'>
                                        Написать обращение
                                    </button>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <motion.div
                        className='header__scrollYProgress'
                        style={{ scaleX: scaleX }}
                    />

                </div>

            </header>
        )
    })

export default Header