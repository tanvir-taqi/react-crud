import React, { useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {

    const [title, setTitle] = useState("");
    const [userID, setUserID] = useState("");
    const [post, setPost] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const postData = JSON.parse(localStorage.getItem('postData')) || [];
        const lastPost = postData[postData.length - 1];
        const newId = lastPost ? lastPost.id + 1 : 1;
        const newPost = { id: newId, title, userId: userID, body: post };
        const updatedPosts = [...postData, newPost];
        localStorage.setItem('postData', JSON.stringify(updatedPosts));
        setTitle("");
        setUserID("");
        setPost("");
        window.location.reload();
      };
      

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-[1fr,3fr]'>
                <div className=' md:py-20  flex flex-col w-full md:h-screen justify-center items-center  relative'>
                    <h1 className='text-3xl font-bold font-mono my-6 mx-4'>Add Posts</h1>
                    <div className='w-full'>
                        <form onSubmit={handleSubmit} className="w-full px-6">
                            <div className="mb-4">
                                <label htmlFor="title" className="block font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                    className="my-1 outline-none border-4 duration-1000 border-black border-r-0 focus:border-r-4 focus:w-full w-1/2 py-1 px-3 focus:rounded-xl"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="userID" className="block font-medium text-gray-700">UserID</label>
                                <input
                                    type="text"
                                    id="userID"
                                    name="userID"
                                    value={userID}
                                    onChange={(event) => setUserID(event.target.value)}
                                    className="my-1 outline-none border-4 duration-1000 border-black border-r-0 focus:border-r-4 focus:w-full w-1/2 py-1 px-3 focus:rounded-xl"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="post" className="block font-medium text-gray-700">Post</label>
                                <textarea
                                    id="post"
                                    name="post"
                                    value={post}
                                    onChange={(event) => setPost(event.target.value)}
                                    className="my-1 outline-none border-4 duration-1000 border-black border-r-0 focus:border-r-4 focus:w-full w-1/2 py-1 px-3 focus:rounded-xl"
                                />
                            </div>
                            <button type="submit" className="my-1 outline-none border-4 duration-700 border-black w-1/3 hover:bg-black hover:text-white  py-1 px-3 hover:rounded-xl">Add A Post</button>
                        </form>
                    </div>
                </div>

                <div>
                    <Posts></Posts>
                </div>
            </div>
        </div>
    );
};

export default Home;










