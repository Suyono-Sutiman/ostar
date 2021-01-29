import React from 'react'
import Grid from './grid'
import webicon from '../images/Web Icon.svg'
import maricon from '../images/Marketing icon.svg'

const Service=()=>(
    <>
    <Grid xs='12' md='6' bg='#141618' color='#fff'class='w-25 mx-auto'
    title1='Website' image1={webicon} text1='Situs web adalah inti dari keberadaan online Anda. Kami akan membuat 
    situs web fungsional yang disesuaikan untuk bisnis Anda dan mendorong hasil. Semua situs web kami menyertakan 
    SEO, dan lead generation tools.' tmb1='website' 
    title2='Marketing' image2={maricon} text2='Kami membantu Anda dalam pengelolaan dan periklanan media sosial 
    untuk membantu Anda mengembangkan bisnis dan menjangkau klien baru.' tmb2='marketing'
    />
    </>
)
export default Service