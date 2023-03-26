//import React from 'react'
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import BlogsStore, { SizeType } from '../store/BlogsStore';
import Picture from '../UI/Picture';

export const Blog = observer(() => {
  const params = useParams();
  if (!params.id) {
    return <h1>Ошибка</h1>
  }
  const blog = BlogsStore.getSelectedBlog(+params.id)
  if (!blog) {
    return <h1>Ошибка</h1>
  }
  return (
    <div className='blog'>

      <Picture src={BlogsStore.getItemImage(blog.attachments[0], 1080)}></Picture>
      <p>{blog.text}</p>
      {blog.attachments.map((image, index) => {
        if (index === 0) return null
        if (image.type === 'photo') {
          return (

            <Picture src={BlogsStore.getItemImage(blog.attachments[index], 1080)}></Picture>

          )
        }
        if (image.type === 'video') {
          return (
            <a href={`https://vk.com/video${BlogsStore.ownerId}_${image.video?.id}`}> <Picture src={image.video?.first_frame[0].url}/> </a>
           
          )
        }
      })}

    </div>
  )
})

export default Blog