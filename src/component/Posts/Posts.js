import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [newBodyText, setNewBodyText] = useState("")
    const [loadingUpdate, setLoadingUpdate] = useState(false)


    // fetching data and setting it to local storage
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const previousData = localStorage.getItem('postData')
                if (!previousData) {
                    localStorage.setItem('postData', JSON.stringify(data))
                }
            })
    }, [])

    // get data from local storage
    useEffect(() => {
        const postData = localStorage.getItem('postData');
        setPosts(JSON.parse(postData))
    }, [])


    // handle update data in local storage
    const handleEdit = (id, content) => {
        setLoadingUpdate(true)
        if (!content) {
            setLoadingUpdate(false)
            window.location.reload()
            return
        }
        const posts = JSON.parse(localStorage.getItem('postData')) || [];
        const index = posts.findIndex((post) => post.id === id);
        if (index !== -1) {
            posts[index].body = content;
            localStorage.setItem('postData', JSON.stringify(posts));
            setLoadingUpdate(false)
            window.location.reload()
        }
    }

    const handleDelete = (id) => {
        
        const posts = JSON.parse(localStorage.getItem('postData')) || [];
        const filteredPosts = posts.filter(post => post.id !== id);
        localStorage.setItem('postData', JSON.stringify(filteredPosts));
        setPosts(filteredPosts);
    }

    if (loadingUpdate) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='md:pt-32 py-12'>
            <h1 className='text-3xl font-bold font-mono my-6 mx-4'>Posts</h1>

            <div className='mx-12'>

                {posts.map((post,i) => <SinglePost
                    key={post.id}
                    post={post}
                    handleEdit={handleEdit}
                    setNewBodyText={setNewBodyText}
                    newBodyText={newBodyText}
                    handleDelete={handleDelete}
                    index={i}
                ></SinglePost>
                )}
            </div>
        </div>
    );
};

export default Posts;