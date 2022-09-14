export const slideUpAnimation = ({ delay = 0, duration = .5 }) => {
    return {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration, delay },
        viewport: { once: true }
    }
}

export const slideRightAnimation = ({ delay = 0, duration = .5 }) => {
    return {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration, delay },
        viewport: { once: true }
    }
}

export const slideLeftAnimation = ({ delay = 0, duration = .5 }) => {
    return {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration, delay },
        viewport: { once: true }
    }
}

export const fadeInAnim = ({ delay = 0, duration = .5 }) => {
    return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration, delay },
        viewport: { once: true }
    }
}

export const staggeredAnims = {
    fadeIn: {
        container: {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.15
                }
            }
        },

        listItem: {
            hidden: { opacity: 0 },
            show: { opacity: 1 }
        }
    }
}
