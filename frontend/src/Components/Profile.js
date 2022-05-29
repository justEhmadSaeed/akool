import React from 'react'

export const Profile = () => {
    return (
        <div className="my-modal">
            <div
                // className="modal fade"
                id="exampleModalCenterss"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="cs-bt">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">
                                    <i className="fal fa-times" />
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="dash-modal-wp">
                                <div className="dash-modal-ti">
                                    <h3>Profile</h3>
                                </div>
                                <div className="dash-modal-fx">
                                    <div>
                                        <img className="profile_img" alt='user' />

                                        <button className="btn btn-primary ml-5 mt-3">Pick Image</button>
                                        <input accept="image/*" type="file" className="d-none" />
                                    </div>

                                    <div className="dash-modal-ri">
                                        <div className="sign-ip">
                                            <label htmlFor="#">First Name</label>
                                            <input
                                                type="text"
                                                // onChange={this.handleChange}
                                                // value={this.state.user.firstName}
                                                name="firstName"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="sign-ip">
                                            <label htmlFor="#">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                // onChange={this.handleChange}
                                                // value={this.state.user.lastName}
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="sign-ip">

                                            <label htmlFor="#">Email</label>
                                            <input
                                                type="Email"
                                                // value={this.state.user.email}
                                                // onChange={this.handleChange}
                                                name="email"
                                                placeholder="abc@email.com"
                                            />
                                        </div>
                                        <div className="ds-md-bt">
                                            <button type="submit">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
