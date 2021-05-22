import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const AuthorForm = (props) => {
    const [authorName, setAuthorName] = useState("");
    const {createAuthor, initialAuthorName, errors} = props;


    const onSubmithandler = (e) => {
        e.preventDefault();
        createAuthor({authorName})
    }
    return (
        <form onSubmit={onSubmithandler}>
        {errors.map((err, i) => <p key={i}>{err}</p>)}
            <h1>Favorite Authors</h1>
            <div>
                <p>
                    <label>Please type in a valid author: </label><br />
                    <input type="text" onChange={(e) => setAuthorName(e.target.value)} value={authorName}/>
                </p>
            </div>
            <input type="submit"/>
        </form>
    )
}

export default AuthorForm;

