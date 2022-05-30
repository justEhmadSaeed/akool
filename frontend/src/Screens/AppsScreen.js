import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Tool from '../Components/Tool'
import { Spinner } from 'react-bootstrap'
import Helmet from 'react-helmet'
import ViewMore from '../Components/ViewMore'

const AppsScreen = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState([])
    const [search, setSearch] = useState('')

    const searchProduct = () => {
        emptyResults()
        products.forEach(product => {
            if (product.title.toLowerCase().includes(search.toLowerCase().trim())) {
                setResult(result => [...result, product])
            }
        })
    }
    const emptyResults = () => setResult([])


    const getProducts = async () => {
        const { data } = await axios.get('/api/tools/all')
        console.log(data);
        setLoading(false)
        setProducts(data)
        setResult(data)
    }
    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        searchProduct()
    }, [search])

    return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>
            <section className="banner_two launch_banner_two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="apps-banner_text text-center">
                                <h3 className='launch-h3'>Build With Akool</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/*  Recommended Apps slider part start  */}
            <section id="main_body">
                <div className="recommendtion_part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="heading_text">
                                    <h3 className='launch-h3'>Recommended Apps</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <TopApps /> */}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="all_apps_part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="heading_text">
                                    <h3 className='launch-h3'>All Apps</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="all_apps_nav">
                                <input onChange={(e) => { setSearch(e.target.value) }} value={search} type="text" placeholder="Search" className='w-100' />
                            </div>
                        </div>

                        <div className="row">
                            {loading ?
                                <div className='w-full d-flex justify-content-center'>
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </div>
                                :
                                result.map(item =>
                                    <div key={item._id} className="col-lg-4 col-md-6">
                                        <Tool title={item.title} logo={item.logo} description={item.description} rating={item.rating} launchLink={item.link} maintainHistory={false} />
                                    </div>
                                )
                            }
                        </div>
                        <ViewMore />
                    </div>
                </div>
            </section>

            {/* Recommended Apps slider part end  */}
            <section className="last_part d-flex">
                <div className="image_section">
                    <img src="/images/lunch_last.png" alt="lunch" className="img-fluid w-100 h-100" />
                </div>
                <div className="last_text_part">
                    <h3 className='launch-h3'>Build With Akool</h3>
                    <p>Start building for free, on-premises option available!</p>
                    <div className="buttons d-flex">
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppsScreen