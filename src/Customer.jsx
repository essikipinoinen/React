import React, { useState } from 'react'
import './App.css'

const Customer = ({ customer }) => {

    const [showDetails, setShowDetails] = useState(false)


    return (
        <div className='customerDiv'>
            <h4 onMouseEnter={() => setShowDetails(true)}
                onMouseLeave={() => setShowDetails(false)}>
                {customer.companyName}
            </h4>

            {showDetails && <div className='customerDetails'>
                <h3>{customer.companyName}</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='thtd'>Contact Person</th>
                            <th className='thtd'>Phone</th>
                            <th className='thtd'>Address</th>
                            <th className='thtd'>City</th>
                            <th className='thtd'>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='thtd'>{customer.contactName}</td>
                            <td className='thtd'>{customer.phone}</td>
                            <td className='thtd'>{customer.address}</td>
                            <td className='thtd'>{customer.city}</td>
                            <td className='thtd'>{customer.country}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default Customer
