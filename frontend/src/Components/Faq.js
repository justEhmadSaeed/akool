import React, { useState } from 'react'

const Faq = ({ number, question, answer }) => {
    const [faq, setFaq] = useState(false)
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne" onClick={() => { faq ? setFaq(false) : setFaq(true) }}>
                <button className="accordion-button bg-white" type="button">
                    <p className="mb-0">{question}</p>
                    <span>
                        {faq ? <i className="fa fa-minus faq_minus" aria-hidden="true"></i> :
                            <i className="fa fa-plus faq_plus" aria-hidden="true"></i>}
                    </span>
                </button>
            </h2>
            <div id="collapseOne" className={faq ? "accordion-collapse collapse show" : "accordion-collapse collapse"} >
                <div className="accordion-body">
                    {answer}
                </div>
            </div>
        </div>)
}

export default Faq