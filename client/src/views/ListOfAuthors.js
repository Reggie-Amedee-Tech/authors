import React, {useState, useEffect} from 'react';
import AuthorList from '../components/AuthorList'
import axios from 'axios';

const ListOfAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
                setLoaded(true)

            })

    });


    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author=> author._id !== authorId));
    }

    return(
        <div>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>

    )
}

export default ListOfAuthors;