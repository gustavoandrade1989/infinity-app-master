import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screens/Login and Register/firstScreen';
import SignIn from '../Screens/Login and Register/Login';
import Register from '../Screens/Login and Register/Register';
import Profile from '../Screens/Profile/Profile';
import Settings from '../Screens/Profile/profileSettings';

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

        </Stack.Navigator>
    )
};
