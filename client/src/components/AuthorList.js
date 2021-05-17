import axios from 'axios';
import React, { useEffect, useState } from 'react';


const AuthorList = (props) => {
    const {authorName, setAuthorName} = props;
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res=>{
            setAuthorName(res.data)
            setLoaded(true)

        })
    }, []);

    return(
        <div>
        {props.authorName.map((author, i) => {
            return <p key={i}>{author.authorName}</p>
        })}
        </div>
    )
}

export default AuthorList;