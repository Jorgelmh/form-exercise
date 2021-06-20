import React, { useEffect } from 'react'
import Props from './types'

const Preview: React.FC<Props> = (props) => {

    return (
        <>
            <h1 className='input-title' style={{marginBottom: '40px'}}>Preview</h1>
            <div className='d-flex justify-content-between preview-input'>
                <p><span className='input-title'>Name: </span> {props.input.name}</p>
                <button className='btn btn-primary' onClick={() => props.back(0)}><i className="fas fa-wrench"></i></button>
            </div>
            <div  className='d-flex justify-content-between preview-input'>
                <p><span className='input-title'>Email: </span> {props.input.email}</p>
                <button className='btn btn-primary' onClick={() => props.back(1)}><i className="fas fa-wrench"></i></button>
            </div>
            <div className='d-flex justify-content-between preview-input'>
                <p><span className='input-title'>Thread: </span> {props.input.thread}</p>
                <button className='btn btn-primary' onClick={() => props.back(2)}><i className="fas fa-wrench"></i></button>
            </div>
        </>
    )
}

export default Preview