export const ANIMATION_HIDDEN = 'hidden'
export const ANIMATION_VISIBLE = 'visible'
const transition = { type: "spring", bounce: 0.30, duration: 0.6 }
export const MotionRight = {

    [ANIMATION_HIDDEN]: {
        x: -100,
        opacity: 0,
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, ...transition }
    })
}
export const MotionLeft = {

    [ANIMATION_HIDDEN]: {
        x: 100,
        opacity: 0,
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, ...transition }
    })
}
export const MotionUp = {
    [ANIMATION_HIDDEN]: {
        y: 50,
        opacity: 0
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, ...transition }
    })
}

export const MotionFlip = {
    [ANIMATION_HIDDEN]: {
        rotateY: 90
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        rotateY: 0,
        transition: { delay: custom * 0.3, ...transition }
    })
}
export const MotionParent = {
    [ANIMATION_HIDDEN]: {
        opacity: 0,

    },
    [ANIMATION_VISIBLE]: {
        opacity: 1,
        transition: {
            staggerChildren: .07
        }
    }
};
export const MotionChildLeft = {
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
}

export const MotionChildUp = {
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
} 