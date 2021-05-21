import UpdateAuthor from '../components/UpdateAuthor';
import React from 'react';

const AuthorPage = (props) => {


    return(
        <div>
            <UpdateAuthor id={props.id}/>
        </div>
    )
}

export default AuthorPage;




