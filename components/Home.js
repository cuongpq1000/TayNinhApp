import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Pressable, Alert, ImageBackground} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView, SafeAreaView, StatusBar} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-elements";

const Home = ({navigation}) => {
    // useEffect(() => {
    //     await axios.post()
    // },[]
    // )
    const state = {
        images: [
          "https://trangbang.vn/wp-content/uploads/2023/01/b1.jpg",
          "https://trangbang.vn/wp-content/uploads/2023/01/b2.4.jpg",
          "https://trangbang.vn/wp-content/uploads/2023/01/FARMSTAY.jpg",
        ]
      };
    const getEvent = async () => {
        try {

        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <ScrollView styles={{flex: 1}}>
            <SliderBox images={state.images} />
            <Text style={styles.title}>Nổi bật</Text>

            <View style={styles.wrapper}>
                <TouchableOpacity style={[styles.box, {backgroundColor: 'skyblue'}]} onPress={() => Alert.alert('Product under development')}>
                    <Icon name="md-restaurant-outline" size={60} style={styles.icon} />
                    <Text style = {{alignSelf: 'center', marginBottom: 5, color: 'white'}}>Ẩm thực</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box, {backgroundColor: 'skyblue'}]} onPress={() => Alert.alert('Product under development')}>
                    <Icon name="bed-outline" size={60} style={styles.icon} />
                    <Text style = {{alignSelf: 'center', marginBottom: 5, color: 'white'}}>Lưu trú</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box, {backgroundColor: 'skyblue'}]} onPress={() => Alert.alert('Product under development')}>
                    <MaterialIcons name="place" size={60} style={styles.icon}></MaterialIcons>
                    <Text style = {{alignSelf: 'center', marginBottom: 5, color: 'white'}}>Tham quan</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.wrapper1}>
                <TouchableOpacity style={[styles.box, {backgroundColor: 'skyblue'}]} onPress={() => Alert.alert('Product under development')}>
                    <Ionicons name="ios-cart-outline" size={60} style={styles.icon}></Ionicons>
                    <Text style = {{alignSelf: 'center', marginBottom: 5, color: 'white'}}>Mua sắm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box, {backgroundColor: 'skyblue'}]} onPress={() => Alert.alert('Product under development')}>
                    <Icon name="ios-bus-outline" size={60} style={styles.icon} />
                    <Text style = {{alignSelf: 'center', marginBottom: 5, color: 'white'}}>Tiện ích</Text>
                </TouchableOpacity>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, }}>
                <Text style={styles.title}>Sự kiện</Text>
                    <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Event')}
                    style={styles.button}>
                        <Text>Xem thêm</Text>
                    </TouchableOpacity>
			</View>

            <View style={styles.new_wraper}>
                <Pressable onPress={() => Alert.alert('Product under development')} style={{width: '100%'}}>
                    <ImageBackground
                    source={{
                        uri: 'https://trangbang.vn//wp-content//uploads//2023//02//hinh-2-1647516018088-1647516863382-8470.jpg',
                    }}
                    style={styles.image}
                    >
                        <View style={{flex: 1, display: 'flex',justifyContent: 'center',backgroundColor: 'rgba(0,0,0,0.4)',}}>
                            <Text style={{fontSize: 15, color: 'white'}}>Trảng Bàng, thông xe cầu An Phước nổi đôi bờ sông Vàm Cỏ Đông</Text>
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>

            <View style={styles.new_wraper}>
                <Text style={styles.title}>Khám phá</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Discover')} 
                    style={styles.button}>
                        <Text>Xem thêm</Text>
                    </TouchableOpacity>
			</View>

            <View style={styles.new_wraper}>
                <Pressable onPress={() => Alert.alert('Product under development')} style={{width: '100%'}}>
                    <ImageBackground
                    source={{
                        uri: 'https://trangbang.vn//wp-content//uploads//2023//02//ngoc-suong-1.jpg',
                    }}
                    style={styles.image}
                    >
                        <View style={{flex: 1, display: 'flex',justifyContent: 'center',backgroundColor: 'rgba(0,0,0,0.4)',}}>
                            <Text style={{fontSize: 15, color: 'white'}}>Quán Cafe Ngọc Sương</Text>
                        </View>
                    </ImageBackground>
                </Pressable>
            </View>

            

        </ScrollView>   
    )
};
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        marginHorizontal: 10
    },
    text: {
        alignSelf:'bottom'
    },
    image: {
        height: 200,
        borderRadius: 20,
        resizeMode: "cover",
    },
    card: {
        marginLeft: 20,
        borderRadius: 10,
        width: 100,
        height: 100,
        justifyContent: "space-between"
    },
    new_wraper: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 20,
    },   
    button: {
		justifyContent: 'right',
		borderRadius: 10,
		alignItems: "center",
		backgroundColor: "#C8C8C8",
		padding: 10,
		width: 150,
        height: 40,
        marginRight: 12,
        marginTop: 15,
    },
    icon: {
        color: 'white',
        alignSelf: 'center'
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 22
    },
    wrapper1: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 22
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 12,
        fontSize: 22,
        marginBottom: 15,
        marginTop: 25,
        color: 'skyblue'
    },
    box: {
        marginLeft: 20,
        borderRadius: 10,
        width: 100,
        height: 100,
        justifyContent: "space-between"
    },
});
export default Home;