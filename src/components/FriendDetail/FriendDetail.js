import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] =useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(response => response.json())
        .then(data =>setFriend(data));
    },[])
    return (
        <div>
            <h3>Here Friend Detail of {friendId}</h3>
            <p>Email : {friend.email}</p>
            <p>Phone : {friend.phone}</p>
            <p>Website : {friend.website}</p>
        </div>
    );
};

export default FriendDetail;