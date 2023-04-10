import React from 'react'
import {motion} from 'framer-motion'
import '../Styles/main.css'
import {Herox} from '../Styles/animate'

const Hero = () => {





    return (
        <motion.div 
        className="hero">
            <motion.div 
            variants={Herox}
            initial="hidden"
            animate="visible"
            className="content">
                <motion.div >
                    <motion.h1  >Beautifully Crafted Web Exprience </motion.h1>
                    <motion.div 
                    className="meet">
                        <motion.p>Meet Abdeladim</motion.p>
                    </motion.div>
                    <motion.div
                    className="scroll-icon">
                        <motion.span
                            animate={{
                                y: ["0rem", "2.5rem", "0rem"],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        className="scroll-icon-ab">
                        </motion.span>
                    </motion.div>
                    
                </motion.div>
            </motion.div>
            
        </motion.div>
    )
}

export default Hero
