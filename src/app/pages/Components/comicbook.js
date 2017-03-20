import React, {PropTypes} from 'react'

export default function ComicBook({img, label, onClick}) {
  return (
    <div className="comicbook text-center margin-bottom-20" onClick={onClick}>
      <img className="margin-bottom-10" src={img} alt={label}/>
      <label>{label}</label>
    </div>
  )
}

ComicBook.propTypes = {
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}