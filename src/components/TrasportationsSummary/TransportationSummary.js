import React, { useState } from 'react'
import CountUp from 'react-countup';
import "./SummaryCard.style.scss";
import ScrollTrigger from 'react-scroll-trigger';

function TransportationSummary() {
    const [showSummary, setShowSummary] = useState(false);
    const summary = {
        happyClients: 500,
        airTransportation: 300,
        seaTransportation: 50,
    }

    return (
        <ScrollTrigger
            onEnter={() => setShowSummary(true)}
            onExit={() => setShowSummary(false)}
        >
            <div className="summary-cards">
                <div className="card">
                    <h2>+{showSummary && <CountUp start={0} end={summary.happyClients} duration={1} delay={0} />}</h2>
                    <p>HAPPY CLIENTS</p>
                </div>
                <div className="card">
                    <h2>+{showSummary && <CountUp start={0} end={summary.airTransportation} duration={1} delay={0} />}</h2>
                    <p>PERFECT AIR TRANSPORTATION</p>
                </div>
                <div className="card">
                    <h2>+{showSummary && <CountUp start={0} end={summary.seaTransportation} duration={1} delay={0} />}</h2>
                    <p>PERFECT AIR TRANSPORTATION</p>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default TransportationSummary