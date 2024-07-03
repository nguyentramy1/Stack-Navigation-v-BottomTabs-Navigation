import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9' }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hello 👋</Text>
        <Text style={{ marginTop: 8 }}>Christie Doe</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Scan')}>
          <Image
            source={require('D:/Du lieu Man hinh+Dowload+Documen/react-native/MyReactNative/image/Group 157.png')}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.boxText}>Scan new</Text>
        </TouchableOpacity>
        <View style={styles.box}>
          <Image
            source={require('D:/Du lieu Man hinh+Dowload+Documen/react-native/MyReactNative/image/Screenshot 2024-07-03 173958.png')}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.boxText}>Counterfeits</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <View style={styles.box}>
          <Image
            source={require('D:/Du lieu Man hinh+Dowload+Documen/react-native/MyReactNative/image/Screenshot 2024-07-03 174127.png')}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.boxText}>Success</Text>
        </View>
        <View style={styles.box}>
          <Image
            source={require('D:/Du lieu Man hinh+Dowload+Documen/react-native/MyReactNative/image/Screenshot 2024-07-03 174148.png')}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.boxText}>Directory</Text>
        </View>
      </View>
    </View>
  );
};


const ScanScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9' }}>
      <Image
        source={{ uri: 'D:/Du lieu Man hinh+Dowload+Documen/react-native/MyReactNative/image/Screenshot 2024-07-03 174148.png' }} 
        style={{ width: 100, height: 400 }}
      />
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 40, left: 20 }}>
        <Icon name="arrow-back" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const DemoScreen = () => {
  return null; 
};
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false, // Ẩn văn bản của tab
        tabBarStyle: {
          display: 'flex', // Đảm bảo thanh tab hiển thị
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications-outline';
          } else if (route.name === 'Counterfeits') {
            iconName = 'alert-circle-outline';
          } else if (route.name === 'Scan') {
            iconName = 'scan';
          }

          // Return the icon component
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={DemoScreen} />
      <Tab.Screen name="Counterfeits" component={DemoScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
    </Tab.Navigator>
  );
};



const styles = {
  header: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  box: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  boxText: {
    marginTop: 8,
    fontSize: 16,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}
