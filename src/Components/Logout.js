import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    // useCallback to memoize adminLogout function
    const adminLogout = useCallback(async () => {
        const token = localStorage.getItem('token');
        console.log('===>' + token);
        try {
            const res = await fetch('/logoutUser', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "auth": token
                })
            });

            const data = await res.json();
            if (res.status === 200) {
                setShow(true);
                localStorage.removeItem('token');
                alert('Successfully Logout');
                navigate('/login', { replace: true });
                window.location.reload();
            } else {
                alert(data.message || 'Something went wrong!');
            }
        } catch (error) {
            console.log(error);
        }
    }, [navigate]);  // Added navigate to dependencies

    useEffect(() => {
        const confirmBox = window.confirm("Do you really want to Logout?");
        if (confirmBox) {
            adminLogout();
        } else {
            navigate('/');  // Updated navigation
        }
    }, [adminLogout, navigate]);  // Added adminLogout to dependencies

    return (
        <div>
            <h1>{show ? 'Logout Successfully!' : 'Processing...'}</h1>
        </div>
    );
};

export default Logout;
