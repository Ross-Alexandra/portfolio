import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: 'AIzaSyCfdHd3_5mFlBwUMIkToGpdiO0LCtnXAok',
    authDomain: 'portfolio-f6e44.firebaseapp.com',
    projectId: 'portfolio-f6e44',
    storageBucket: 'portfolio-f6e44.appspot.com',
    messagingSenderId: '424263099124',
    appId: '1:424263099124:web:cf19eeea2a8f730a8334a1',
    measurementId: 'G-ZQJ1MVRV6R',
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);

if (process.env.NODE_ENV === 'development') {
    console.log('Setting app check to run in debug mode.');
    window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}
initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LfsDhohAAAAAEOWs3uhRtkf_CuRd0LW3vXNCg4c'),
    isTokenAutoRefreshEnabled: true,
});
