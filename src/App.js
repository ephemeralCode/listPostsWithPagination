import { React, useState, useEffect } from 'react';

import { PostList } from './components/PostList';
import { PostFilter } from './components/PostFilter';
import { ModalWindow } from './components/ModalWindow';

import './App.css';

import PostService from './API/PostService';
import { usePosts } from './customHooks/usePosts';
import { Loader } from './components/UI/Loader/Loader';
import { useFetching } from './customHooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';

export default function App() {
    const [posts, setPosts] = useState([])
    const [filterPost, setFilterPost] = useState({
        sort: '',
        query: ''
    })
    const [modalActive, setModalActive] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limitPosts, setLimitPosts] = useState(10)
    const [pagePosts, setPagePosts] = useState(1)
    let pagesArray = getPagesArray(totalPages)

    // customHook
    const sortedAndSeacthedPosts = usePosts(posts, filterPost.sort, filterPost.query)
    // axios & customHook
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const responce = await PostService.getAll(limitPosts, pagePosts)
        setPosts(responce.data)

        const totalCount = responce.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limitPosts))
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalActive(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    const changePage = (page) => {
        setPagePosts(page)
    }

    useEffect(() => {
        fetchPosts()
    }, [pagePosts])

    return (
        <div className='App'>
            <button
                onClick={() => setModalActive(true)}
            >Создать пост</button>

            <ModalWindow 
                modalActive={modalActive}
                setModalActive={setModalActive}
                createPost={createPost}
            />

            <hr style={{ margin: '15px 0' }} />

            <PostFilter 
                filterPost={filterPost}
                setFilterPost={setFilterPost}
            />

            {
                postError &&
                    <p>Произошла ошибка ${postError}</p>
            }
            
            {
                isPostsLoading ?
                    <Loader />

                    :

                    sortedAndSeacthedPosts.length ? 
                        <PostList 
                            posts={sortedAndSeacthedPosts}
                            title={'Список постов'}
                            removePost={removePost}
                        />

                        :

                        <p>Посты не найдены</p>

            }

            <div className='containerPagination'>
                {
                    pagesArray.map(p => 
                        <button 
                            className={`${pagePosts === p ? 'btnPagination active' : 'btnPagination'}`}
                            key={p}
                            onClick={() => changePage(p)}
                        >{p}</button>
                    )
                }
            </div>
        </div>
    )
}