import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import Products from "../../services/Products";

function ProductDetail({ navigation, route }) {
  const { idProduct } = route.params;
  const product = Products.filter((item) => item.id === idProduct)[0];

  return (
    <View style={styles.container}>
      <Header onBack={() => navigation.goBack()} title="Detail"></Header>
      <View style={styles.content}>
        <View style={styles.item}>
          <Text style={styles.header}>Tên:</Text>
          <Text style={styles.info}>{product.name}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Mô tả:</Text>
          <Text style={styles.info}>{product.details}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Chi tiết:</Text>
          <Text style={styles.info}>{product.detailedescription}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Thời gian:</Text>
          <Text style={styles.info}>{product.time}</Text>
        </View>
      </View>
    </View>
  );
}

export default ProductDetail;
