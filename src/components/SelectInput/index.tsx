import React, { useEffect } from 'react'
import Props from './types'
import {Thread} from  '../../FormInput'

/**
 *  =====================
 *      RADIO BUTTONS
 *  =====================
 */
const SelectInput: React.FC<Props> = (props) => {

    useEffect(() => {
        
        if(!props.value)
            return

        /* Radio button element */
        let element: HTMLInputElement

        switch (props.value) {
            case Thread.Low:
                element =  document.getElementById('low-thread') as HTMLInputElement
                break;
        
            case Thread.Medium:
                element = document.getElementById('medium-thread') as HTMLInputElement
                break;
            
            case Thread.High:
                element = document.getElementById('high-thread') as HTMLInputElement
                break
        }

        if(element)
            element.checked = true

    })

    return (
        <>
            <h1 style={{fontSize: '1.6rem', marginBottom: '40px'}}>What level of <span className='input-title'>{props.name}</span> are you reporting?</h1>
            <div id='thread-levels'>
                <div className="form-check">
                    <input id='low-thread' type="radio" name={props.name} value={Thread.Low} onChange={props.handleUpdate} />
                    <label>Low</label>
                </div>
                <div className="form-check">
                    <input id='medium-thread' type="radio" name={props.name} value={Thread.Medium} onChange={props.handleUpdate} />
                    <label>Medium</label>
                </div>
                
                <div className="form-check">
                    <input id='high-thread' type="radio" name={props.name} value={Thread.High} onChange={props.handleUpdate} />
                    <label>High</label>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{paddingTop: '20px'}}>
                <button className="btn btn-primary" onClick={props.handlePrevious} >Previous</button>
                <button className="btn btn-primary" disabled={!props.submit} onClick={props.handleNext}>Next</button> 
            </div>   
        </>
    )
}

export default SelectInput