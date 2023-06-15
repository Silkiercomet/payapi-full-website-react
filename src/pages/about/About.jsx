import React from 'react'
import { Details, FigureBg, GridAbout } from '../../components/sections'

const About = () => {
  return (
    <section className='about'>
      <h1>We empower innovators by delivering access to the financial system</h1>
      <GridAbout>
      <header>Our Vision</header>
      <p>Our main goal is to build beautiful consumer experiences along with developer-friendly  infrastructure. The result is an intelligent tool that gives everyone the ability to create  amazing products that solve big problems. We are deeply focused on democratizing financial  services through technology.</p>
      <header>Our Business</header>
      <p>At the core of our platform is the technical infrastructure APIs that connect consumers.  Our innovative product provides key insights for businesses and individuals, as well as  robust reporting for traditional financial institutions and developers.</p>
      </GridAbout>
      <FigureBg />
      <Details />
      <GridAbout>
      <header>The Culture</header>
      <p>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
      <header>The People</header>
      <p> We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>
      </GridAbout>
    </section>
  )
}

export default About