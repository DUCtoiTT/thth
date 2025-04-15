import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

  // Hàm xử lý khi nhấn vào sản phẩm
  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="location-outline" size={20} color="#000" />
        <Text style={styles.locationText}>Dhaka, Banassre</Text>
        <Icon name="chevron-down" size={20} color="#000" />
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={20} color="#aaa" />
        <TextInput
          placeholder="Search Store"
          style={styles.searchInput}
        />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Banner */}
        <View style={styles.banner}>
          <Image
            source={require('./assets/banner.png')} // bạn thay bằng banner thật
            style={styles.bannerImg}
          />
        </View>

        {/* Section: Exclusive Offer */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View style={styles.cardRow}>
  {/* Card cho chuối */}
  <View style={styles.card}>
    <Image
      source={require('./assets/banana.png')}
      style={styles.cardImg}
    />
    <Text style={{ fontWeight: 'bold' }}>Organic Bananas</Text>
    <Text style={{ color: '#aaa' }}> 7pcs, Priceg</Text>
    <View style={styles.cardBottom}>
    <Text style={ styles.price }>$4.99</Text>
    <TouchableOpacity style={styles.addBtn}>
      <Icon name="add" size={20} color="#fff" />
    </TouchableOpacity>
    </View>
  </View>

  {/* Card cho táo */}
  <View style={styles.card}>
  <TouchableOpacity 
          style={styles.card}
          onPress={() => handleProductPress({
            name: "Natural Red Apple",
            price: "$4.99",
            description: "Apple: Are Nutritious...", 
            image: require('./assets/apple.png')
          })}
        >
    <Image
      source={require('./assets/apple.png')}
      style={styles.cardImg}
    />
    <Text style={{ fontWeight: 'bold' }}>Red Apple</Text>
    <Text style={{ color: '#aaa' }}>1kg, Priceg</Text>
    <View style={styles.cardBottom}>
    <Text style={{ fontWeight: 'bold' }}>$4.99</Text>
    <TouchableOpacity style={styles.addBtn}>
      <Icon name="add" size={20} color="#fff" />
    </TouchableOpacity>
    </View>
    </TouchableOpacity>
  </View>
</View>

        {/* Section: Best Selling */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View style={styles.cardRow}>
  {/* Card cho chuối */}
  <View style={styles.card}>
    <Image
      source={require('./assets/anh2.png')}
      style={styles.cardImg}
    />
    <Text style={{ fontWeight: 'bold' }}>Bell Pepper Red</Text>
    <Text style={{ color: '#aaa' }}>1kg, Priceg</Text>
    <View style={styles.cardBottom}>
    <Text style={styles.price}>$4.99</Text>
    <TouchableOpacity style={styles.addBtn}>
      <Icon name="add" size={20} color="#fff" />
    </TouchableOpacity>
    </View>
  </View>

  {/* Card cho táo */}
  <View style={styles.card}>
    <Image
      source={require('./assets/anh1.png')}
      style={styles.cardImg}
    />
    <Text style={{ fontWeight: 'bold' }}>Ginger</Text>
    <Text style={{ color: '#aaa' }}>250g, Priceg</Text>
    <View style={styles.cardBottom}>
    <Text style={styles.price}>$4.99</Text>
    <TouchableOpacity style={styles.addBtn}>
      <Icon name="add" size={20} color="#fff" />
    </TouchableOpacity>
    </View>
  </View>
</View>

        {/* Section: Groceries */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View style={styles.groceryRow}>
          <View style={styles.groceryCategory}>
          <Image
      source={require('./assets/dau.png')}
      style={styles.cardImg}
    />
            <Text style={styles.groceryText}>Pulses</Text>
          </View>
          <View style={styles.groceryCategory}>
          <Image
      source={require('./assets/gao.png')}
      style={styles.cardImg}
    />
            <Text style={styles.groceryText}>Rice</Text>
          </View>
        </View>

        <View style={styles.cardRow}>
  {/* Card cho chuối */}
  <View style={styles.card}>
    <Image
      source={require('./assets/thit.png')}
      style={styles.cardImg}
    />
    <Text style={{ fontWeight: 'bold' }}>Beef Bone</Text>
    <Text style={{ color: '#aaa' }}>1kg, Priceg</Text>
    <View style={styles.cardBottom}>
    <Text style={styles.price}>$4.99</Text>
    <TouchableOpacity style={styles.addBtn}>
      <Icon name="add" size={20} color="#fff" />
    </TouchableOpacity>
    </View>
  </View>

  {/* Card cho táo */}
  <View style={styles.card}>
    <Image
      source={require('./assets/ga.png')}
      style={styles.cardImg}
    />
    <Text style={{ fontWeight: 'bold' }}>Broiler Chiken</Text>
    <Text style={{ color: '#aaa' }}>1kg, Priceg</Text>
    <View style={styles.cardBottom}>
    <Text style={styles.price}>$4.99</Text>
    <TouchableOpacity style={styles.addBtn}>
      <Icon name="add" size={20} color="#fff" />
    </TouchableOpacity>
    </View>
  </View>
</View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {['home-outline', 'compass-outline', 'cart-outline', 'heart-outline', 'person-outline'].map((icon, i) => (
          <Icon key={i} name={icon} size={24} color="#666" />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  locationText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: { marginLeft: 10, flex: 1 },
  banner: { margin: 15 },
  bannerImg: { width: '100%', height: 120, borderRadius: 15 },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold' },
  seeAll: { color: 'green' },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    position: 'relative',
  },
  cardImg: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 5,
  },
  
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  groceryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  groceryCategory: {
    backgroundColor: '#f3f3f3',
    padding: 15,
    borderRadius: 10,
    flexDirection:'row'
  },
  groceryText: {
    fontWeight: 'bold',
    top:35
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
  },
});
