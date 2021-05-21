import React, {useState} from 'react';
import axios from 'axios';

const AuthorForm = (props) => {
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState([])


    const onSubmithandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            authorName
        })
            .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errArr = []
                for(const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
            })
            
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

