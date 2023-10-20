import React from 'react'
import TeamData from './TeamData'

function Team() {

  return (
    <div>
        <TeamData
        image = {require('./images/Team/Ignacius.jpeg')}
        name= 'Ignacius Godlove Lebogo'
        description= "Ignacius Godlove Lebogo is an ambitious young man in the film and media world with a burning desire to grow and learn. With slightly more than three years of experience, he has evolved into a well-rounded skilled storyteller and filmmaker, driven by his passion for both his African heritage and the kaleidoscope of human experiences"
        role= 'CFO/Co-Head of Media'
        quote= "As the CFO/Co-Head of Media at TMG Entertainment, Ignacius plays a pivotal role in upholding the company's values and creative vision, ensuring the delivery of top-notch products that resonate with both clients and the ethos of the company"
        />

        <TeamData
        image = {require('./images/Team/Mylz.jpeg')}
        name= 'Milile "Mylz" Msomi '
        description= "Milile Msomi is a Writer and Director in film and television. He has 2 years of experience in production with in the form of independent short films and other media. Mylz handles the concept creation of TMG, including commercials, feature films, short films and television."
        role= "Director/Co-Creative Director/ Co-Head of Digital Media"
        quote= "There's a new wave of creatives, just looking for the opportunity to express themselves. These creatives, this new generation, have a collective goal to push this field. We are those creatives or at least we represent them. TMG Entertainment is a media company dedicated to redefine African media. We want to tell our stories in our way for our people but also for the world to see. I want us to make a difference and that is the goal"

        />

        <TeamData
        image = {require('./images/Team/Okuhle .jpeg')}
        name= 'Okuhle Meke'
        description= "Okuhle's background encompasses a multifaceted skill set, including data analysis, strategy development, cinematography, colour grading, photography, and digital marketing, which I have honed over the past 6 years in the visual arts domain"
        role= "CIO/PO"
        quote= "My affinity for innovation is deeply rooted, and I've discovered that the world of film and visual media offers a canvas for exploring and embracing endless possibilities. This captivating realm not only allows for creative expression but also serves as a conduit for channeling innovative ideas. Join me as I navigate the intriguing interplay between creativity and technology, unraveling new narratives and pushing the boundaries of visual storytelling"
        />

        <TeamData
        image = {require('./images/Team/Theo.jpeg')}
        name= 'Theophilus "Theo" Pasineni'
        description= "Theophilus Pasineni is a film and television editor ,cinematographer and post production coordinator. With at least 2 years of experience in the Production and Post Production side of film and Television gathered from Independent short films &  television news editing, Theo takes care of the business side of things at TMG, and makes sure there is quality product delivery to the satisfaction of the client while upholding the values of TMG Entertainment and Completing its vision"
        role= "Director /CEO /COO of TMG Entertainment"
        quote= "As a Creative in the business of film and television, my passion and vision has always been to tell African stories made by Africans who understand what it means to be African. Creating valuable productions that showcases the creativity and versatility of Africans from different cultures, languages  and backgrounds therefore taking our seat at the Global Creative Market"
        />
    </div>
  )
}

export default Team