import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/launch.css'
import './assets/css/app.intro.css'
import './assets/css/media.css'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommerceScreen from "./Screens/CommerceScreen"
import AppIntroScreen from './Screens/AppIntroScreen';
import AppsScreen from './Screens/AppsScreen';
import Navbar from './Components/Navbar';
import AppStoreScreen from './Screens/AppStoreScreen';
import LoginScreen from './Screens/LoginScreen';
import { useSelector } from 'react-redux'
import CreationTools from './Components/CreationTools'
import RecognitionTools from './Components/RecognitionTools'
import RegisterScreen from './Screens/RegisterScreen'
import SmartCameraScreen from './Screens/SmartCameraScreen'
import MetaverseScreen from './Screens/MetaverseScreen'
import { OtpVerification } from './Screens/OtpVerification'
import Error from './Components/Error'

const App = () => {
  const userLoggedIn = useSelector(state => state.userInfo)
  return (
    <BrowserRouter>
      <Routes>
        {userLoggedIn ?
          <Route path='/' element={<AppStoreScreen />}>
            <Route index element={<CreationTools />} />
            <Route path='recognition' element={<RecognitionTools />} />
          </Route> :
          <Route path='/' element={<Navbar hideNavItems />}>
            <Route index element={<AppsScreen />} />
          </Route>
        }
        <Route path='/' element={<Navbar />}>
          <Route path=':title' element={<AppIntroScreen />} />
          <Route path='otp' element={<OtpVerification />} />
        </Route>
        <Route path='/solutions' >
          <Route path='smart_camera' element={<SmartCameraScreen />} />
          <Route path='metaverse' element={<MetaverseScreen />} />
          <Route path='commerce' element={<CommerceScreen />} />
        </Route>
        <Route path='/' element={<Navbar hideNavItems />}>
          <Route path='login' element={<LoginScreen />} />
          <Route path='register' element={<RegisterScreen />} />
        </Route>
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;