import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import '../Styles/main.css'
import { useInView } from "react-intersection-observer"
import {  ProjectImg, ProjectTitle, ProjectName, ProjectDes } from '../Styles/animate'
import { AiFillEye} from "react-icons/ai"
import Project from './Project'

export const Projects = () => {


    



    return (
        <motion.section className="portfolio" id="projects">
            <Project image="/assets/chat/shot2.png" path="chat" subtitle="Web App" title="Chat app" demo="https://chat-4pp.up.railway.app/" code="https://github.com/4bdeladim/Chat-App" desc="Web chat app built with the MERN stack, using Socket.io for real time messaging." />
            <Project image="/assets/eco/shot1.png" path="eco" subtitle="Website" title="Ecommerce Site" demo="https://ecommerce-e86p.vercel.app/" code="https://github.com/4bdeladim/Ecommerce" desc="Ecommerce site using the MERN stack and stripe" />
            <Project image="/assets/social/shot2.png" path="social" subtitle="Website" title="Social Media Site" demo="https://socialmedi4.up.railway.app/" code="https://github.com/4bdeladim/Socialmedia" desc="Social Media site with MERN stack post new post, like and comment other posts" />
        </motion.section>
    )
}


export default Projects 