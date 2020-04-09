import React from 'react';
import { connect } from 'react-redux'

import Contact from '../components/Contact'
import UserControl from '../components/UserControl'

function ContactLoginPage (props) {
    let { loginInfo } = props
    function showArea (info) {
        if (info.isLogin === false) {
            return <Contact />
        } else{
            return <UserControl username={info.username} />
        }
    }
    return (
        <div className="contact-login-page">
            {showArea(loginInfo)}
        </div>
    )
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        loginInfo: state.loginInfo,
    }
  }

  const mapDispatchToProps = dispatch => {
        return {
            
        }
    }

export default connect(
mapStateToProps,
mapDispatchToProps
)(ContactLoginPage)