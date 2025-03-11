import React from 'react'

const Service = () => {
  const services = [
      {
          id: 1,
          url:"/birthday.jpg",
          title:"Birthday Party",
      },
      { 
          id: 2,
          url:"anniversary.jpg",
          title:"Anniversary Party",

      },
      {
        id: 3,
        url:'/camping.jpg',
        title:"Camping",
      },
      {
        id: 4,
        url:'/corporate.jpg',
        title:"Corporate Party",
      },
      {
        id: 5,
        url:'/wedding.jpg',
        title:"Wedding Party",
      },
      {
        id: 6,
        url:'/other.jpg',
        title:"Other Events",
      }






  ];
  return <>
    <div className="services container">
      <h2>Our Services</h2>
      <div className="banner">
        {services.map(elemnt=>{
          return(
            <div className="item" key={elemnt.id}>
              <h3>{elemnt.title}</h3>
              <img src={elemnt.url} alt="" />
              </div>)
        })}</div>
    </div>
  </>
}

export default Service
