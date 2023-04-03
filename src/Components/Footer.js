import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import { Skill } from '../Styles/animate'
import '../Styles/main.css'

const Footer = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
            controls.start("visible")
        }
    }, [controls, inView]);

    return (
        <motion.div id="contact"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={Skill}
        className="footer-container">
            <motion.div className="content">
                <motion.h1>Like what you see ?</motion.h1>
                <motion.a href="emailto:benabdeladim7@gmail.com" className="hire-me">Hire me</motion.a>
            </motion.div>
            <motion.footer className="footer">
                <motion.div className="social-icons">
                <motion.ul>
                   <motion.li><motion.a target="_blank" href="https://github.com/4bdeladim"> <FiGithub className="social-media-icons-footer" alt="github" /> </motion.a> </motion.li>
                   <motion.li><motion.a target="_blank" href="https://www.instagram.com/4bdeladim/"> <AiOutlineInstagram className="social-media-icons-footer" alt="instagram" /> </motion.a> </motion.li>
                   <motion.li><motion.a target="_blank" href="emailto:benabdeladim7@gmail.com"> <AiOutlineMail className="social-media-icons-footer" alt="email" /> </motion.a> </motion.li>
                </motion.ul>
                </motion.div>
            </motion.footer>
        </motion.div>
    )
}

export default Footer
