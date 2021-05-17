import React from 'react';
import AuthorForm from '../components/AuthorForm'
import AuthorList from '../components/AuthorList'

const Main = (props) => {
    
    return (
        <div>
            <AuthorForm />
            <AuthorList/>
        </div>

    )
}

export default Main;
