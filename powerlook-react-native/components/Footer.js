import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/about-us')}>
          <Text style={styles.link}>About us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/blog')}>
          <Text style={styles.link}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/affiliate-programme')}>
          <Text style={styles.link}>Affiliate Program</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/sitemap')}>
          <Text style={styles.link}>Sitemap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/stores')}>
          <Text style={styles.link}>Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/contactus')}>
          <Text style={styles.link}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Need Help From Powerlook</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/returns-exchange-refund')}>
          <Text style={styles.link}>Returns, Exchange & Refunds</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/cancellation-policy')}>
          <Text style={styles.link}>Cancellation Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/shipping-policy')}>
          <Text style={styles.link}>Shipping Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/privacy-policy')}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.powerlook.in/terms-and-conditions')}>
          <Text style={styles.link}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.contactRow}>
          <Image source={{ uri: 'https://www.powerlook.in/images/mail-rounded.svg' }} style={styles.icon} />
          <Text style={styles.contactText}>support@powerlook.in</Text>
        </View>
        <View style={styles.contactRow}>
          <Image source={{ uri: 'https://www.powerlook.in/images/call.svg' }} style={styles.icon} />
          <Text style={styles.contactText}>+91 9696333000</Text>
        </View>
        <View style={styles.contactRow}>
          <Image source={{ uri: 'https://www.powerlook.in/images/time.svg' }} style={styles.icon} />
          <Text style={styles.contactText}>Mon - Sat : 10:30 AM - 06:00 PM</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Join the Power Squad</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/powerlookofficial')}>
            <Image source={{ uri: 'https://www.powerlook.in/images/fb-social.svg' }} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/powerlookofficial')}>
            <Image source={{ uri: 'https://www.powerlook.in/images/instagram.svg' }} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://in.pinterest.com/POWERLOOKPinterest/')}>
            <Image source={{ uri: 'https://www.powerlook.in/images/pinterest.svg' }} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@powerlook6252')}>
            <Image source={{ uri: 'https://www.powerlook.in/images/youtube.png' }} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <TouchableOpacity style={styles.categoryButton}>
          <Image source={{ uri: 'https://www.powerlook.in/images/plus.png' }} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>100% Secure Payment</Text>
        </TouchableOpacity>
        <Image source={{ uri: 'https://www.powerlook.in/icons/payments-logo.svg' }} style={styles.paymentLogo} />
      </View>

      <Text style={styles.copyRight}>© 2025 www.powerlook.in. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f8f8f8',
    padding: 15,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  link: {
    color: '#007bff',
    marginBottom: 5,
    fontSize: 14,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  paymentLogo: {
    width: '100%',
    height: 40,
    marginTop: 10,
    resizeMode: 'contain',
  },
  copyRight: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    marginTop: 10,
  },
});
