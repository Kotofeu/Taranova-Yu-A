import { motion } from 'framer-motion'

import classes from './HeaderActiveLine.module.scss'

const HeaderActiveLine = () => {
  return (
    <motion.div
      className={classes.activeLine}
      layoutId='activeNavLink'
    />
  )
}

export default HeaderActiveLine