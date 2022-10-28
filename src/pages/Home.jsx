import React, { useState, useEffect } from 'react'
import { getCountryData } from '../helper/apiRequest';
import { useNavigate } from 'react-router-dom';

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
        console.log(countryCode)
        navigate(`/details/${countryCode}`)
    }


    return (
        <div className='home' >
            <h1>Country Search App</h1>
            <form className="search" >
                <input
                    type="search"
                    className="search-input"
                    placeholder="Search a country..."
                    // value={wantedCountries}
                    onChange={(e) => handleChange(e)}
                />
            </form>
            <div >
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

                            <tr key={index}  onClick= { () => handleClick(country.code)} >
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