import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import { HeaderLink, HeaderLinkType } from '../HeaderLink/HeaderLink';
import Button from '../../../../UI/Button/Button';

import planImage from '../../../../assets/icons/plan.svg'
import messageImage from '../../../../assets/icons/message.svg'
import logo from '../../../../assets/icons/logo.png';


import classes from './Header.module.scss'
import { observer } from 'mobx-react-lite';
import HeaderActiveLine from '../HeaderActiveLine/HeaderActiveLine';
import { applicationStore } from '../../../../store';


export const Header = observer(() => {
    const { scrollYProgress } = useScroll();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        restDelta: 0.001
    });
    const onLinkClick = () => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false)
        scaleX.set(0)

    }
    const onBurgerClick = () => {
        setIsMenuOpen((prev) => !prev)
    }
    return (
        <header className={classes.header}>
            <div className='container'>
                <div className={classes.header_inner}>
                    <NavLink to={'/'}>
                        <img
                            className={classes.header_logo}
                            src={logo}
                            alt='logo'>
                        </img>
                    </NavLink>

                    <nav className={`${classes.header_nav} ${isMenuOpen && classes.header_nav___active}`}>
                        <div className={classes.header_linksList}>
                            {applicationStore.headerLinks.map(link => {
                                return (
                                    <NavLink
                                        to={link.link}
                                        key={link.link}
                                        className=
                                        {
                                            ({ isActive }) =>
                                                [classes.header_link, isActive ? classes.header_link___active : ''].join(' ')
                                        }
                                        onClick={onLinkClick}
                                        end
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {link.title}
                                                {isActive && <HeaderActiveLine />}
                                            </>
                                        )}
                                    </NavLink>
                                )
                            })}
                        </div>
                        <ul className={classes.header_contactsList}>
                            <HeaderLink
                                headerLinkType={HeaderLinkType.email}
                                href={applicationStore.email || '#'}

                            />
                            <HeaderLink
                                headerLinkType={HeaderLinkType.phone}
                                href={applicationStore.phone || '#'}
                            />
                        </ul>
                    </nav>
                    <div className={classes.header_buttons}>
                        <Button
                            className={classes.header_modalBtn}
                            beforeImg={planImage}
                            afterImg={messageImage}
                        >
                            Написать обращение
                        </Button>
                        <button
                            className={
                                `${classes.header_burgerBtn} ${isMenuOpen
                                    ? classes.header_burgerBtn___close
                                    : ''
                                }`}
                            onClick={onBurgerClick}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </div >
            <motion.div
                className={classes.header_scrollProgress}
                style={{ scaleX: scaleX }}
            />
        </header >
    )
})
