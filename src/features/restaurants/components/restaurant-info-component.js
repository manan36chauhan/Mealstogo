import react from "react";
import { Text, Card } from "react-native-paper";
import { StyleSheet } from "react-native";

// import styled from "styled-component";
// const Title = styled.Text`
//   padding: 16px;
//   color: red;
// `;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "some restaurants",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2023/05/pizza-in-a-paper-box.jpg",
    ],
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      {/* <Title>{name}</Title> */}
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
