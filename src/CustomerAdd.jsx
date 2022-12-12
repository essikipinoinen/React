import React, { useState } from 'react'
import CustomerService from './services/Customer'
import './App.css'

const CustomerAdd = ({ setLisäystila }) => {

    const [newCustomerId, setNewCustomerId] = useState('')
    const [newCompanyName, setNewCompanyName] = useState('')
    const [newContactName, setNewContactName] = useState('')
    const [newContactTitle, setNewContactTitle] = useState('')

    const [newCountry, setNewCountry] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newCity, setNewCity] = useState('')

    const [newPostalCode, setNewPostalCode] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newFax, setNewFax] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        var newCustomer = {
            customerId: newCustomerId.toUpperCase(),
            companyName: newCompanyName,
            contactName: newContactName,
            contactTitle: newContactTitle,
            country: newCountry,
            address: newAddress,
            city: newCity,
            postalCode: newPostalCode,
            phone: newPhone,
            fax: newFax
        }

        CustomerService.create(newCustomer)
            .then(response => {
                if (response.status === 200) {
                    alert("Uusi asiaks lisätty: " + newCustomer.companyName)
                }

            })
            .catch(error => {
                alert(error)
            })
    }


    return (
        <div id="addNew">
            <h2>Asiakkaan lisäys</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={newCustomerId} placeholder="ID (5 isoa kirjainta)" maxLength="5" minLength="5"
                        onChange={({ target }) => setNewCustomerId(target.value)} required />
                </div>
                <div>
                    <input type="text" value={newCompanyName} placeholder="Yrityksen nimi"
                        onChange={({ target }) => setNewCompanyName(target.value)} required />
                </div>
                <div>
                    <input type="text" value={newContactName} placeholder="Kontaktin nimi"
                        onChange={({ target }) => setNewContactName(target.value)} />
                </div>
                <div>
                    <input type="text" value={newContactTitle} placeholder="Kontaktin titteli"
                        onChange={({ target }) => setNewContactTitle(target.value)} />
                </div>
                <div>
                    <input type="text" value={newCountry} placeholder="Maa"
                        onChange={({ target }) => setNewCountry(target.value)} />
                </div>
                <div>
                    <input type="text" value={newAddress} placeholder="Oosite"
                        onChange={({ target }) => setNewAddress(target.value)} />
                </div>
                <div>
                    <input type="text" value={newCity} placeholder="Kaupunki"
                        onChange={({ target }) => setNewCity(target.value)} />
                </div>
                <div>
                    <input type="text" value={newPostalCode} placeholder="Postinumero"
                        onChange={({ target }) => setNewPostalCode(target.value)} />
                </div>
                <div>
                    <input type="text" value={newPhone} placeholder="Puhelin"
                        onChange={({ target }) => setNewPhone(target.value)} />
                </div>
                <div>
                    <input type="text" value={newFax} placeholder="Faksi"
                        onChange={({ target }) => setNewFax(target.value)} />
                </div>

                <input type='submit' value='Tallenna' />
                <input type='button' value='Takaisin' onClick={() => setLisäystila(false)} />
            </form>
        </div>
    )
}


export default CustomerAdd
