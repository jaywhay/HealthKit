import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Dashboard from "./DashboardScreen";
import RegisterScreen from "./register";
import ChartComponent from "./chart";
import BloodPressureInput from "./pressure";
import Login from "./login";

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Dashboard}/>
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Register" component={RegisterScreen}/>
        <Drawer.Screen name="Pressure" component={BloodPressureInput}/>
        <Drawer.Screen name="Statistics" component={ChartComponent}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}