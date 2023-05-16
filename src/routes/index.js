import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Settngs from '../pages/profileSettings';

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
            name="Settgns"
            component={Settngs}
            options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
};
