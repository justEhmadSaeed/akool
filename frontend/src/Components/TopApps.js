import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import { Spinner } from 'react-bootstrap'


const TopApps = () => {

    const [topApps, setTopApps] = useState([])
    const [loading, setLoading] = useState(true)

    const getTopTools = async () => {
        const { data } = await axios.get('/api/tools/top')
        setTopApps(data)
        setLoading(false)
    }
    useEffect(() => {
        getTopTools()
    }, [])

    return (
        <section id="top_selected_apps_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="heading_text_section">
                            <h3 className="mb-0">Top Selected Commerce Apps</h3>
                            <p className="mb-0">Akool video solutions enpower live video analytics from security camera, webcam,
                                phone camera, et al. Hardware is optional.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {loading ?
                            <div className='w-full d-flex justify-content-center'>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                            :
                            <Carousel data={topApps} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopApps