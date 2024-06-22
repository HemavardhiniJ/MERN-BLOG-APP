import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"
import { Comment } from "../components/Comment"
import { useParams } from "react-router-dom"
import axios from "axios"
import {URL,IF} from "../url"
import { useEffect, useState } from "react"


export const PostDetails = () => {

  const postId=useParams().id  
  const [post,setPost]=useState({})
  const fetchPost=async()=>{
    try{
        const res=await axios.get(URL+"/api/posts/"+postId)
        // console.log(res.data)
        setPost(res.data)
      }
    catch(err){
      console.log(err)
    }
  }
 
  useEffect(()=>{
   fetchPost()
  },[postId])
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8" >
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl"> {post.title}</h1>
            <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p ><MdDelete/></p>
            </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
         <p>@{post.username}</p>
          <div className="flex space-x-2 ">
            <p>16/06/2023  </p>
            <p>16:45</p>
          </div>
        </div>
        <img src={post.photo} alt="img" />
        <p className="mx-auto mt-8">{post.desc}</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
        <p>Categories:</p>
        <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
        </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
           {/* comments */}
            {/* <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
    <div className="flex items-center justify-between">
    <h3 className="font-bold text-gray-600">@hemadev</h3>
    <div className="flex justify-center items-center space-x-4">
        <p className="text-gray-500 text-sm">16/06/2023</p>
        <p className="text-gray-500 text-sm">16:45</p>
    <div className="flex items-center justify-center space-x-2">
        <p><BiEdit/></p>
        <p><MdDelete/></p>
    </div>
    </div>
    </div>
    <p className="px-4 mt-2">Nice Information</p>
    </div> */}

      {/* comments */}
      {/* <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
    <div className="flex items-center justify-between">
    <h3 className="font-bold text-gray-600">@hemadev</h3>
    <div className="flex justify-center items-center space-x-4">
        <p className="text-gray-500 text-sm">16/06/2023</p>
        <p className="text-gray-500 text-sm">16:45</p>
    <div className="flex items-center justify-center space-x-2">
        <p><BiEdit/></p>
        <p><MdDelete/></p>
    </div>
    </div>
    </div>
    <p className="px-4 mt-2">Nice Information</p>
    </div> */}
    <Comment/>
    <Comment/>
           
    </div>  
        {/* write a comment */}
        <div className="flex flex-col mt-4 md:flex-row">
            <input placeholder="Write a comment"className="md:w-[90%] outline-none px-4 mt-4 md:mt-0" type="text" />
            <button className="bg-black text-white px-5 py-2 md:w-[20%] mt-4 md:mt-0 ">Add comment</button>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
// export default PostDetails




