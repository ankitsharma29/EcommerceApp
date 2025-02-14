import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../resource/theme/color";

interface Props {
  title?: string;
  onPress?: any;
  CartPress?: any;
  helpDisable?: boolean;
  navigation?: any;
  backIconDisabled?: boolean;
  cardShow?: boolean;
}

const CommenHeader = ({
  onPress,
  title,
  backIconDisabled = true,
  CartPress,
  cardShow = false,
}: any) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={onPress} disabled={!backIconDisabled}>
          <View style={styles.leftContainer}>
            {backIconDisabled == true && (
              <Feather name="chevron-left" size={20} color={"black"} />
            )}
            <Text style={styles.textStyle}>{title}</Text>
          </View>
        </TouchableOpacity>
        {cardShow == true && (
          <TouchableOpacity onPress={CartPress}>
            <View style={styles.rightContainer}>
              <Feather name="shopping-cart" size={20} color={"black"} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 55,
    width: "100%",
    backgroundColor: Colors.white(),
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    elevation: 5,
    zIndex: 3,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginStart: 8,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 10,
  },
  textStyle: {
    textAlign: "center",
    color: Colors.black(),
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 4,
  },
});

export default CommenHeader;
