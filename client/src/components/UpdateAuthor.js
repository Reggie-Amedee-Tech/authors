import axios from 'axios';
import React, {useState} from 'react';

const UpdateAuthor = (props) => {
    const[authorName, setAuthorName] = useState([])
    const {id} = props;

    const updateHandler = (e) => {
        e.preventDefault();

        axios('http://localhost:8000/api/author/' + id, {
            authorName
        })
            .then(res => console.log(res));

    }


    return (
        <form onSubmit={updateHandler}>
            <p>
                <label>Please type in a valid author: </label><br/>
                <input type="text" onChange={(e) => setAuthorName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default UpdateAuthor;