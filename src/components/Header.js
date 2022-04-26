import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const {balance}= useSelector(state=> state.totalMoney)

    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Children Bank</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">

                    <div className="d-flex mx-5">

                        <button className="btn btn-primary">{`Balance: ₹${balance}`}</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header