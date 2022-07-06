import { React } from 'react';
import cl from './Loader.module.css'

export const Loader = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '100px 0 0 0' }}>
            <div className={cl.loader}></div>
        </div>
    )
}