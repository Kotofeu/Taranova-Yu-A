import { memo, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import { HeaderLink, HeaderLinkType } from '../HeaderLink/HeaderLink';
import Button from '../../../../UI/Button/Button';

import planImage from '../../../../assets/icons/plan.svg'
import messageImage from '../../../../assets/icons/message.svg'
import logo from '../../../../assets/icons/logo.png';


import classes from './Header.module.scss'
import ApplicationStore from '../../../../store/ApplicationStore';
import { observer } from 'mobx-react-lite';


export const Header = observer(() => {
    const { scrollYProgress } = useScroll();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        restDelta: 0.001
    });
    const onLinkClick = () => {
        scaleX.set(0)
        window.scrollTo(0, 0);
        setIsMenuOpen(false)
    }
    const onBurgerClick = () => {
        setIsMenuOpen((prev) => !prev)
    }
    return (
        <header className={classes.header}>
            <div className='container'>
                <div className={classes.headerInner}>
                    <img
                        className={classes.logo}
                        src={logo}
                        alt='logo'>
                    </img>
                    <nav className={`${classes.nav} ${isMenuOpen && classes.navActive}`}>
                        <div className={classes.linksList}>
                            {ApplicationStore.headerLinks.map(link => {
                                return (
                                    <NavLink
                                        to={link.link}
                                        key={link.link}
                                        className=
                                        {
                                            ({ isActive }) =>
                                                [classes.link, isActive ? classes.linkActive : ''].join(' ')
                                        }
                                        onClick={onLinkClick}
                                    >
                                        {link.title}
                                    </NavLink>
                                )
                            })}
                        </div>
                        <ul className={classes.contactsList}>
                            <HeaderLink
                                headerLinkType={HeaderLinkType.email}
                                href={ApplicationStore.email}

                            />
                            <HeaderLink
                                headerLinkType={HeaderLinkType.phone}
                                href={ApplicationStore.tel}
                            />
                        </ul>
                    </nav>
                    <div className={classes.buttons}>
                        <Button
                            className={classes.modalBtn}
                            beforeImg={planImage}
                            afterImg={messageImage}
                        >
                            Написать обращение
                        </Button>
                        <button
                            className={
                                `${classes.burgerBtn} ${isMenuOpen
                                    ? classes.burgerClose
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
                className={classes.scrollProgress}
                style={{ scaleX: scaleX }}
            />
        </header >
    )
})
