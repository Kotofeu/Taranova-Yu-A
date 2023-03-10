import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/icons/logo.png';
import { email, tel, links } from '../HeaderStore/headerConsts'
import { motion, useScroll, useSpring } from 'framer-motion'
import { HeaderLink, HeaderLinkType } from './HeaderLink';
import './Header.scss'
export const Header = React.memo(() => {
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
                            {links.map(link => {
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
                            <HeaderLink
                                headerLinkType={HeaderLinkType.email}
                                href={email}
                            />
                            <HeaderLink
                                headerLinkType={HeaderLinkType.phone}
                                href={tel}
                            />
                            <li>
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
