import React,{useState,useEffect,useContext}from 'react';
import { Context } from '../../Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState({})
  const {postDetails}=useContext(PostContext)
  const {firebase} =useContext(Context)
  
  useEffect(() => {
    const { userId } = postDetails
    
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
       res.forEach(doc => {
         setUserDetails(doc.data())
       });
    })
  }, [])
  console.log(userDetails)          
  
  return (
    <div className="viewParentDiv">
     <div className="imageShowDiv">
       {postDetails && <img
          src={postDetails.url}
          alt=""
        />}
      </div> 
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
