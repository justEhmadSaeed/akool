import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
const ViewMore = () => {
    const [maxProductsAlert, setMaxProductsAlert] = useState(false)

    const showAlert = () => {
        setTimeout(() => {
            setMaxProductsAlert(false)
        }, 3000);
        setMaxProductsAlert(true)
    }
    return (
        <div className="row">
            <div className="see_more_btn">
                <div onClick={showAlert} style={{ cursor: 'pointer' }} className="view_more_slider_card">View More <img src="/images/slider_right_arrow.png" alt="slider arrow" /></div>
                {maxProductsAlert &&
                    <Alert variant={'danger'} className='m-3'>
                        Maximum Products limit reached!
                    </Alert>
                }
            </div>
        </div>
    )
}

export default ViewMore