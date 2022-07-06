import { React } from 'react';

export const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='postContent'>
                <p>{props.post.id}. {props.post.title}</p>

                <p>{props.post.body}</p>
            </div>

            <button 
                onClick={() => props.removePost(props.post)}
            >Удалить</button>
        </div>
    )
  
}