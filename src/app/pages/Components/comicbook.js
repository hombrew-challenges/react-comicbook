import React, {PropTypes} from 'react'

// img
import btnDelete from '../../../assets/images/icons/btn-delete.png'

export default function ComicBook({img, label, onClick, id, onRemove}) {
  return (
    <div className="comicbook text-center margin-bottom-20">
      <img className="margin-bottom-10 cover" src={img} alt={label} onClick={onClick}/>
      <label>{label}</label>
      {onRemove && (
        <img className="delete-button" src={btnDelete} alt="delete favourite" onClick={() => onRemove(id)}/>
      )}
    </div>
  )
}

ComicBook.propTypes = {
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}