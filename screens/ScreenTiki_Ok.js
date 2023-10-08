import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { useState } from "react";

function ScreenTiki_Ok(){
    const [quantity, setQuantity] = useState(0); 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_on}>
                    <Image
                        style={styles.img_product}
                        source={require("../assets/book.png")}
                    />
                    <View style={styles.header_right}>
                        <Text style={styles.titleProduct}>Nguyên hàm tích phân và thuyết tương đối</Text>
                        <Text style={styles.supplier}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.price}>141.800 đ</Text>
                        <Text style={styles.old_price}>283.600 đ</Text>
                        <View style={styles.header_right_bottom}>
                            <View style={styles.changeQuantity}>
                                <TouchableOpacity style={[styles.btn, ]}
                                    onPress={() =>setQuantity(quantity-1)}
                                    disabled={quantity <= 0}
                                > 
                                    <Image
                                        style={styles.btnIcon}
                                        source={require("../assets/btnminus.png")}
                                    ></Image>
                                </TouchableOpacity>
                                <Text style={styles.quantity}> {quantity} </Text>
                                <TouchableOpacity style={styles.btn}
                                    onPress={() => setQuantity(quantity+1)}
                                >
                                    <Image
                                        style={styles.btnIcon}
                                        source={require("../assets/btnadd.png")}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.blueText}> Mua sau </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.header_under}>
                    <View style={styles.header_under_first}>
                        <Text style={styles.header_under_text1}>
                            Mã giảm giá đã lưu
                        </Text>

                        <TouchableOpacity style={styles.btnLink}>
                            <Text
                                style={[
                                    styles.header_under_text2,
                                    styles.blueText,
                                ]}
                            >Xem tại đây</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.header_under_second}>
                        <View style={styles.wrap1}>
                            <View
                                style={{
                                    width: 32,
                                    height: 16,
                                    backgroundColor: "#F2DD1B",
                                    marginRight: 5,
                                }}
                            />
                            <Text style={styles.header_under_second_text}>Mã giảm giá</Text>
                        </View>
                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.btnText}> Áp dụng </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View>
                    <View style={styles.body_on}>
                        <Text style={{
                            fontWeight: 700
                        }}> 
                            Bạn có phiếu quà tặng Tiki/Got it/ Urbox ? 
                            
                            <TouchableOpacity style={styles.btnLink}>
                                <Text
                                    style={styles.blueText}>Nhập tại đây</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                    <View style={[styles.body_on, {justifyContent: 'space-between'}]}>
                        <Text style={{
                            fontSize: 20, 
                            fontWeight: 700}}
                        > Tạm tính </Text>
                        <Text style={{
                            fontSize: 20, 
                            fontWeight: 700,
                            color: 'red'
                        }}
                        > {141800*quantity} đ </Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={[styles.body_on, {justifyContent: 'space-between'}]}>
                        <Text style={{
                            fontSize: 20, 
                            fontWeight: 700,
                            opacity: 0.7
                        }}
                        > Thành tiền </Text>
                        <Text style={{
                            fontSize: 20, 
                            fontWeight: 700,
                            color: 'red'
                        }}
                        > {141800*quantity} đ </Text>
                    </View>
                    
                    <TouchableOpacity style={styles.btn2} 
                        onPress={() =>alert(`Bạn chọn mua ${quantity} sản phẩm`)}
                        >
                        <Text style={[styles.textBtn, {fontSize: 20}]}> TIẾN HÀNH ĐẶT HÀNG </Text>
                    </TouchableOpacity>
                </View>           
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#C4C4C4",
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        backgroundColor: "#fff",
        width: "100%",
        flex: 3,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
        overflow: "hidden",
    },
    header_on: { 
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    img_product: {
        width: 104,
        height: 127,
        marginRight: 20,
    },
    header_right: {
        flex: 1,
        height: 100,
        padding: 10,
        paddingTop: 0,
        justifyContent: "space-between",
    },
    titleProduct: {
        fontWeight: 700,
        fontSize: 12,
    },
    supplier: {
        fontWeight:700,
        fontSize: 14,
    },
    price: {
        fontWeight: 700,
        fontSize: 18,
        color: "red",
    },
    old_price: {
        textDecorationLine: "line-through",
        color: "#808080",
        fontWeight: 700
    },
    header_right_bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    changeQuantity: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    btn: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    btnIcon: {
        width: 20,
        height: 20,
    },
    quantity: {
        fontSize: 15,
        fontWeight: 700,
        paddingHorizontal: 6,
    },
    blueText: {
        color: "#134FEC",
        fontWeight: 700, 
        fontSize: 12,
    },
    header_under: {
        width: "100%",
        height: 100,
        paddingVertical: 20,
        justifyContent: "space-between",
    },
    header_under_first: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: 40,
    },
    header_under_text1: {
        fontSize: 12,
        paddingRight: 30,
        fontWeight: 700,
    },
    header_under_text2: {
        fontSize: 12,
        fontWeight: 700,
    },
    header_under_second: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    wrap1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#000", 
        borderWidth: 1,
        padding: 12,
        
    },
    header_under_second_text: {
        fontSize: 18,
        fontWeight: 700,
    },
    btn1: {
        backgroundColor: "#00f",
        borderRadius: 4,
        height: 50,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20, 
        fontWeight: 700,
    },
    btnText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 700, 
    },
    
    body: {
        flex: 4, 
        justifyContent: 'space-between',
    },  

    body_on: { 
        width: '100vw', 
        height: 50, 
        backgroundColor: '#fff', 
        marginTop: 18, 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems :'center', 
        padding: 20,
    },  
    footer: {
        backgroundColor: 'blue', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#fff'
    },
    btn2: {
        backgroundColor: 'red', 
        width: '90%', 
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 12,
        borderRadius: 4, 
    },
});
export default ScreenTiki_Ok;