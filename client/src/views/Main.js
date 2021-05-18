import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm'
import AuthorList from '../components/AuthorList'

const Main = (props) => {
    
    const {authorName, setAuthorName} = props;

    
    
    return (
        <div>
            <AuthorForm authorName={authorName} setAuthorName={setAuthorName}/>
            
        </div>

    )
}

export default Main;
