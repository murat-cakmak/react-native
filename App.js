import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, SafeAreaView} from "react-native";

const Tab = createBottomTabNavigator();

// Icons
import {HomeFilled, Home, Search, SearchFilled, ReelFilled, ShopFilled, Logo} from "./icons";

// screens
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/search";
import ReelScreen from "./screens/reel";
import ShopScreen from "./screens/shop";
import ProfileScreen from "./screens/profile";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="dark" />
            <SafeAreaView style={{flex: 1}}>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 1,
                            borderTopColor: '#DBDBDB',
                            height: 50,
                            paddingTop: 15,
                            paddingBottom: 15
                        },
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: '#000',
                        tabBarInactiveTintColor: '#333'
                    }}
                >
                    <Tab.Screen
                        name="home"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                if (focused)
                                    return <HomeFilled fill={color}/>
                                return <Home fill={color}/>
                            }
                        }}
                    />
                    <Tab.Screen
                        name="search"
                        component={SearchScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                if (focused)
                                    return <SearchFilled fill={color}/>
                                return <Search fill={color}/>
                            }
                        }}
                    />
                    <Tab.Screen
                        name="reel"
                        component={ReelScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                return <ReelFilled fill={color}/>
                            }
                        }}
                    />
                    <Tab.Screen
                        name="shop"
                        component={ShopScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                return <ShopFilled fill={color}/>
                            }
                        }}
                    />
                    <Tab.Screen
                        name="profile"
                        component={ProfileScreen}
                        options={{
                            tabBarIcon: ({focused, color}) => {
                                return <Logo fill={color}/>
                            }
                        }}
                    />
                </Tab.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 24,
        borderColor: '#000'
    }
})
