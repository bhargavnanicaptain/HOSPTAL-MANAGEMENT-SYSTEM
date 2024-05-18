import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <style>{`
            *{
                font-family:Times New Roman;
            }
        
        a{
            color:white;
            text-decoration:none;

        }
        a:hover{
            color:yellow;
            background-color:black;
        }
        .navbar {
            background-color: #333;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        #logo {
            color: white;
            text-decoration: none;
            font-size: 24px;
        }
        
        .nav-link {
            color: white;
            text-decoration: none;
            margin-left: 20px;
        }
        
        .nav-link:hover {
            text-decoration: underline;
        }
        
        `}</style>
            <nav className='navbar'>
                <a id='logo'>TRUE <span>CARE +</span></a>
                <Link to="/">Home</Link>
                <Link to="/doctor">Doctor</Link>
                <Link to="/patients">Patients</Link>

            </nav>
        </>
    )
}