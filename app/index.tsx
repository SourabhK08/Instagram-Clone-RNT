import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sourabh</Text>

      <TouchableOpacity onPress={() => alert('pressed')}>
        <Text>Presss</Text>
      </TouchableOpacity>
    </View>
  );
}
