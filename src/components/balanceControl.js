import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { depositMoney, withdrawMoney } from '../redux/actions/moneyAction'

const BalanceControl = () => {


    const dispatch =useDispatch()

    return (
        <div className='my-5 text-center'>
            <button className="btn btn-danger" onClick={() => {
                dispatch(withdrawMoney(20))
            }}>-</button>
            <span className='px-2'>Withdrawl/Deposit</span>
            <button className="btn btn-primary" onClick={() => {
                dispatch(depositMoney(20))
            }}>+</button>
            <div className='my-3'>
                <Link to="/anonymous" className='btn btn-info'>Go To Anoymous</Link>
            </div>

        </div>
    )
}

export default BalanceControl