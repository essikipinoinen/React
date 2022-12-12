import React, { useState } from 'react'
import CustomerService from './services/Customer'
import './App.css'

const CustomerEdit = ({ setMuokkaustila, setIsPositive, setMessage, setShowMessage, muokattavaCustomer }) => {

    const [newCustomerId, setNewCustomerId] = useState(muokattavaCustomer.customerId)
    const [newCompanyName, setNewCompanyName] = useState(muokattavaCustomer.companyName)
    const [newContactName, setNewContactName] = useState(muokattavaCustomer.contactName)
    const [newContactTitle, setNewContactTitle] = useState(muokattavaCustomer.contactTitle)

    const [newCountry, setNewCountry] = useState(muokattavaCustomer.country)
    const [newAddress, setNewAddress] = useState(muokattavaCustomer.address)
    const [newCity, setNewCity] = useState(muokattavaCustomer.city)

    const [newPostalCode, setNewPostalCode] = useState(muokattavaCustomer.postalCode)
    const [newPhone, setNewPhone] = useState(muokattavaCustomer.phone)
    const [newFax, setNewFax] = useState(muokattavaCustomer.fax)

    const handleSubmit = (event) => {
        event.preventDefault()
        var newCustomer = {
            customerId: newCustomerId,
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

        CustomerService.update(newCustomer)
            .then(response => {
                if (response.status === 200) {
                    setMessage("Asiakasta " + newCustomer.companyName + " muokattu")
                    setIsPositive(true)
                    setShowMessage(true)

                    setTimeout(() => {
                        setShowMessage(false)
                    }, 3000)

                    setMuokkaustila(false)
                }

            })
            .catch(error => {
                setMessage(error)
                setIsPositive(false)
                setShowMessage(true)

                setTimeout(() => {
                    setShowMessage(false)
                }, 6000)
            })
    }


    return (
        <div id="edit">
            <h2>Asiakkaan muokkaus</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={newCustomerId} disabled />
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
                <input type='button' value='Takaisin' onClick={() => setMuokkaustila(false)} />
            </form>
        </div>
    )
}


export default CustomerEdit
