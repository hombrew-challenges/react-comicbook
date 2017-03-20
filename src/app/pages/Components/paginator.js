import React from 'react'
import {Pagination} from 'react-bootstrap'

export default function Paginator({itemsPerPage, total, limit, offset, ...props}) {
  const pages = Math.ceil(total / limit)
  const page = (offset / limit) + 1
  return (
    <Pagination
      className="paginator"
      prev
      next
      ellipsis
      boundaryLinks
      maxButtons={5}
      items={pages}
      activePage={page}
      {...props}/>
  )
}