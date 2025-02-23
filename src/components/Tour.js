import React from 'react'

const Tour = ({img, title, date, icon, location, days, cost, info}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}
        </p>
        <div className="tour-footer">
          <p>
            <span><i className={icon}></i></span> {location}
          </p>
          <p>{days} days</p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour
