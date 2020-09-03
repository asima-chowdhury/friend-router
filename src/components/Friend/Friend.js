import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url =`/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            {/* <p>ID : <Link to={`friend/${id}`}>Show details of id {id}</Link></p> */}
            {/* <Link to={`friend/${id}`}>
                <button>Show details of id {id}</button>
            </Link> */}
             {/* <Link to={`friend/${id}`}>
                <div>
                    <h4>Show details of id {id}</h4>
                    <p>click me</p>
                </div>
             </Link> */}
            <Link to={`friend/${id}`}>Show details of id {id}</Link>
            <br/>
            <button onClick={()=> handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;