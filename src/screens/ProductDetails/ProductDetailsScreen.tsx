import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import Colors from "../../resource/theme/color";
import Mixins from "../../resource/mixins/appStyle";
import Fonts from "../../resource/theme/font";
import CustomButton from "../../Components/CustomButton";
import CommenHeader from "../../Components/CommenHeader";
const { scaleSize, scaleFont } = Mixins;

const ProductDetailsScreen = ({ route, navigation }: any) => {
  const { product } = route.params;

  const addToCart = () => {
    Alert.alert("Success", `${product.title} has been added to the cart.`);
  };

  return (
    <View style={styles.mainContainer}>
      <CommenHeader title={"Product Page"} onPress={()=>{
        navigation.goBack();
      }} />

      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>₹{product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.rating}>Rating: {product.rating.rate} ⭐</Text>
        <View style={styles.buttonContainer}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <CustomButton
              ColorCodes={[Colors.blue1(), Colors.blue1()]}
              title="Add to Cart"
              style={{
                marginTop: scaleSize(10),
                height: scaleSize(45),
                width: scaleSize(120),
                alignItems: "center",
              }}
              onPress={addToCart}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    padding: scaleSize(20),
    backgroundColor: Colors.white(),
  },
  image: {
    flex: 1,
    width: "100%",
    height: scaleSize(300),
    marginBottom: scaleSize(20),
  },
  title: {
    fontSize: scaleFont(22),
    fontFamily: Fonts.poppinsBold,
    color: Colors.black(),
    marginBottom: scaleSize(10),
  },
  price: {
    fontSize: scaleFont(18),
    fontFamily: Fonts.poppinsSemiBold,
    color: Colors.green(),
    marginBottom: scaleSize(10),
  },
  description: {
    fontSize: scaleFont(16),
    fontFamily: Fonts.poppinsRegular,
    color: Colors.gray(),
    marginBottom: scaleSize(20),
  },
  rating: {
    fontSize: scaleFont(16),
    fontFamily: Fonts.poppinsRegular,
    color: Colors.black(),
    marginBottom: scaleSize(20),
  },
  buttonContainer: {
    marginTop: scaleSize(20),
  },
});
