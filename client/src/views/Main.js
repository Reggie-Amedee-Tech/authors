

import { navigate } from '@reach/router';
import axios from 'axios';
import { useState } from 'react';
import AuthorForm from '../components/AuthorForm';


const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([])

    const createAuthor = (author) => {
        axios.post('http://localhost:8000/api/author', author)
            .then(res => {
                setAuthors([...authors, res.data])
                navigate('./list')

            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errArr = []
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr)
            }
            )
    }




    return (
        <div>
            <AuthorForm createAuthor={createAuthor} initialAuthorName="" errors={errors} />
        </div>

    )
}

export default Main;
