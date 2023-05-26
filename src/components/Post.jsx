import React, { useEffect, useState } from 'react'
import SkeletonPost from '../skeletons/SkeletonPost';

export default function Post() {
  const [posts, setPosts] = useState(null)

  useEffect(()=>{
    setTimeout(async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data)
    }, 3000);
});

  return (
    <div className='articles'>
        <h2>Article</h2>
        {posts && posts.map((post)=>(
          <div className='post' key={post.id}>
            <h3>{ post.title }</h3>
            <p>{ post.body }</p>
          </div>
        ))}
        {!posts && [1,2,3].map((key)=><SkeletonPost key={key} />)}
    </div>
  )
}
