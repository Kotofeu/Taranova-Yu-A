export const ANIMATION_HIDDEN = 'hidden'
export const ANIMATION_VISIBLE = 'visible'
const transition = { type: "spring", bounce: 0.30, duration: 0.6 }
const isDesktop: boolean = window.innerWidth >= 768

export const MotionRight = isDesktop ? {

    [ANIMATION_HIDDEN]: {
        x: -100,
        opacity: 0,
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, ...transition }
    })
} : undefined
export const MotionLeft = isDesktop ? {

    [ANIMATION_HIDDEN]: {
        x: 100,
        opacity: 0,
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, ...transition }
    })
} : undefined
export const MotionUp = isDesktop ? {
    [ANIMATION_HIDDEN]: {
        y: 50,
        opacity: 0
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, ...transition }
    })
} : undefined

export const MotionFlip = isDesktop ? {
    [ANIMATION_HIDDEN]: {
        rotateY: 90
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        rotateY: 0,
        transition: { delay: custom * 0.3, ...transition }
    })
} : undefined
export const MotionParent = isDesktop ? {
    [ANIMATION_HIDDEN]: {
        opacity: 0,

    },
    [ANIMATION_VISIBLE]: {
        opacity: 1,
        transition: {
            staggerChildren: .07
        }
    }
} : undefined;
export const MotionChildLeft = isDesktop ? {
    [ANIMATION_HIDDEN]: {
        x: 60,
        opacity: 0
    },
    [ANIMATION_VISIBLE]: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring", bounce: 0.20, damping: 13
        }
    }
} : undefined

export const MotionChildUp = isDesktop ? {
    [ANIMATION_HIDDEN]: {
        y: 60,
        opacity: 0,

    },
    [ANIMATION_VISIBLE]: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring", bounce: 0.20, damping: 13
        }
    }
} : undefined