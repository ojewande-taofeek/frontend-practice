import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

const Notifications = lazy(() => import('../Notifications/Notifications'));
const Header = lazy(() => import('../Header/Header'));
const Login = lazy(() => import('../Login/Login'));
const Footer = lazy(() => import('../Footer/Footer'));
const CourseList = lazy(() => import('../CourseList/CourseList'));

export default class App extends Component {
    render() {
        const listCourses = [
            {id: 0, name: 'ES6', credit: 60},
            {id: 1, name: 'Webpack', credit: 20},
            {id: 2, name: 'React', credit: 40},
        ];

        const listNotifications = [
            {id: 0, type: 'default', value: 'New course available' },
            {id: 1, type: 'urgent' , value:'New resume available' },
            {id: 2, type: 'urgent', html: {__html: getLatestNotification()}}
        ];

        const { isLoggedIn }  = this.props; 
        return (
            <div className='container'>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Header />
                    {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
                    <Footer />
                    <Notifications listNotifications={listNotifications} />
                </Suspense>
            </div>
        );
    }
}


App.defaultProps = {
    isLoggedIn: true,
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};
