import React, { useEffect, useState } from 'react';
import './App.css';
import FormInput, {Thread} from './FormInput'
import InputContainer from './components/InputContainer'
import TextInput from './components/TextInput'
import SelectInput from './components/SelectInput'
import Preview from './components/Preview'
import 'aos/dist/aos.css'
import AOS from 'aos'

/**
 *  ==========================
 *          HOMEPAGE
 *  ==========================
 * 
 *  It'll work as a container for every input field
 */
const App = () => {

  /* Control the state of the app -> What fields to show */
  const [state, setState] = useState(0)

  /* Can submit input */
  const [submit, setSubmit] = useState(false)

  /* Store the inputs of the component */
  const [input, setInput] = useState<FormInput>({ name: '', email: '', thread: null })

  /* Handle state updates */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    /* Update the state firstly */
    setInput({...input , [e.target.name]: e.target.value})

    /** 
     *  =========================
     *        VALIDATION
     *  =========================
    */
    
    /* Validate name */
    if(e.target.name === 'name' && e.target.value.length > 2 && e.target.value.length < 25)
      setSubmit(true)

    /* Validate email */
    else if(e.target.name === 'email' && e.target.value.match(/\S+@\S+\.\S+/))
      setSubmit(true)

    /* Validate thread */
    else if(e.target.name === 'thread' && e.target.value)
      setSubmit(true)

    else
      setSubmit(false)
  }

  /* Handle submit button updates */
  const onNext = () => {
    setState(state+1)
  }

  const onPrevious = () => {
    setState(state-1)
  }

  useEffect(() => {
    AOS.init()
  })
  /**
   *  =========================
   *        INPUT NAME
   *  =========================
   */
  if(state === 0){

    /* Disable next button when no name has been provided */
    !input.name && submit && setSubmit(false)

    return (
      <InputContainer>
        <TextInput message='A valid name has between 2 and 25 characters' handleUpdate={handleChange} value={input.name} name='name' submit={submit} handleNext={onNext} />
      </InputContainer>
    )
  }

  /**
   *  =========================
   *         INPUT EMAIL
   *  =========================
   */
  if(state === 1){

    /* Disable next button when no email has been provided */
    !input.email && submit && setSubmit(false)
    input.email.match(/\S+@\S+\.\S+/) && !submit && setSubmit(true)

    return(
      <InputContainer>
        <TextInput handleUpdate={handleChange} value={input.email} name='email' submit={submit} handleNext={onNext} />
      </InputContainer>
    )
  }

  /**
   *  =========================
   *        THREAT LEVEL
   *  =========================
   */
  if(state === 2){

    !input.thread && submit && setSubmit(false)

    return (
      <InputContainer>
        <SelectInput value={input.thread} name="thread" handleUpdate={handleChange} submit={submit} handleNext={onNext} handlePrevious={onPrevious} />
      </InputContainer>
    )
  }

  return (
    <InputContainer>
      <Preview back={setState} input={input} />
    </InputContainer>
  )

}

export default App;
