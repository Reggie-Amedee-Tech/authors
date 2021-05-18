import React, {useState} from 'react';
import AuthorList from '../components/AuthorList'

const ListOfAuthors = (props) => {
const {authorName, setAuthorName} = props;
    return(
        <div>
            <AuthorList authorName={authorName} setAuthorName={setAuthorName}/>
        </div>

    )
}

export default ListOfAuthors;