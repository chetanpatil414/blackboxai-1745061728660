import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const products = [
  {
    id: '1',
    title: 'Rust Abstract Print Structure Shirt',
    price: '₹899',
    image1: 'https://media.powerlook.in/catalog/product/1/_/1_1579_229.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/3/_/3_1442_216.jpg?aio=w-640',
    label: 'New Arrival',
    rating: null,
    reviews: null,
  },
  {
    id: '2',
    title: 'Washed Flower Print Shirt',
    price: '₹899',
    image1: 'https://media.powerlook.in/catalog/product/4/_/4_1068_253.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/3/_/3_1442_256.jpg?aio=w-640',
    label: 'New Arrival',
    rating: null,
    reviews: null,
  },
  {
    id: '3',
    title: 'Rust Floral Crinkled Print Shirt',
    price: '₹899',
    image1: 'https://media.powerlook.in/catalog/product/5/_/5_576_280.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/4/_/4_1068_302.jpg?aio=w-640',
    label: 'New Arrival',
    rating: null,
    reviews: null,
  },
  {
    id: '4',
    title: 'Black Geometric Print Shirt',
    price: '₹899',
    image1: 'https://media.powerlook.in/catalog/product/1/_/1_1579_190.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/7/_/7_50_44.jpg?aio=w-640',
    label: 'New Arrival',
    rating: null,
    reviews: null,
  },
  {
    id: '5',
    title: 'Brown Natural Print Shirt',
    price: '₹899',
    image1: 'https://media.powerlook.in/catalog/product/d/p/dp1_102.jpg?aio=w-640',
    image2: null,
    label: 'New Arrival',
    rating: null,
    reviews: null,
  },
  {
    id: '6',
    title: 'Washed Cowboy Print Shirt',
    price: '₹899',
    image1: 'https://media.powerlook.in/catalog/product/d/p/dp1_79.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/1/_/1_1579_167.jpg?aio=w-640',
    label: 'New Arrival',
    rating: null,
    reviews: null,
  },
  {
    id: '7',
    title: 'Blue Crinkled Stripe Shirt',
    price: '₹899',
    image1: 'https://media.powerlook.in/catalog/product/4/_/4_1068_284.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/3/_/3_1442_285.jpg?aio=w-640',
    label: 'New Arrival',
    rating: null,
    reviews: null,
  },
  {
    id: '8',
    title: 'Black Abstract Lines Printed Shirt',
    price: '₹899',
    image1: 'https://media.powerlook.in/catalog/product/3/_/3_1442_283.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/4/_/4_1068_282.jpg?aio=w-640',
    label: 'New Arrival',
    rating: null,
    reviews: null,
  },
  {
    id: '9',
    title: 'Black Structured Oversized fit Half Sleeves Shirt',
    price: '₹899',
    image1: 'https://media.powerlook.in/catalog/product/d/p/dp2_02-1049820.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/d/p/dp1_02-1049820.jpg?aio=w-640',
    label: 'New Arrival',
    rating: 5.0,
    reviews: 5,
  },
  {
    id: '10',
    title: 'Black and White Stripes Full Sleeves Shirt',
    price: '₹1099',
    image1: 'https://media.powerlook.in/catalog/product/3/_/3_1442_169.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/2/_/2_1514_179.jpg?aio=w-640',
    label: 'New Arrival',
    rating: 4.5,
    reviews: 14,
  },
  {
    id: '11',
    title: 'Light Green Waffle Checks Regular Fit Full Sleeves Shirt',
    price: '₹1199',
    image1: 'https://media.powerlook.in/catalog/product/d/p/dp11096421.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/4/1/41096421.jpg?aio=w-640',
    label: 'New Arrival',
    rating: 4.5,
    reviews: 4,
  },
  {
    id: '12',
    title: 'Powder Blue Stripe Shirt',
    price: '₹1099',
    image1: 'https://media.powerlook.in/catalog/product/4/_/4_1068_134.jpg?aio=w-640',
    image2: 'https://media.powerlook.in/catalog/product/2/_/2_1514_149.jpg?aio=w-640',
    label: 'New Arrival',
    rating: 5.0,
    reviews: 2,
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Filters />
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={styles.productList}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  productList: {
    paddingBottom: 20,
    paddingLeft: 10,
  },
});
