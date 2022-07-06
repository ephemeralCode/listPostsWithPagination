import { React } from 'react';

import { PostForm } from './PostForm';

export const ModalWindow = (props) => {
    return (
        <div className={`containerModalWindow ${props.modalActive && 'active'}`}>
            <div className='modalWindowContent'>
                <div className='containerBtnCloseModal'>
                    <button 
                        className='btnCloseModal'
                        onClick={() => props.setModalActive(false)}
                    >&times;</button>
                </div>
                
                <PostForm 
                    createPost={props.createPost}
                />
            </div>
        </div>
    )
}