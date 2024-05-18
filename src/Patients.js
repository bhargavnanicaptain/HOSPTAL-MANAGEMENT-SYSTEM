import React, { useState } from 'react';
import axios from 'axios';
const PatientForm = () => {
    const [PatientData, setPatientData] = useState({
        name: '',
        weight: '',
        gender: '',
        age: '',
        disease: '',
        doctorId: null,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData({ ...PatientData, [name]: value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://backendhospital-ji3g.onrender.com/patients', PatientData);
            console.log('patient created: ', response.data);
        } catch (error) {
            console.error('Error creating patient :', error);
        }
    };
    return (
        <>
            <style>{`
        .formy input{
            padding : 3px;
            margin-top:1%;
            margin-left:1%;

        }
        .formy label{
            font-weight:bold;
        }
        .btn1{
            background-color:skyblue;
            border:none;
            border-radius:25px;
            margin-top:2%;
            color:black;
            width:250px;
            padding:2px;

            
        }
        `}</style>
            <center>
                <div>
                    <h2>Create New Patient</h2>
                    <form onSubmit={handleSubmit} className='formy'>
                        <label>
                            Name:
                            <input type='text' name='name' value={PatientData.name} onChange={handleChange} required />
                        </label><br />
                        <label>
                            Weight:
                            <input type='text' name='weight' value={PatientData.weight} onChange={handleChange} required />
                        </label><br />
                        <label>
                            Gender :
                            <input type='text' name='gender' value={PatientData.gender} onChange={handleChange} required />

                        </label><br />
                        <label>
                            Age:
                            <input type='text' name='age' value={PatientData.age} onChange={handleChange} required />
                        </label><br />
                        <label>
                            Disease:
                            <input type='text' name='disease' value={PatientData.disease} onChange={handleChange} required />
                        </label><br />
                        <label>
                            Mobile Number:
                            <input type='text' name='phone' value={PatientData.phone} onChange={handleChange} required />
                        </label><br />
                        <label>
                            Doctor ID :
                            <input type='text' name='doctorId' value={PatientData.doctorId} onChange={handleChange} required />
                        </label><br />
                        <button type='sumbit' className='btn1'>Create Patient</button>
                    </form>
                </div>
            </center>
        </>
    )

};
export default PatientForm;