import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <section className="header">
            <Link to="/"><i className="fa fa-home"></i></Link>
            <Link to="/contact"><i className="fa fa-users"></i></Link>
            <Link to="/statistic">Charts</Link>
        </section>
    )
}