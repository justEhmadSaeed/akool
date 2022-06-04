import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Tool = ({ title, logo, description, rating, maintainHistory = true, launchLink }) => {

    const user = useSelector(state => state.userInfo)

    const addToUsed = () => {
        if (maintainHistory) {
            const items =
            {
                title,
                logo,
                description,
                rating,
                link: launchLink,
            }
            if (localStorage.getItem('used')) {
                let usedItems = JSON.parse(localStorage.getItem('used'))
                const isFound = usedItems.some(item => item.title === items.title);
                if (!isFound) {
                    if (usedItems.length > 2) {
                        usedItems.shift()
                    }
                    usedItems.push(items)
                    localStorage.setItem('used', JSON.stringify(usedItems))

                }
            } else {
                localStorage.setItem('used', JSON.stringify([items]))
            }
        }
    }
    return (
        <div>
            <div className="slider_card">
                <div className="top_section" style={{ alignItems: 'self-end', position: 'relative' }}>
                    <div className="image_section">
                        <img src={logo} alt='logo' />
                    </div>
                </div>
                <div className="bottom_section">
                    <h3 className='launch-h3'>{title}</h3>
                    <p>{description && description}</p>
                    <div className="rating_section d-flex align-items-baseline">
                        <h5 className="mb-0">5.0</h5>
                        <div className="star_section">
                            {Array(rating).fill(1).map(x => <span><i className="fa fa-star" aria-hidden="true"></i></span>)}
                        </div>
                    </div>
                    <Link to={'/' + title} className='w-100'>
                        <Button className='my-2 w-100 bg-primary bg-gradient'>Details</Button>
                    </Link>
                    {
                        launchLink ?
                            <a className='w-100' href={launchLink} target='_blank' rel="noreferrer"  >
                                <Button onClick={addToUsed} className='my-2 w-100' style={{ backgroundColor: '#000C3E' }}>
                                    Launch
                                </Button>
                            </a> :
                            <Button onClick={addToUsed} className='my-2 w-100' style={{ backgroundColor: '#000C3E' }} disabled>
                                Launch
                            </Button>
                    }
                </div>
            </div>
        </div>
    )

}

export default Tool