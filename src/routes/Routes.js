import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Games from '../Screens/Games/gameOne';
import History from '../Screens/History/historyOne';
import Activity from '../Screens/pedagogicalActivity/activityOne';
import Welcome from '../Screens/1 - Login and Register/firstScreen';
import SignIn from '../Screens/1 - Login and Register/Login';
import Register from '../Screens/1 - Login and Register/Register';
import Profile from '../Screens/2 - Profile/Profile';
import Settings from '../Screens/2 - Profile/profileSettings';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (

        // Tela de Inicio

        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            {/* Tela de Login */}

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            {/* Tela de Registro */}

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />

            {/* Tela de Perfil */}

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />

            <Stack.Screen
            name="profileSettigns"
            component={Settings}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Games"
            component={Games}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="History"
            component={History}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Activity"
            component={Activity}
            options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
};
