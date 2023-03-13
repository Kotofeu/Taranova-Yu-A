import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/icons/logo.png';
import { email, tel, links } from '../HeaderStore/headerConsts'
import { motion, useScroll, useSpring } from 'framer-motion'
import { HeaderLink, HeaderLinkType } from './HeaderLink';
import classes from './Header.module.scss'
export const Header = memo(() => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        restDelta: 0.001
    });
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
                                    onClick = {() => scaleX.set(0)}
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
                            <button className={classes.btn}>
                                Написать обращение
                            </button>
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
