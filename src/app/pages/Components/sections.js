import React, {PropTypes} from 'react'

export function SectionTitle({img, label}) {
  return (
    <div className="section-title margin-bottom-20">
      <img className="margin-right-15" src={img} alt={label}/>
      <label>{label}</label>
    </div>
  )
}

SectionTitle.propTypes = {
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}