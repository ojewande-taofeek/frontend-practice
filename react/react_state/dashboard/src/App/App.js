import React, { Component, lazy, Suspense } from 'react';
import { StyleSheet, css } from 'aphrodite';
// import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import { user, logOut, AppContext } from './AppContext';

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
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
        this.state = { displayDrawer: false,
                        user: user,
                        logOut: this.logOut.bind(this),
                        listNotifications: [
                            {id: 0, type: 'default', value: 'New course available' },
                            {id: 1, type: 'urgent' , value:'New resume available' },
                            {id: 2, type: 'urgent', html: {__html: getLatestNotification()}}
                        ],
                     };
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
        
    };
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    };

    logIn = (email, password) => {
        this.setState({ user: {
            email: email,
            password: password,
            isLoggedIn: true,
            }
        })
    };

    logOut = () => {
        console.log('Logout is clicked');
        this.setState({
            user
        })
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

    handleHideDrawer = () => {
        console.log('Close button has been clicked');
        this.setState({ displayDrawer: false });
    };

    handleDisplayDrawer = () => {
        this.setState({ displayDrawer: true });
    };

    markNotificationAsRead = (id) => {
        const { listNotifications } = this.state;
        console.log('markNotificationAsRead clicked');
        this.setState({ listNotifications: listNotifications.filter((notify) => notify.id !== id)});
    }
    
    render() {
        const { displayDrawer } = this.state;

        const listCourses = [
            {id: 0, name: 'ES6', credit: 60},
            {id: 1, name: 'Webpack', credit: 20},
            {id: 2, name: 'React', credit: 40},
        ];

        
     
        const { isLoggedIn }  = this.state.user; 
        const { user, logOut, listNotifications } = this.state;

       
        return (
            <AppContext.Provider value={{user, logOut}}>
            <div className={css(AppStyles.container)}>
                <Suspense fallback={<h3>Loading...</h3>}>
                    <Header />
                    <BodySectionWithMarginBottom title={isLoggedIn ? "Course list" : "Log in to continue"}>
                        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login logIn={this.logIn} />}
                    </BodySectionWithMarginBottom> 
                    <BodySection title='News from the School'>
                        <p>School resumes next week.</p>
                    </BodySection>
                    <Footer />
                    <Notifications
                        listNotifications={listNotifications}
                        displayDrawer={displayDrawer}  
                        handleDisplayDrawer={this.handleDisplayDrawer}
                        handleHideDrawer={this.handleHideDrawer}
                        markNotificationAsRead={this.markNotificationAsRead}
                    />
                </Suspense>                        
            </div>
            </AppContext.Provider>
                        
        );
    }
}



const AppStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100vh',
        margin: '0',
        scrollBehavior: 'smooth',
    }
})
