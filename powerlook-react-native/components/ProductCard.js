import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProductCard({ product }) {
  const [imageIndex, setImageIndex] = useState(0);

  const toggleImage = () => {
    if (product.image2) {
      setImageIndex((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? 'star' : 'star-o'}
          size={14}
          color="#f5c518"
          style={{ marginRight: 2 }}
        />
      );
    }
    return stars;
  };

  return (
    <TouchableOpacity style={styles.card} onPress={toggleImage} activeOpacity={0.8}>
      <Image
        source={{ uri: imageIndex === 0 ? product.image1 : product.image2 || product.image1 }}
        style={styles.image}
        resizeMode="cover"
      />
      {product.label && <View style={styles.label}><Text style={styles.labelText}>{product.label}</Text></View>}
      <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      {product.rating && (
        <View style={styles.ratingContainer}>
          {renderStars(product.rating)}
          <Text style={styles.reviewCount}>| ({product.reviews})</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginBottom: 20,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  label: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#ff6347',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  labelText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  reviewCount: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
});
