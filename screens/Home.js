import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

function index({ navigation }) {
    return (
        <View style={styles.btn}>
            <Button
                title="Screen2_a"
                onPress={() => navigation.navigate("Screen2_a")} />
            <Button
                title="Screen2_b"
                onPress={() => navigation.navigate("Screen2_b")}
            />
            <Button
                title="Screen2_c"
                onPress={() => navigation.navigate("Screen2_c")} />
            <Button
                title="ScreenTiki_Ok"
                onPress={() => navigation.navigate("ScreenTiki_Ok")} />
            <Button
                title="ScreenTong2So"
                onPress={() => navigation.navigate("ScreenTong2So")} />
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: '25%',
        textAlign: "center",
        width: "50%",
        height: 100
    },
});

export default index;