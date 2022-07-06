import { React, useState } from 'react';

export const PostForm = (props) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) => {
        e.preventDefault() // предотвращается обновление страницы тэгом form

        const newPost = {
            ...post, id: Date.now()
        }

        props.createPost(newPost)
        setPost({
            title: '',
            body: ''
        })
    }

    return (
        <form className='containerForm'>
            {/* управляемый компонент */}
            <input 
                className='inputForm'
                type={'text'}
                placeholder={'Название поста'}
                
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />

            <input 
                className='inputForm'
                type={'text'}
                placeholder={'Описание'}

                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
        
            <button 
                className='btnForm'
                onClick={(e) => addNewPost(e)}
            >Добавить пост</button>
        </form>
    )
}