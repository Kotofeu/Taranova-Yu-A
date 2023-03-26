import { memo } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import { HeaderLink, HeaderLinkType } from '../HeaderLink';
import Button from '../../../../UI/Button/Button';

import classes from './Header.module.scss'
import planImage from '../../../../assets/icons/plan.svg'
import messageImage from '../../../../assets/icons/message.svg'
import logo from '../../../../assets/icons/logo.png';

import { email, tel, links } from '../../HeaderStore/headerConsts'


export const Header = memo(() => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        restDelta: 0.001
    });
    const onLinkClick = () => {
        scaleX.set(0)
        window.scrollTo(0, 0);
    }
    return (
        <header className={classes.header}>
            <div className='container'>
                <nav className={classes.nav}>
                    <div className={classes.linksList}>
                        <img
                            className={classes.navLogo}
                            src={logo}
                            alt='logo'>
                        </img>
                        {links.map(link => {
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
                            href={email}

                        />
                        <HeaderLink
                            headerLinkType={HeaderLinkType.phone}
                            href={tel}
                        />
                        <li>
                            <Button
                                className={classes.btn}
                                beforeImg={planImage}
                                afterImg={messageImage}
                            >
                                Написать обращение
                            </Button>
                        </li>
                    </ul>

                </nav>
            </div >
            <motion.div
                className={classes.scrollProgress}
                style={{ scaleX: scaleX }}
            />


        </header >
    )
})
