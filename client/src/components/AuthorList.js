import { Link } from '@reach/router';
import axios from 'axios';



const AuthorList = (props) => {
const {removeFromDom} = props;

const deleteAuthor = (aid) => {
axios.delete('http://localhost:8000/api/authors/' + aid)
    .then(res=>{
        removeFromDom(aid)
    })
}

    return (
        <div>
            {props.authors.map((author, i) => {
                return <p key={i}>
                    <Link to={'/list/' + author._id + '/edit'} name={author.authorName}>{author.authorName}</Link>
                    <button onClick={(e)=> deleteAuthor(author._id)}>Delete</button>
                </p>
            })}
        </div>
    )
}

export default AuthorList;