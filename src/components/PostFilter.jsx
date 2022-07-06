import { React } from 'react';

import { PostSort } from './PostSort';

export const PostFilter = (props) => {
    return (
        <div>
            <input 
                value={props.filterPost.query}
                onChange={e => props.setFilterPost({...props.filterPost, query: e.target.value})}
                placeholder={'Search...'}
            />
            
            <PostSort 
                value={props.filterPost.sort}
                onChange={selectedSort => props.setFilterPost({...props.filterPost, sort: selectedSort})}
                defaultValue={'Сортировка'}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    )
}