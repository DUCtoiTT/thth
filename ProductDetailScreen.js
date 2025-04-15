import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductDetailScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 4.99;
  const totalPrice = (quantity * pricePerUnit).toFixed(2);

  return (
    <View style={styles.container}>
      {/* Header: back + share */}
      <View style={styles.topIcons}>
        <TouchableOpacity>
          <Icon name="arrow-back-ios" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="share" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <Image
          source={require('./assets/apple.png')} 
          style={styles.image}
          resizeMode="contain"
        />

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.productName}>Naturel Red Apple</Text>
              <Text style={styles.productTag}>1kg, Price</Text>
            </View>
            <TouchableOpacity>
              <Icon name="favorite-border" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Quantity */}
          <View style={styles.rowBetween}>
            <View style={styles.quantityBox}>
              <TouchableOpacity
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                style={styles.iconButton}
              >
                <Icon name="remove" size={20} color="#000" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                style={styles.iconButton}
              >
                <Icon name="add" size={20} color="#000" />
              </TouchableOpacity>
            </View>
            <Text style={styles.totalPrice}>${totalPrice}</Text>
          </View>

          {/* Product Detail */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Text style={styles.description}>
              Apples Are Nutritious. Apples May Be Good For Weight Loss. {"\n"}
              Apples May Be Good For Your Heart. As Part Of A Healthful {"\n"}
              And Varied Diet.
            </Text>
          </View>

          {/* Nutritions */}
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={styles.nutritionTag}>
              <Text style={styles.nutritionText}>100gr</Text>
            </View>
          </View>

          {/* Review */}
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={styles.ratingRow}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon
                  key={i}
                  name="star"
                  size={22}
                  color={i <= 4 ? '#F3603F' : '#ccc'}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Add To Basket */}
      <TouchableOpacity style={styles.addToBasket}>
        <Text style={styles.addText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
  },
  infoContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  productTag: {
    color: '#888',
    fontSize: 14,
    marginTop: 4,
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  nutritionTag: {
    backgroundColor: '#eee',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  nutritionText: {
    fontSize: 14,
    color: '#555',
  },
  ratingRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  addToBasket: {
    backgroundColor: '#53B175',
    padding: 18,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  
});
