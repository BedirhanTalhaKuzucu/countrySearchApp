import React, { useState, useEffect } from 'react'
import { getCountryData } from '../helper/apiRequest';

const Home = () => {
    const [data, setData] = useState([]);
    const [wantedCountries, setwantedCountries] = useState()


    useEffect(() => {
        getCountryData(setData)
        console.log(data)
    }, [])


    const handleChange = (e) => {
        setwantedCountries(data.filter((item, index) => {
            let searchingName = (e.target.value).toUpperCase()
            let countryName = item.name.toUpperCase()
            return countryName.includes(searchingName)
        })
        );

        console.log(data.filter((item, index) => {
            let searchingName = (e.target.value).toUpperCase()
            let countryName = item.name.toUpperCase()
            return countryName.includes(searchingName)
        }));
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
                {/* <button type="submit">Search</button> */}
            </form>
            <div >
                <table>
                    <tr>
                        <th>Country Name</th>
                        <th>Code</th>
                    </tr>
                    {wantedCountries ?
                        wantedCountries?.map((country) => (
                            <tr>
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