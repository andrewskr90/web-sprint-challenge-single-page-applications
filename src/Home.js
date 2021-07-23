import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    
    
    return (
        <div class='home'>
            <h2>Now taking orders online!</h2>
            <Link to='/pizza'>
                <button>Order</button>
            </Link>
            <Link></Link>
        </div>
    )
}