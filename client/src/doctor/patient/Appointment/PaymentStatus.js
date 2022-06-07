import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const PaymentStatus = () => {

    const { orderId } = useParams();
    const [values, setValues] = useState({
        success: false,
        error: false
    })

    useEffect(() => {
        getStatus();
    }, [])
    const { success, error } = values
    const getStatus = () => {
        console.log(orderId);
        setValues({ ...values, success: true, error: false })
    }


    return (
        <div>
            {
                success && <h1>Payment Succesfully</h1>
            }
            {
                error && <h1>{error}</h1>
            }
        </div>
    )
};

export default PaymentStatus
