import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid, setIsValid] = useState(true);
  const[isTouched, setIsTouched] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const goalInputChangeHandler = event => {
    if(!isTouched){
      setIsTouched(true)
    }
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      setIsClicked(true);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && isTouched ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" 
        onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={`${!isValid && isClicked ? 'invalid-clicked' : ''}`}
        onClick={() => setIsClicked(true)}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
