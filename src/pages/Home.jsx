import React, { useState, useEffect } from 'react'
import { getCountryData } from '../helper/apiRequest';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Home = () => {
    const [data, setData] = useState([]);
    const [wantedCountries, setwantedCountries] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        getCountryData(setData)
    }, [])

    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const handleChange = debounce(function (e) {
        setwantedCountries(data.filter((item, index) => {
            let searchingName = (e.target.value).toUpperCase()
            let countryName = item.name.toUpperCase()
            return countryName.includes(searchingName)
        })
        );
        
        if (e.target.value === "") {
            setwantedCountries("")
        }

    }, 1000);

    const handleClick = (countryCode) => {
        navigate(`/details/${countryCode}`)
    }


    return (
        <div className='home' >
            <h1>Country Search App</h1>
            <form className="search" >
                <Form.Group className="mb-3 search-input" controlId="formBasicEmail">
                    <Form.Label>Search Bar</Form.Label>
                    <Form.Control type="search" placeholder="Search a country..."
                        onChange={(e) => handleChange(e)}
                    />
                    <Form.Text className="text-muted">
                        enter the name of the country you want to find
                    </Form.Text>
                </Form.Group>
            </form>
            <div className='list' >
                <table>
                    {wantedCountries ?
                        <tr>
                            <th>Country Name</th>
                            <th>Code</th>
                        </tr>
                        :
                        ""
                    }
                    {wantedCountries ?
                        wantedCountries?.map((country, index) => (

                            <tr key={index} onClick={() => handleClick(country.code)} >
                                <td> {country.name} </td>
                                <td> {country.code} </td>
                            </tr>


                        ))
                        :
                        ""
                    }

                </table>
            </div>
        </div>

    );
};

export default Home