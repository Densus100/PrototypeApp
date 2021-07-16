import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from './pages/Home'
import Content from './pages/Content'
import Splash from './pages/Splash'
import Account from './pages/Account'
import Team from './pages/Team'
import Notification from './pages/Notification'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from './components/BottomNavigator';
import Content2 from './pages/Content2';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Team" component={Team} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash" screenOptions={{
                animationEnabled: true,
            }}
        >
            <Stack.Screen name="Splash" component={Splash} options={{
                headerShown: false
            }} />

            <Stack.Screen name="Home" component={MyTabs} options={{
                headerShown: false,
                ...TransitionPresets.FadeFromBottomAndroid
            }} />

            <Stack.Screen name="Content" component={Content} options={({ route }) => ({
                headerTransparent: true,

                headerTintColor: 'white',
                title: route.params.item.title,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },

            })} />

            <Stack.Screen name="Notification" component={Notification} options={{
                ...TransitionPresets.SlideFromRightIOS,
            }} />

            <Stack.Screen name="Content2" component={Content2} options={{
                ...TransitionPresets.FadeFromBottomAndroid,
                headerShown: false,

            }} />


        </Stack.Navigator>
    )
}

export default Router
