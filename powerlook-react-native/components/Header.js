import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          source={{ uri: 'https://www.powerlook.in/images/Logo/pl-mobile-logo.jpg' }}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.navLinks}>
        <TouchableOpacity>
          <Text style={styles.navText}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Store Locator</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="shopping-bag" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="heart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome5 name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 40,
  },
  navLinks: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  navText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#333',
  },
  icons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 5,
  },
});
