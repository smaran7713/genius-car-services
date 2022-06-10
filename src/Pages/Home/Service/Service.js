import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price, id} = service;
    const navigat = useNavigate();
    const navigateToServiceDetail = id =>{
        navigat(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt=''></img>
            <h2>{name}</h2>
            <p>{price}</p>
            <p> <small>{description}</small></p>
            <button onClick={ ()=>navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;