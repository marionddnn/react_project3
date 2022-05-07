import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import List from "./List";
import Search from './Search';
import Detail from './Detail';

const Nav = createNativeStackNavigator();

const Navigation = () => {
  
    return (
    <NavigationContainer>
      <Nav.Navigator initialRouteName="Search">
            <Nav.Screen
              name="Search"
              component={Search}
            />
            <Nav.Screen
             name="Liste"
             component={List}
            />
            <Nav.Screen
            name="Detail"
            component={Detail}
            />
      </Nav.Navigator>
    </NavigationContainer>
    );
}

export default Navigation;