import axios from 'axios';
import React, { useState } from 'react';
import { navigate } from '@reach/router';


const UpdateAuthor = (props) => {
    const [authorName, setAuthorName] = useState('')
    const [errors, setErrors] = useState([]);
    const { id } = props;

    const updateHandler = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/author/' + id, {
            authorName
        })
            .then(res => {
                navigate('/list')
                console.log(res)
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errArr = []
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
            })

    }




    return (
        <form onSubmit={updateHandler}>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
            <p>
                <label>Update Author Name: </label><br />
                <input type="text" onChange={(e) => setAuthorName(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default UpdateAuthor;