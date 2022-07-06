import { React } from 'react';

export const PostSort = (props) => {
    return (
        <select 
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
        >
            <option 
                disabled 
                value={''}
            >{props.defaultValue}</option>

            {
                props.options.map(option => 
                    <option
                        value={option.value}
                        key={option.value}
                    >{option.name}</option>
                )
            }
        </select>
    )
}