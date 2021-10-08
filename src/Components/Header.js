import React, { Component } from 'react'
import FlipMove from 'react-flip-move'

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name
      var occupation = this.props.data.occupation
      var description = this.props.data.description
      var city = this.props.data.address.city
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target='_blank'>
              <i className={network.className}></i>
            </a>
          </li>
        )
      })
    }

    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <FlipMove staggerDelayBy={150} appearAnimation='accordionVertical'>
              <li key='1' className='current'>
                <a className='smoothscroll' href='#home'>
                  Home
                </a>
              </li>
              <li key='2'>
                <a className='smoothscroll' href='#about'>
                  About
                </a>
              </li>
              {/* <li key="3">
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li> */}
              <li key='4'>
                <a className='smoothscroll' href='#portfolio'>
                  Projects
                </a>
              </li>
              <li key='5'>
                <a className='smoothscroll' href='#testimonials'>
                  Testimonials
                </a>
              </li>
              <li key='6'>
                <a className='smoothscroll' href='#contact'>
                  Contact
                </a>
              </li>
            </FlipMove>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>I'm {name}.</h1>
            <h3>
              I'm a {city} based <span>{occupation}</span>. {description}
            </h3>
            <hr />
            <ul className='social'>{networks}</ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    )
  }
}

export default Header
