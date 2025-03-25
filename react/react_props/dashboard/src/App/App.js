import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

const Notifications = lazy(() => import('../Notifications/Notifications'));
const Header = lazy(() => import('../Header/Header'));
const Login = lazy(() => import('../Login/Login'));
const Footer = lazy(() => import('../Footer/Footer'));
const CourseList = lazy(() => import('../CourseList/CourseList'));
const BodySectionWithMarginBottom = lazy(() => import('../BodySection/BodySectionWithMarginBottom'));
const BodySection = lazy(() => import('../BodySection/BodySection'));


export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
        
    };
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    };

    handleKeyPress = (event) => {
        try {
            if (event.ctrlKey && event.key === 'h') {
                event.preventDefault();
                alert('Logging you out');
                this.props.logOut();
            }
        } catch (error) {
            console.log('Error from compoundDidMount()', error);
        }
    };
    
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
                <Suspense fallback={<h3>Loading...</h3>}>
                    <Header />
                    <BodySectionWithMarginBottom title={isLoggedIn ? "Course list" : "Log in to continue"}>
                        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
                    </BodySectionWithMarginBottom> 
                    <BodySection title='News from the School'>
                        <p>School resumes next week.</p>
                    </BodySection>
                    <Footer />
                    <Notifications listNotifications={listNotifications} />
                </Suspense>                        
            </div>
                        
        );
    }
}


App.defaultProps = {
    isLoggedIn: false,
    logOut: (() => {}),
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};
