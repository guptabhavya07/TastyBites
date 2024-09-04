import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <>
      <section className="notFound" >
        <div className="container">
          <img src="/notFound.svg" alt="notfound" />
          <h1>LOOKS LIKE YOU ARE LOST</h1>
          <p>We cannot the page which you are looking</p>
          <Link to={'/'}>Back to Home{""} <span><HiOutlineArrowNarrowRight/></span></Link>
      </div>
      </section>
    </>
  );
}

export default NotFound

