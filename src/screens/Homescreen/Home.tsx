import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommenHeader from "../../Components/CommenHeader";
import Colors from "../../resource/theme/color";
import Mixins from "../../resource/mixins/appStyle";
import Fonts from "../../resource/theme/font";
import CustomButton from "../../Components/CustomButton";
const { scaleSize, scaleFont } = Mixins;

const Home = ({ navigation }: any) => {
  const { width } = Dimensions.get("window");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState<any[]>([]); // Cart state
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

  const addToCart = (item: any) => {
    setCart((prevCart) => [...prevCart, item]);
    Alert.alert("Success", `${item.title} has been added to the cart.`);
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.resultCard}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.resultImage}
        resizeMode="stretch"
      />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.price}>₹{item.price.toFixed(2)}</Text>
      <Text style={styles.rating}>Rating: {item.rating.rate} ⭐</Text>
      <View style={{justifyContent:'center',alignItems:'center'}}>

      <CustomButton
        ColorCodes={[Colors.blue1(), Colors.blue1()]}
        title="Add to Cart"
        style={{marginTop:scaleSize(10),height:scaleSize(45),width: scaleSize(120),alignItems:'center'}}
        onPress={() => {
          addToCart(item);
        }}
      />
      </View>
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
    <View style={styles.container}>
      <CommenHeader title={"Product Page"} backIconDisabled={false} />
      <FlatList
        data={products}
        style={{ margin: scaleSize(10) }}
        numColumns={2}
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
    margin: scaleSize(10),
  },
  resultImage: {
    height: scaleSize(100),
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
  cartSummary: {
    padding: scaleSize(15),
    backgroundColor: Colors.lightWhite(),
  },
  cartText: {
    fontSize: scaleFont(18),
    fontFamily: Fonts.poppinsBold,
    color: Colors.black(),
  },
});
