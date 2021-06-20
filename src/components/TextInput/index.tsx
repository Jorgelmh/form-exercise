import React, { useEffect } from 'react'
import Props from './types'

/**
 *  =======================
 *       TEXT FIELD
 *  =======================
 */

const TextInput: React.FC<Props> = (props) => {

    return (
        <>
            <h1 style={{marginTop: 0, fontSize: '2.4rem'}}>What is your <span className='input-title'>{props.name}</span>?</h1>
            <div className='d-flex justify-content-between' style={{paddingTop: '40px'}}>
                <input name={props.name} type='text' onChange={props.handleUpdate} value={props.value} />
                <button className="btn btn-primary" disabled={!props.submit} onClick={props.handleNext}>Next</button>
            </div>
            {props.message && <p style={{fontSize: '.8rem', paddingTop: '15px', margin: 0}}>{props.message}</p>}
        </>
    )
}

export default TextInput