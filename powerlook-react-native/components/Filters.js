import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const colors = ['Brown', 'Blue', 'Light Green', 'Black', 'White', 'Maroon', 'Mustard'];
const prices = ['₹0.00 - ₹499.99', '₹500.00 - ₹999.99', '₹1,000.00 - ₹1,499.99'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];
const sleeves = ['Full Sleeves', 'Half Sleeves'];

export default function Filters() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filters</Text>
      <TouchableOpacity>
        <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>

      <ScrollView style={styles.filterSection} showsVerticalScrollIndicator={false}>
        <Text style={styles.filterTitle}>Color</Text>
        <View style={styles.optionsContainer}>
          {colors.map((color) => (
            <TouchableOpacity key={color} style={styles.optionButton}>
              <Text style={styles.optionText}>{color}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>+15 more</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.filterTitle}>Price</Text>
        <View style={styles.optionsContainer}>
          {prices.map((price) => (
            <TouchableOpacity key={price} style={styles.optionButton}>
              <Text style={styles.optionText}>{price}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.filterTitle}>Size</Text>
        <View style={styles.optionsContainer}>
          {sizes.map((size) => (
            <TouchableOpacity key={size} style={styles.optionButton}>
              <Text style={styles.optionText}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.filterTitle}>Sleeves</Text>
        <View style={styles.optionsContainer}>
          {sleeves.map((sleeve) => (
            <TouchableOpacity key={sleeve} style={styles.optionButton}>
              <Text style={styles.optionText}>{sleeve}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reset: {
    color: '#007bff',
    marginBottom: 10,
  },
  filterSection: {
    maxHeight: 400,
  },
  filterTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  optionsContainer: {
    flexWrap: 'wrap',
  },
  optionButton: {
    marginBottom: 5,
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
});
