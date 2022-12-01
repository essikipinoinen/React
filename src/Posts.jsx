import React, { useState, useEffect } from 'react'
import './App.css'

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(oliot => setPosts(oliot))
    }, []
    )

    return (
        <>
            <h2>Posts from Typicode</h2>

            {
                posts && posts.map(p =>
                    <div className='posts' key={p.id}>
                        <h4>Käyttäjä: {p.userId}</h4>
                        <h3>Postaus {p.id}: {p.title}</h3>
                        <p>{p.body}</p>
                        <br />
                    </div >
                )
            }
        </>
    )
}

export default Posts
