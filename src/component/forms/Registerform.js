import React, { useState } from 'react'
import '../Allcss/Formcontrol.css'
import { Button } from 'bootstrap'

const Registerform = () => {
    const [data, setData] = useState(
        {
            Name: '',
            RaceCategory: '',
            Mobileno: '',
            RunnerCategory: '',
            EmailId: '',
            BloodGroup: '',
            AadharNumber: '',
            TshirtSize: '',
            Dateofbirth: '',
            BIBCollectionpoint: '',
            Gender: ''
        }
    )
    const [formdata,setFormdata]=useState([])
    const change = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({ ...data, [name]: value })
        console.log(name, value);

    }
    const handlesubmit=(e)=>{
    e.preventDefault();
    const newdata = {...data,id : new Date().getTime().toString()}
    setFormdata([...formdata,newdata])
    console.log(formdata);
        
    }

    return (
        <>
        <div className='formbag'>
            
            <button className='butoon1'>On Ground</button>
            <button className='butoon2'>Virtual Marathon</button>
            <form className='formcontrol' onSubmit={handlesubmit}>
                
                <input className='formcontrol1' name='Name' type='text' value={data.Name} onChange={change} placeholder='Full Name' />
                <input className='formcontrol1' name='RaceCategory' type='text' value={data.RaceCategory} onChange={change} placeholder='Race Category' /><br />
                <input className='formcontrol1' name='Mobileno' type='text' onChange={change} value={data.Mobileno} placeholder='Mobile Number' />
                <input className='formcontrol1' name='RunnerCategory' type='text' onChange={change} value={data.RunnerCategory} placeholder='Runner Category' /><br />
             <input type='email' className='formcontrol1' name='EmailId' onChange={change} value={data.EmailId} placeholder='Email Id'/>
             <input type='text' className='formcontrol1' name='BloodGroup' onChange={change} value={data.BloodGroup} placeholder='Blood Group'/><br/>
             <input type='text' className='formcontrol1' name='AadharNumber' onChange={change} value={data.AadharNumber} placeholder='Aadhar Number'/>
             <input type='text' className='formcontrol1' name='TshirtSize' onChange={change} value={data.TshirtSize} placeholder='T Shirt Size'/><br/>
             <input type='text' className='formcontrol1' name='Dateofbirth' onChange={change} value={data.Dateofbirth} placeholder='Date Of Birth'/>
             <input type='text' className='formcontrol1' name='BIBCollectionpoint' onChange={change} value={data.BIBCollectionpoint} placeholder='BIBCollectionpoint'/><br/>
             <input type='text' className='formcontrol1' name='Gender' onChange={change} value={data.Gender} placeholder='Gender'/><br/>
             <button className='formcontrol2'>Register</button>
            </form>
            </div>
        </>
    )
}

export default Registerform