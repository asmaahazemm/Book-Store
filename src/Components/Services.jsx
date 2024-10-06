import '../CSS/Services.css'
import {RiCustomerService2Line, RiLock2Line, RiTruckLine } from "@remixicon/react";

function Services() {
    let iconStyle = {
        display: 'block',
        fontSize: '3rem',
        color:'hsl(230, 62%, 56%)',
        marginButton: '16px',
    }
    return(
        <div className="service-container">
            <article className="sevices-card">
                <RiTruckLine style={iconStyle}/>
                <h3 className="service-title">Free Shipping</h3>
                <p className="servicees-description">Order More Than $100</p>
            </article>
            <article className="sevices-card">
                <RiLock2Line style={iconStyle}/>
                <h3 className="service-title">Secrmure Payment</h3>
                <p className="servicees-description">100% Secure Payement</p>
            </article>
            <article className="sevices-card">
                <RiCustomerService2Line style={iconStyle}/>
                <h3 className="service-title">24/7 Support</h3>
                <p className="servicees-description">Call us anytime</p>
            </article>            
        </div>
    )
};

export default Services;