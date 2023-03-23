//import React from 'react'
import { useParams } from 'react-router-dom';
import Picture from '../UI/Picture';

export const Blog = () => {
  const params = useParams();
  return (
    <div className='blog'>
      <Picture src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}></Picture>

    </div>
  )
}

export default Blog