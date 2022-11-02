import React from 'react'


const AllRides = ({key, name, image3}) => {
  
  function reveal() {
    let reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight
      let elementTop = reveals[i].getBoundingClientRect().top
      let elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }

  window.addEventListener('scroll', reveal)



  return (
      <div className='rides-container reveal' key={key}>
          <h3 className='rides-names'>{name}</h3>
          <img src={image3} alt={name} className='rides-images' width="1000px" height="600px"/>
      </div>
  )
}

export default AllRides
