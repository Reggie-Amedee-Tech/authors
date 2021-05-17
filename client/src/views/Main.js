import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm'
import AuthorList from '../components/AuthorList'

const Main = (props) => {
    const [loaded, setLoaded] = useState(false);
    const {authorName, setAuthorName} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res=>{
            setAuthorName(res.data)
            setLoaded(true)
        })
    })
    
    return (
        <div>
            <AuthorForm authorName={authorName} setAuthorName={setAuthorName}/>
            { loaded && <AuthorList authorName={authorName} setAuthorName={setAuthorName}/>}
        </div>

    )
}

export default Main;
