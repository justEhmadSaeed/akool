import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import { Spinner } from 'react-bootstrap'


const CommerceApps = ({ whiteCarousel = false }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getTools = async () => {
        const { data } = await axios.get('/api/tools/3d')
        setData(data)
        setLoading(false)
    }
    useEffect(() => {
        getTools()
    }, [])

    return (
        <section id="assets_editing_apps" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="heading_text_section">
                            <h3 className="mb-0">3D Commerce Apps</h3>
                            <p className="mb-0">Akool 3D & video solutions enpower you to create 3D videos and 3D objects with
                                one click.</p>
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
                            <Carousel data={data} white={whiteCarousel} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommerceApps