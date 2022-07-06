import { React } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { PostItem } from './PostItem';

export const PostList = (props) => {
    return (
        <div className='containerPosts'>
            <p>{props.title}</p>

            <TransitionGroup>
                {
                    props.posts.map((item, i) => 
                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            classNames={'post'}
                        >
                            <PostItem 
                                number={i + 1}
                                post={item}
                                key={item.id}

                                removePost={props.removePost}
                            />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    )
}