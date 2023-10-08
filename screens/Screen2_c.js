import {View, Text, Image, StyleSheet, TextInput,TouchableOpacity} from "react-native";
import { useState } from "react";
import { Checkbox } from 'react-native-paper';

function Screen2_c() {
    var [length, setLength] = useState('')
    var [checkLowerCase, setCheckLowerCase] = useState(false)
    var [checkUpcase, setCheckUpcase] = useState(false)
    var [checkNumber, setCheckNumber] = useState(false)
    var [checkSpecialSymbol, setCheckSpecialSymbol] = useState(false)
    var [password, setPassword] = useState('')
    var charset = ''

    return (
        <View style={styles.container}>
            <View style={styles.childContainer}>
                <View style={styles.viewTitle}>
                    <Text style={styles.textTitle}>PASSWORD GENERATOR</Text>
                </View>
                <View style={styles.viewPassword}>
                    <TextInput style={styles.textPassword} editable={false} value={password} />
                </View>
                <View style={styles.viewOption}>
                    <View style={styles.viewOptionItem}>
                        <Text style={styles.textOption}>Password length</Text>
                        <TextInput style={styles.textInputLength} value={length} onChangeText={setLength}/>
                    </View>
                    <View style={styles.viewOptionItem}>
                        <Text style={styles.textOption}>Include lower case letters</Text>
                        <Checkbox style={styles.checkbox}
                            color={'white'}
                            uncheckedColor='white'
                            status={checkLowerCase ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckLowerCase(!checkLowerCase);
                            }}
                        />
                    </View>
                    <View style={styles.viewOptionItem}>
                        <Text style={styles.textOption}>Include upcase letters</Text>
                        <Checkbox
                            color={'white'}
                            uncheckedColor='white'
                            status={checkUpcase ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckUpcase(!checkUpcase);
                            }}
                        />
                    </View>
                    <View style={styles.viewOptionItem}>
                        <Text style={styles.textOption}>Include number</Text>
                        <Checkbox
                            color={'white'}
                            uncheckedColor='white'
                            status={checkNumber ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckNumber(!checkNumber);
                            }}
                        />
                    </View>
                    <View style={styles.viewOptionItem}>
                        <Text style={styles.textOption}>Include special symbol</Text>
                        <Checkbox
                            color={'white'}
                            uncheckedColor='white'
                            status={checkSpecialSymbol ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckSpecialSymbol(!checkSpecialSymbol);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.buttonGenerate} onPress={() => {
                        password=''
                        if(checkLowerCase) charset+='abcdefghijklmnopqrstuvwxyz'
                        if(checkUpcase) charset+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                        if(checkNumber) charset+='0123456789'
                        if(checkSpecialSymbol) charset+='~`!@#$%^&*()_+-=|\{}[]:;<>?,./'
                        for (let i = 0; i < length; i++) {
                            password+=charset.charAt(Math.floor(Math.random() * charset.length));
                        }
                        setPassword(password);
                    }}>
                        <Text style={styles.textGenerate}>GENERATE PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    childContainer: {
        flex: 1,
        width: '90%',
        marginVertical: '5%',
        backgroundColor: '#23235B',

    },
    viewTitle: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        width: '56%',
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 700,
        lineHeight: 29,
        color: 'white',
        textAlign: 'center'
    },
    viewPassword: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textPassword: {
        width: '92%',
        height: '70%',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 700,
        backgroundColor: '#151537',
        color: 'white',
        paddingHorizontal: 10
    },
    viewOption: {
        flex: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewOptionItem: {
        flex: 1,
        width: '92%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    // checkbox: {
    //     backgroundColor: 'white',
    //     color: 'white',
    //     uncheckedColor: 'white'
    // },
    textOption: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 23.44,
        color: 'white'
    },
    textInputLength: {
        width: '40%',
        height: '60%',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 700,
        paddingHorizontal: 10
    },
    viewButton: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonGenerate: {
        width: '84%',
        height: '70%',
        backgroundColor: '#3B3B98',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textGenerate: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 21.09,
        color: '#FFFFFF'
    }
})
export default Screen2_c;