import React, {useState} from 'react';
import axios from 'axios';

const AuthorForm = (props) => {
    const [authorName, setAuthorName] = useState([]);

    const onSubmithandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author', {
            authorName
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return(
        <form onSubmit={onSubmithandler}>
            <p>
                <label>Please type in a valid author: </label><br/>
                <input type="text" onChange={(e) => setAuthorName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default AuthorForm;

