import React from 'react';

function NotFoundPage (props) {
    return (
        <div className="not-found-page">
            <header className="masthead" style={{backgroundImage: 'url("img/about-bg.jpg")'}}>
            <div className="overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="page-heading">
                            <h1>Page Not Found</h1>
                            <span className="subheading">Something's wrong</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <br /><br /><br /><br />
                        <h1>Page not found</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage