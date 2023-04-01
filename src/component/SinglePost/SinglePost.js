import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SinglePost = ({ post, handleEdit, setNewBodyText, newBodyText, handleDelete,index }) => {
    const [editField, setEditField] = useState(false)
    const [deletefield, setdeletefield] = useState(false)


    return (
        <div className=" p-6 rounded-lg shadow-lg shadow-gray-500 bg-slate-50 mb-8">
            <h2 className="text-2xl font-bold mb-4">{index + 1}. {post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
            <div className="flex items-center space-x-4 my-3">
                <button onClick={() => setEditField(!editField)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <FaEdit />
                </button>
                <button onClick={() => setdeletefield(!deletefield)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <FaTrash />
                </button>
            </div>
            {
                deletefield && <div className='flex flex-col bg-slate-900 md:w-1/3 w-full p-4 text-white'>

                    <h1>Are you sure you want to delete this post?</h1>
                    <div className='flex items-center justify-around'>
                        <button onClick={()=>handleDelete(post.id)} className='py-1 px-3 bg-red-500 font-bold rounded-md'>Yes</button>
                        <button onClick={() => setdeletefield(false)} className='py-1 px-3 bg-blue-500 font-bold rounded-md'>No</button>
                    </div>
                </div>
            }
            {
                editField && <div className='flex flex-col'>

                    <textarea required onChange={(event) => setNewBodyText(event.target.value)} name="newBody" id="" cols="10" rows="5" placeholder={post.body} className='border border-zinc-950 p-4'></textarea>
                    <button onClick={() => handleEdit(post.id, newBodyText)} className='my-3 w-[200px] bg-gray-700 text-white py-1 rounded-lg border-4 duration-500 border-black hover:bg-transparent hover:text-black'>Save post body</button>
                </div>
            }
        </div>
    );
};

export default SinglePost;
