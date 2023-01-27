import React from 'react'
import welcomeImg from "../../images/about-img.jpg";


function Home() {
    return (
        <main className='main bg-grey mg-5'>
        <div className='section-title flex flex-c fs-20 text-light-black pd-3'>
        <h1>Welcome to your Bookclub</h1>
      </div>
        <section className='about'>
        <div className='container'>
    
  
          <div className='about-content grid'>
            <div className='about-img'>
              <img src = {welcomeImg} alt = "" />
            </div>
            <div className='about-text'>
              <h2 className='about-title fs-26 ls-1'>BookClub</h2>
              <p className='fs-17'>
              Here you can know all the informations about your favorite books, and you could also borrow books from the <b>open-lib</b> library
              </p>
              <p className='fs-17'>Enjoy your time ✨📚!</p>
            </div>
          </div>
        </div>
      </section>
        </main>
    )
}

export default Home