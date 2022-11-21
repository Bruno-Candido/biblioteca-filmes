import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {FilmStrip, Info } from 'phosphor-react-native'
import { useTheme } from 'native-base'

import { Search } from '../screens/Search'
import { List } from '../screens/List'
import { About } from '../screens/About'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes(){
    const { colors } = useTheme()

    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor: colors.primary[100],
            tabBarInactiveTintColor: colors.gray[400],
            tabBarStyle:{
                position: 'absolute',
                height:87,
                borderTopWidth: 0,
                backgroundColor: colors.primary[800]
            }
        }}>
            <Screen
                name='search' 
                component={Search}
                options={{
                    tabBarIcon:({ color }) => <FilmStrip color={color}/>
                }}
            />
            <Screen
                name='about' 
                component={About}
                options={{
                    tabBarIcon:({ color }) => <Info color={color}/>
                }}
            />
            <Screen
                name='list' 
                component={List}
                options={{ tabBarButton: () => null }}
            />

        </Navigator>
    )
}