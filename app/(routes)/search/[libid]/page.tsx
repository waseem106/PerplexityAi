'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function SearchQueryResult() {
    const data=useParams()
    console.log("params data in search page",data.libid)
  return (
    <div>
      Search Query Result
    {/* {data} */}
    </div>
  )
}

export default SearchQueryResult
