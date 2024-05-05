// app.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './DashboardScreen';
import Login from './Login';
import RegisterScreen from './register';
import BloodPressureInput from './pressure';
import MyPage from './MyPage';
import Status from './status';
import Community from './community';
import writing from './writing_article';

const Drawer = createDrawerNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {!loggedIn ? (
          <>
            <Drawer.Screen name="Home" component={Dashboard} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={RegisterScreen} />
            <Drawer.Screen name="Pressure" component={BloodPressureInput} />
            <Drawer.Screen name='Status' component={Status}/>
            <Drawer.Screen name='Community' component={Community}/>
          </>
        ) : (
          <>
            <Drawer.Screen name="Home" component={Dashboard} />
            <Drawer.Screen name="MyPage" component={MyPage} />
            <Drawer.Screen name="Pressure" component={BloodPressureInput} />
            <Drawer.Screen name='Status' component={Status}/>
            <Drawer.Screen name='Community' component={Community}/>
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
