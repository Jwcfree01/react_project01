import { useState } from 'react';
interface CarInfo {
  title: string;
  handleChange: (e: { target: { value: string } }, value: string) => void;
  name: string;
  handleMessageErr: any; 
  nameErr?:string;
}

export const LabelAndInput = (props:CarInfo) => {
  return (
    <>
      <label htmlFor="carName">{props.title}</label>
      <input
        type="text"
        className="form-control modal-input"
        id="carName"
        placeholder={props.title}
        name={props.name}
        // value={props.name}
        onChange={(e) => props.handleChange(e, props.name)}
        />
        <span className="error">{props.nameErr ? props.handleMessageErr[props.nameErr]:""}</span>
    </>
  );
};
