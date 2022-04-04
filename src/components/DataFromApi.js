import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Data() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            await axios.get(`https://randomuser.me/api`)
            .then(res => {
            setData(res.data);
            setLoading(false);
            }, (err) => {
            console.err('There is an error: ', error);
            setError(err);
            })    
        } catch (err) {
            console.log(err);
        }
    }

    if (loading) return 'Loading...'
    if (error) return 'Error!'

    return (
        <>
            <div>
                {JSON.stringify(data, null, 2)}
            </div>
            <div>
                {data.results[0].name.first}
            </div>
            <div>
                <ul>
                {data.results.map((data, index) => {
                    return(
                        <li key={index}>
                            {data.name.first}
                            <img src={data.picture.large} alt='Person Picture'></img>
                        </li>
                    )
                })}
                </ul>
            </div>
            
        </>
    );
}