import React from 'react';
import { connect } from 'react-redux'

import { actLogOut } from '../action/index'

function UserControl(props) {
    let { username, propLogOut } = props
    function handleLogOut () {
        console.log('handleLogOut')
        propLogOut()
    }
  return (
    <div className="user-control">
        {/* Page Header */}
        <header className="masthead" style={{backgroundImage: 'url("img/contact-bg.jpg")'}}>
            <div className="overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="page-heading">
                            <h1>User Control</h1>
                            <span className="subheading">Hello {username ? username : 'Bạn'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* Main Content */}
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <p>Hello {username ? username : 'Bạn'}</p>
                    <form onSubmit={(e) => {handleLogOut(); e.preventDefault()}}>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" id="sendMessageButton">Đăng xuất</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <hr />
    </div>
  );
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {

    }
  }

  const mapDispatchToProps = dispatch => {
        return {
            propLogOut: () => {
                dispatch(actLogOut())
            }
        }
    }

export default connect(
mapStateToProps,
mapDispatchToProps
)(UserControl)
