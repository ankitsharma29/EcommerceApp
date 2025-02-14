import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Colors from "../../resource/theme/color";
import Mixins from "../../resource/mixins/appStyle";
import Fonts from "../../resource/theme/font";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { removeItemFromCart } from "../../store/slice/ProductData/cartItemsSlice";
import CommenHeader from "../../Components/CommenHeader";
import CustomButton from "../../Components/CustomButton";
import Feather from "react-native-vector-icons/Feather";
const { scaleSize, scaleFont } = Mixins;

const CartPageScreen = ({ navigation }: any) => {
  const cartItems: any[] = useAppSelector((state) => state.cartItems.cartItems);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const renderCartItem = ({ item }: any) => (
    <View style={styles.itemRow}>
      <Image
        source={{ uri: item.image }}
        style={styles.itemImageRow}
        resizeMode="contain"
      />
      <View style={styles.itemDetailsRow}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>₹{item.price.toFixed(2)}</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
        <CustomButton
          ColorCodes={[Colors.blue1(), Colors.blue1()]}
          title="Remove Item"
          style={{
            marginTop: scaleSize(10),
            height: scaleSize(40),
            width: scaleSize(120),
            alignItems: "center",
          }}
          onPress={() => {
            handleRemoveItem(item.id);
          }}
        />
      </View>
    </View>
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>

       <Feather name="shopping-cart" size={100} color={"black"} />
      <Text style={styles.emptyText}>Your cart is empty.</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <CommenHeader title={"Cart Items"} backIconDisabled={true} onPress={()=>{
        navigation.goBack();
      }}/>
      <FlatList
        data={cartItems ?? []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default CartPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.white()
  },
  listContainer: {
    paddingBottom: scaleSize(20),
  },
  itemRow: {
    margin: scaleSize(10),
    flexDirection: "row",
    padding: scaleSize(15),
    borderRadius: scaleSize(10),
    borderWidth: 0.4,
  },
  itemImageRow: {
    width: scaleSize(50),
    height: scaleSize(50),
    marginRight: scaleSize(15),
  },
  itemDetailsRow: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: scaleFont(16),
    fontFamily: Fonts.poppinsBold,
    color: Colors.black(),
  },
  itemPrice: {
    fontSize: scaleFont(14),
    fontFamily: Fonts.poppinsSemiBold,
    color: Colors.green(),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:scaleSize(300)
  },
  emptyText: {
    fontSize: scaleFont(18),
    fontFamily: Fonts.poppinsRegular,
    color: Colors.black(),
  },
});
