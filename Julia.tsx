import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const categories = [
  { id: "1", title: "Phones", icon: "📱" },
  { id: "2", title: "Fashion", icon: "👗" },
  { id: "3", title: "Electronics", icon: "💻" },
  { id: "4", title: "Beauty", icon: "💄" },
];

const products = [
  { id: "1", name: "Samsung Galaxy S23", price: "₦450,000", image: "https://via.placeholder.com/150" },
  { id: "2", name: "Nike Sneakers", price: "₦38,000", image: "https://via.placeholder.com/150" },
  { id: "3", name: "HP Laptop", price: "₦320,000", image: "https://via.placeholder.com/150" },
  { id: "4", name: "Wrist Watch", price: "₦20,000", image: "https://via.placeholder.com/150" },
];

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/400x150?text=Jumia+Banner" }}
        style={styles.banner}
      />

      <Text style={styles.heading}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text style={styles.categoryIcon}>{item.icon}</Text>
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        )}
      />

      <Text style={styles.heading}>Top Products</Text>
      <View style={styles.productGrid}>
        {products.map((item) => (
          <View key={item.id} style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function CartScreen() {
  return (
    <View style={styles.center}>
      <Icon name="cart" size={50} color="#ff6600" />
      <Text style={styles.title}>Your Cart is Empty</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Icon name="person-circle" size={80} color="#ff6600" />
      <Text style={styles.title}>Welcome to Jumia UI</Text>
      <Text>Login to start shopping!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home";
            else if (route.name === "Cart") iconName = "cart";
            else if (route.name === "Profile") iconName = "person";
            return <Icon name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: "#ff6600",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 10 },
  banner: { width: "100%", height: 150, borderRadius: 10, marginVertical: 10 },
  heading: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  category: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
  },
  categoryIcon: { fontSize: 25 },
  categoryText: { marginTop: 5, fontWeight: "600" },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },
  productImage: { width: "100%", height: 100, borderRadius: 8 },
  productName: { fontSize: 14, marginTop: 5, fontWeight: "600" },
  productPrice: { color: "#ff6600", fontWeight: "bold", marginTop: 3 },
  addButton: {
    backgroundColor: "#ff6600",
    paddingVertical: 6,
    borderRadius: 5,
    marginTop: 8,
  },
  addButtonText: { color: "#fff", textAlign: "center", fontSize: 13 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
});
