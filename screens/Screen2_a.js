import {View, Text, Image, StyleSheet, TextInput,TouchableOpacity} from "react-native";
import { useState } from "react";

function Screen2_a() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.viewLogin}>
                <Text style={styles.textTitle}>LOGIN</Text>
            </View>
            <View style={styles.viewInput}>
                <View style={styles.viewInputName}>
                    <Image
                        style={styles.iconUser}
                        source={require("../assets/avatar_user.png")}
                    />
                    <TextInput style={styles.textInput} placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}></TextInput>
                </View>
                <View style={styles.viewInputPassword}>
                    <Image
                        style={styles.iconLock}
                        source={require("../assets/lock.png")}
                    />
                    <TextInput style={styles.textInput} placeholder="Password"
                        value={password}
                        secureTextEntry={!showPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        passwordRules=".*"></TextInput>
                    <TouchableOpacity
                        // style={styles.wrap_icon_right}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                        style={styles.iconEye}
                        source={require("../assets/eye.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.btn} 
                        onPress={() =>alert(`Đã đăng nhập với:  Name:${name}, và Password: ${password}`)}>
                    <Text style={styles.btnLogin}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLink}>
                    <Text style={styles.textLink}>Forgot your password ?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)',
    },
    viewLogin: {
        flex: 1,
        justifyContent: "center",
    },
    viewInput: {
        flex: 1,
    },
    viewButton: {
        flex: 2,
    },
    textTitle: {
        fontWeight: 700,
        fontSize: 30,
        lineHeight: 36,
    },
    viewInputName: {

    },
    iconUser: {
        width: 32,
        height: 32,
        position: "absolute",
        left: 24,
        top: 10,
        marginTop: 10,
    },
    iconLock: {
        left: 24,
        width: 32,
        height: 32,
        position: "absolute",
        left: 22,
        top: 10,
        marginTop: 10,
    },
    iconEye: {
        right: 25,
        top: -60,
        width: 32,
        height: 32,
        position: "absolute",
    },
    textInput: {
        height: 54,
        margin: 12,
        backgroundColor: "#DEBE3B",
        borderWidth: 1,
        padding: 10,
        paddingLeft: 50,
        borderRadius: 8,
        fontSize: 18,
    },
    btn: {
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        height: 50,
        margin: 12,
        paddingVertical: 20,
        marginTop: 100,
    },
    btnLogin: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 700
    },
    btnLink: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    textLink: {
        fontSize: 20,
        fontWeight: 700,
    }
});

export default Screen2_a;