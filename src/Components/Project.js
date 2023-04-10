import React, {useEffect, useState} from 'react'
import {motion, useAnimation} from 'framer-motion'
import '../Styles/main.css'
import Modal from 'react-modal';
import { useInView } from "react-intersection-observer"
import {  ProjectImg, ProjectTitle, ProjectName, ProjectDes } from '../Styles/animate'
import { AiFillEye} from "react-icons/ai"
import { GrClose} from "react-icons/gr"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Project = ({subtitle, title, desc, code, demo, image, path}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [isOpen, setOpen] = useState(false)
    
    useEffect(() => {
        if(inView) {
            controls.start("visible")
        }
    }, [controls, inView]);
  return (
    <motion.div className="portfolio-container ">
                <motion.div className="portfolio-left">
                    <motion.div className="inner">
                        <motion.p
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            variants={ProjectTitle}
                        className="subtitle">
                            {subtitle}
                        </motion.p>
                        <motion.p
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            variants={ProjectName}
                        className="featured-title">
                            {title}
                        </motion.p>
                        <motion.div ref={ref}
                            animate={controls}
                            initial="hidden"
                            variants={ProjectName}
                            className='project-details'>
                                {desc}
                            
                        </motion.div>
                        <motion.div
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            variants={ProjectDes}
                        className="btns"> 
                        <motion.a target="_blank" href={code}>
                             <motion.button className="btn">
                                Source Code 
                            </motion.button>
                        </motion.a>
                        <motion.a target="_blank" href={demo}>
                            <motion.button className="btn">
                                Demo
                            </motion.button>
                        </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.a className="project-image">
                        <motion.img
                            
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            variants={ProjectImg}
                            
                            
                        src={image} alt="Website " />
                        <Modal isOpen={isOpen} className="modal">
                            <GrClose className='close-icon' onClick={() => setOpen(false)} />
                            <Carousel className='carousel'>
                                <div>
                                    <img alt="" src={`/assets/${path}/shot1.png`} />
                                    
                                </div>
                                <div>
                                    <img alt="" src={`/assets/${path}/shot2.png`} />
                                    
                                </div>
                                <div>
                                    <img alt="" src={`/assets/${path}/shot3.png`} />
                                    
                                </div>
                                
                            </Carousel>
                        </Modal>
                    <AiFillEye className="eye" onClick={(e) => setOpen(true)} />
                </motion.a>

            </motion.div>
  )
}

export default Project