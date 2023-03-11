export const ANIMATION_HIDDEN = 'hidden'
export const ANIMATION_VISIBLE = 'visible'
export const MotionRight = {
    
    [ANIMATION_HIDDEN]: {
        x: -100,
        opacity: 0,
        scale: 0.8
    },
    [ANIMATION_VISIBLE]:  (custom: number) => ({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {delay: custom * 0.3}
      })
}
export const MotionLeft = {
    
    [ANIMATION_HIDDEN]: {
        x: 100,
        opacity: 0,
        scale: 0.8
    },
    [ANIMATION_VISIBLE]:  (custom: number) => ({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {delay: custom * 0.3}
      })
}
export const MotionUp = {
    [ANIMATION_HIDDEN]: {
        y: 100,
        opacity: 0
    },
    [ANIMATION_VISIBLE]:(custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.3}
    })
}
export const MotionFlip = {
    [ANIMATION_HIDDEN]: {
        rotateY: 90
    },
    [ANIMATION_VISIBLE]:(custom: number) => ({
        rotateY: 0,
        transition: {delay: custom * 0.3}
    })
}
