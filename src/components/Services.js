import React from 'react'
import Title from './Title'
import { ServicesData } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">

        {ServicesData.map((service) => {
          return <Service {...service} key={service.id}/>
        })}

      </div>
    </section>

  )
}

export default Services
