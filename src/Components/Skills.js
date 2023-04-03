import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import '../Styles/main.css'
import { useInView } from "react-intersection-observer"
import { Skill } from '../Styles/animate'

const Skills = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
            controls.start("visible")
        }
    }, [controls, inView]);


    return (
       <motion.section className="skills" id="skills">
            <motion.div
               
            className="skills-container">
                <motion.ul>
                    <motion.li
                         ref={ref}
                         animate={controls}
                         initial="hidden"
                         variants={Skill}
                    className="transition2">
                        <motion.div className="icon-container one">
                            <motion.img src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png" alt="front end development" />
                        </motion.div>
                        <motion.p className="skill-title">
                            Full Stack Web Development 
                        </motion.p>
                        <motion.p className="featured-desc skill-descr">
                        I'm a Full Stack JavaScript Developer with solid experience in the MERN and other JavaScript Frameworks and libraries. 
                        </motion.p>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </motion.section>
    )
}

export default Skills
