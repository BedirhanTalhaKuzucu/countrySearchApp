import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getDetailData } from '../helper/apiRequest';
import Card from 'react-bootstrap/Card';

function Details() {

    const [detailsData, setdetailsData] = useState()
    const { id } = useParams();

    useEffect(() => {
        getDetailData(id, setdetailsData)
    }, [])


    return (
        <div  className='details' >
            <Card className="text-center">
                <Card.Header> CODE: {detailsData?.code} </Card.Header>
                <Card.Body>
                    <Card.Title>{detailsData?.name}</Card.Title>
                    <Card.Text>
                        <li>Capital: {detailsData?.capital} </li>
                        <li>Curency: {detailsData?.currency} </li>
                        <hr />
                        <h5>Language</h5>
                        <li>Language: {detailsData?.languages[0]?.name } </li>
                        <li>Language Code: {detailsData?.languages[0]?.code } </li>


                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Details