import React,{useState} from "react";
import "./contact.css";
import { Radio } from 'antd';
// import 'antd/dist/antd.css';



const options = [
    {
      label: 'Apple',
      value: 'Apple',
    },
    {
      label: 'Pear',
      value: 'Pear',
    },
    {
      label: 'Orange',
      value: 'Orange',
    },
  ];

export default function Contact(){
 
    const [value1, setValue1] = useState('Apple');
    const [value2, setValue2] = useState('Apple');
    const [value3, setValue3] = useState('Apple');
    const [value4, setValue4] = useState('Apple');
  
    const onChange1 = ({ target: { value } }) => {
      console.log('radio1 checked', value);
      setValue1(value);
    };
  
    const onChange2 = ({ target: { value } }) => {
      console.log('radio2 checked', value);
      setValue2(value);
    };
  
    const onChange3 = ({ target: { value } }) => {
      console.log('radio3 checked', value);
      setValue3(value);
    };
  
    const onChange4 = ({ target: { value } }) => {
      console.log('radio4 checked', value);
      setValue4(value);
    };



    return(
        <>
            <div className="contact--section">
                <div className="contact--infor">
                    <h2>Contact</h2>
                    <h3><span>Let</span> Us Chat</h3>
                    <h4>fill up the form and I’ll get back to you</h4>
                    <a href="#">nkosinathi@nathingele.com</a><br></br>
                    <a href="#">+27 73 695 4921</a>
 
                </div> 
                <div>
                    <form className="form">
                        <label>Name</label>
                        <input type={"text"}/>
                        <label>Email</label>
                        <input type={"email"}/>
                        <label>Specify Topic</label>
                        <div className="more--btn">

                        </div>
                        <br />
      <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" buttonStyle="solid" />
      <br />
                    </form>
                </div>
            </div>
        </>
    )
}