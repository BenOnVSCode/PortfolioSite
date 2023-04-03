import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import '../Styles/main.css'
import { useInView } from "react-intersection-observer"
import {  ProjectImg, ProjectTitle, ProjectName, ProjectDes } from '../Styles/animate'


export const Projects = () => {


    const controls3 = useAnimation();
    const [ref3, inView3] = useInView();
    const controls4 = useAnimation();
    const [ref4, inView4] = useInView();
    const controls5 = useAnimation();
    const [ref5, inView5] = useInView();
    const controls6 = useAnimation();
    const [ref6, inView6] = useInView();
    const controls7 = useAnimation();
    const [ref7, inView7] = useInView();
    const controls8 = useAnimation();
    const [ref8, inView8] = useInView();



    useEffect(() => {
        if(inView3) {
            controls3.start("visible")
        }
    }, [controls3, inView3]);

    useEffect(() => {
        if(inView4) {
            controls4.start("visible")
        }
    }, [controls4, inView4]);


    useEffect(() => {
        if(inView5) {
            controls5.start("visible")
        }
    }, [controls5, inView5]);


    useEffect(() => {
        if(inView6) {
            controls6.start("visible")
        }
    }, [controls6, inView6]);

    useEffect(() => {
        if(inView7) {
            controls7.start("visible")
        }
    }, [controls7, inView7]);

    useEffect(() => {
        if(inView8) {
            controls8.start("visible")
        }
    }, [controls8, inView8]);



    return (
        <motion.section className="portfolio" id="projects">
            <motion.div className="portfolio-container ">
                <motion.div className="portfolio-left">
                    <motion.div className="inner">
                        <motion.p
                            ref={ref8}
                            animate={controls8}
                            initial="hidden"
                            variants={ProjectTitle}
                        className="subtitle">
                            Website 
                        </motion.p>
                        <motion.p
                            ref={ref8}
                            animate={controls8}
                            initial="hidden"
                            variants={ProjectName}
                        className="featured-title">
                            Restaurant template  !
                        </motion.p>
                        <motion.div
                            ref={ref8}
                            animate={controls8}
                            initial="hidden"
                            variants={ProjectDes}
                        className="btns"> 
                        <motion.a target="_blank" href="https://github.com/4bdeladim/restaurant-website">
                             <motion.button className="btn">
                                Source Code 
                            </motion.button>
                        </motion.a>
                        <motion.a target="_blank" href="https://4bdeladim.github.io/restaurant-website/">
                            <motion.button className="btn">
                                Demo
                            </motion.button>
                        </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.a href="">
                        <motion.img
                            ref={ref8}
                            animate={controls8}
                            initial="hidden"
                            variants={ProjectImg}
                        src="https://i.ibb.co/VgpZBKY/scrnli-11-27-2020-9-39-27-PM.png" alt="Website " />
                </motion.a>

            </motion.div>
            <motion.div className="portfolio-container ">
                <motion.div className="portfolio-left">
                    <motion.div className="inner">
                        <motion.p
                            ref={ref7}
                            animate={controls7}
                            initial="hidden"
                            variants={ProjectTitle}
                        className="subtitle">
                            Website 
                        </motion.p>
                        <motion.p
                            ref={ref7}
                            animate={controls7}
                            initial="hidden"
                            variants={ProjectName}
                        className="featured-title">
                            Virtual Banking template  !
                        </motion.p>
            
                        <motion.div
                            ref={ref7}
                            animate={controls7}
                            initial="hidden"
                            variants={ProjectTitle}
                        className="btns"> 
                        <motion.a target="_blank" href="https://github.com/4bdeladim/Virtual-Banking-Website-Template">
                             <motion.button className="btn">
                                Source Code 
                            </motion.button>
                        </motion.a>
                        <motion.a target="_blank" href="https://4bdeladim.github.io/Virtual-Banking-Website-Template/">
                            <motion.button className="btn">
                                Demo
                            </motion.button>
                        </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.a href="">
                        <motion.img
                            ref={ref7}
                            animate={controls7}
                            initial="hidden"
                            variants={ProjectImg}
                        src="https://i.ibb.co/D7sZtyQ/scrnli-11-28-2020-1-37-25-PM.png" alt="Website " />
                </motion.a>

            </motion.div>
            <motion.div className="portfolio-container transition3">
                <motion.div className="portfolio-left">
                    <motion.div className="inner">
                        <motion.p
                            ref={ref3}
                            animate={controls3}
                            initial="hidden"
                            variants={ProjectTitle}
                         className="subtitle">
                            Website
                        </motion.p>
                        <motion.p
                            ref={ref3}
                            animate={controls3}
                            initial="hidden"
                            variants={ProjectName}
                        className="featured-title">
                            Pepsi Landing Page  ! 
                        </motion.p>
                        
                        <motion.div
                            ref={ref3}
                            animate={controls3}
                            initial="hidden"
                            variants={ProjectDes}
                        className="btns"> 
                            <motion.a target="_blank" href="https://github.com/4bdeladim/Pepsi-landing-page">
                                <motion.button className="btn">
                                    Source Code 
                                </motion.button>
                            </motion.a>
                            <motion.a target="_blank" href="https://4bdeladim.github.io/Pepsi-landing-page/">
                                <motion.button className="btn">
                                    Demo
                                </motion.button>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.a href="">
                        <motion.img
                            ref={ref3}
                            animate={controls3}
                            initial="hidden"
                            variants={ProjectImg}
                            className="img1"
                        src='https://i.ibb.co/sJVFxsz/scrnli-11-27-2020-9-58-15-PM.png' alt="Landing page " />
                </motion.a>

            </motion.div>
            
            <motion.div className="portfolio-container ">
                <motion.div className="portfolio-left">
                    <motion.div className="inner">
                        <motion.p
                            ref={ref6}
                            animate={controls6}
                            initial="hidden"
                            variants={ProjectTitle}
                        className="subtitle">
                            Web App
                        </motion.p>
                        <motion.p
                            ref={ref6}
                            animate={controls6}
                            initial="hidden"
                            variants={ProjectName}
                        className="featured-title">
                            Cryptocurrency Tracker !
                        </motion.p>
                        
                        <motion.div
                            ref={ref6}
                            animate={controls6}
                            initial="hidden"
                            variants={ProjectDes}
                        className="btns"> 
                            <motion.a target="_blank" href="https://github.com/4bdeladim/cryptocurrency-finance-price-tracker">
                                <motion.button className="btn">
                                    Source Code 
                                </motion.button>
                            </motion.a>
                            <motion.a target="_blank" href="https://4bdeladim.github.io/cryptocurrency-finance-price-tracker/">
                                <motion.button className="btn">
                                    Demo
                                </motion.button>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.a href="">
                        <motion.img
                            ref={ref6}
                            animate={controls6}
                            initial="hidden"
                            variants={ProjectImg}
                        src="https://i.ibb.co/f1yvFZ7/scrnli-11-27-2020-3-58-17-PM.png" alt="Crypotpcurrency Finance Price Tracker App" />
                </motion.a>

            </motion.div>
            <motion.div className="portfolio-container ">
                <motion.div className="portfolio-left">
                    <motion.div className="inner">
                        <motion.p
                            ref={ref4}
                            animate={controls4}
                            initial="hidden"
                            variants={ProjectTitle}
                        className="subtitle">
                            Web App
                        </motion.p>
                        <motion.p
                            ref={ref4}
                            animate={controls4}
                            initial="hidden"
                            variants={ProjectName}
                        className="featured-title">
                            Todo App !
                        </motion.p>
                        <motion.div
                             ref={ref4}
                             animate={controls4}
                             initial="hidden"
                             variants={ProjectDes}
                        className="btns"> 
                        <motion.a target="_blank" href="https://github.com/4bdeladim/todo-app-with-react">
                             <motion.button className="btn">
                                Source Code 
                            </motion.button>
                        </motion.a>
                        <motion.a target="_blank" href="https://4bdeladim.github.io/todo-app-with-react/">
                            <motion.button className="btn">
                                Demo
                            </motion.button>
                        </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.a href="">
                        <motion.img
                            ref={ref4}
                            animate={controls4}
                            initial="hidden"
                            variants={ProjectImg}
                        src="https://i.ibb.co/QnNNBb7/scrnli-11-28-2020-1-24-58-PM.png" alt="Todo APP" />
                </motion.a>

            </motion.div>
        </motion.section>
    )
}


export default Projects 