import {View, Text, Image, StyleSheet, TextInput,TouchableOpacity} from "react-native";
import { useState } from "react";

function Screen2_b() {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
           <View style={styles.viewHeader}> 
                <Image style={styles.imageProduct} source={require('../assets/usb.png')} />
                    <Text style={styles.textProduct}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
                </View>
           <View style={styles.viewBottom}>
                <Text style={styles.review}> Cực kỳ hài lòng </Text>
                <View style={styles.rate}>
                    <Image
                        style={styles.star}
                        source={require("../assets/star.png")}
                    />
                    <Image
                        style={styles.star}
                        source={require("../assets/star.png")}
                    />
                    <Image
                        style={styles.star}
                        source={require("../assets/star.png")}
                    />
                    <Image
                        style={styles.star}
                        source={require("../assets/star.png")}
                    />
                    <Image
                        style={styles.star}
                        source={require("../assets/star.png")}
                    />
                </View>
                <TouchableOpacity style={styles.addImage}>
                    <Image
                        style={styles.iconCamera}
                        source={require("../assets/camera.png")}
                    />
                    <Text style={styles.text_AddImage}> Thêm hình ảnh </Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.textReview}
                    placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm"
                    multiline={true}
                    placeholderTextColor="gray"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => input && alert(`Đã gửi đánh giá: ${input}`)}
                >
                    <Text style={styles.buttonText}> Gửi </Text>
                </TouchableOpacity>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    viewHeader: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageProduct: {
        width: 70,
        height: 70
    },
    textProduct: {
        width: 260,
        marginLeft: 10,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 16,
        lineheight: 18.75,
    },
    viewBottom: {
        flex: 4,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    review: {
        fontWeight: 700,
        fontSize: 18,
    },
    rate: {
        flex: 1,
        flexDirection: "row",
        padding: 20,
    },

    star: {
        width: 39,
        height: 39,
        margin: 8,
    },
    addImage: {
        flexDirection: "row",
        borderRadius: 5,
        borderStyle: "solid",
        borderColor: "#1511eb",
        borderWidth: 1,
        paddingVertical: 16,
        width: 300,
        justifyContent: "center",
    },
    iconCamera: {
        width: 39,
        height: 32,
    },
    text_AddImage: {
        textAlign: "center",
        lineHeight: 32,
        fontSize: 18,
        fontWeight: 700,
    },
    textReview: {
        width: 300,
        height: 220,
        borderRadius: 5,
        justifyContent: "flex-start",
        borderColor: "#ABABAB",
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        backgroundColor: "#F2F2F2"
    },

    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        width: 280,
    },
});

export default Screen2_b;