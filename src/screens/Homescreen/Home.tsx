import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommenHeader from "../../Components/CommenHeader";
import Colors from "../../resource/theme/color";
import Mixins from "../../resource/mixins/appStyle";
import Fonts from "../../resource/theme/font";
const { scaleSize, scaleFont } = Mixins;
const Home = ({ navigation }: any) => {
  const { width } = Dimensions.get("window");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.resultCard}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.resultImage} resizeMode="stretch"/>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.price}>₹{item.price.toFixed(2)}</Text>
      <Text style={styles.rating}>Rating: {item.rating.rate} ⭐</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading products...</Text>
      </View>
    );
  }
  return (
    <View>
      <CommenHeader title={"Product Page"} backIconDisabled={false} />

      <FlatList
        data={products}
        style={{ margin: scaleSize(10) }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultCard: {
    flex: 1,
    padding: scaleSize(15),
    borderRadius: scaleSize(10),
    borderWidth: 0.6,
    marginVertical: scaleSize(10),
  },
  resultImage: {
    height: scaleSize(175),
    borderRadius: 10,
    width: "100%",
  },
  title: {
    marginTop: scaleSize(10),
    fontSize: scaleFont(16),
    fontFamily: Fonts.poppinsBold,
    color: Colors.black(),
  },
  price: {
    fontSize: scaleFont(16),
    fontFamily: Fonts.poppinsBold,
    color: Colors.black(),
  },
  rating: {
    fontSize: scaleFont(16),
    fontFamily: Fonts.poppinsBold,
    color: Colors.black(),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
