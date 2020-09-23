    export const transitionVariants = (pageVariants) => {
        return pageVariants = {
            initial:{
                opacity: 0,
                y: '100vw',
                scale: 0.8,
            },
            in: {
                opacity: 1,
                y: 0,
                scale: 1,
            },
            out: {
                opacity: 0,
                y: '-100vw',
                scale: 1.1,
            }
        }

    }
    
    export const transitionsPage = (pageTransitions)=> {
        return pageTransitions = {
            //duration: 1,
            //transition: 'linear'
            // type: 'spring',
            // stiffness:30
            // ease: 'easeIn',
            // ease: 'circInOut',
            type: 'spring',
            ease: 'circInOut',
            stiffness:25,
            duration: 1
        }
    }