export const ANIMATION_HIDDEN = 'hidden'
export const ANIMATION_VISIBLE = 'visible'
export const MotionRight = {

    [ANIMATION_HIDDEN]: {
        x: -100,
        opacity: 0,
        scale: 0.8
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { delay: custom * 0.3 }
    })
}
export const MotionLeft = {

    [ANIMATION_HIDDEN]: {
        x: 100,
        opacity: 0,
        scale: 0.8
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { delay: custom * 0.3 }
    })
}
export const MotionUp = {
    [ANIMATION_HIDDEN]: {
        y: 100,
        opacity: 0
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
}
export const MotionDown = {
    [ANIMATION_HIDDEN]: {
        y: -100,
        opacity: 0
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
}
export const MotionFlip = {
    [ANIMATION_HIDDEN]: {
        rotateY: 90
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        rotateY: 0,
        transition: { delay: custom * 0.3 }
    })
}

export const MotionOpacity = {
    [ANIMATION_HIDDEN]: {
        opacity: 0
    },
    [ANIMATION_VISIBLE]: (custom: number) => ({
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
}
export const MotionParent = {
    [ANIMATION_HIDDEN]: {
        opacity: 0,

    },
    [ANIMATION_VISIBLE]: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
};
export const MotionChildRight = {
    [ANIMATION_HIDDEN]: {
        x: 100,
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

export const MotionChildUp= {
    [ANIMATION_HIDDEN]: {
        y: 100,
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
/*export const ANIMATION_HIDDEN = 'hidden'
export const ANIMATION_VISIBLE = 'visible'
export const MotionRight = {

    [ANIMATION_HIDDEN]: {
        x: -100,
        opacity: 0,
        scale: 0.8
    },
    [ANIMATION_VISIBLE]: {
        x: 0,
        opacity: 1,
        scale: 1,
    }
}
export const MotionLeft = {

    [ANIMATION_HIDDEN]: {
        x: 100,
        opacity: 0,
        scale: 0.8
    },
    [ANIMATION_VISIBLE]: {
        x: 0,
        opacity: 1,
        scale: 1,
    }
}
export const MotionUp = {
    [ANIMATION_HIDDEN]: {
        y: 100,
        opacity: 0
    },
    [ANIMATION_VISIBLE]: {
        y: 0,
        opacity: 1,
    }
}
export const MotionDown = {
    [ANIMATION_HIDDEN]: {
        y: -100,
        opacity: 0
    },
    [ANIMATION_VISIBLE]: {
        y: 0,
        opacity: 1,
    }
}
export const MotionFlip = {
    [ANIMATION_HIDDEN]: {
        rotateY: 90
    },
    [ANIMATION_VISIBLE]: {
        rotateY: 0,
    }
}

export const MotionOpacity = {
    [ANIMATION_HIDDEN]: {
        opacity: 0
    },
    [ANIMATION_VISIBLE]: {
        opacity: 1,
    }
}
export const MotionParent = {
    [ANIMATION_HIDDEN]: {},
    [ANIMATION_VISIBLE]: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0.2
        }
    }
};
 */