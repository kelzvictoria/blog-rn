import React, { useContext, useEffect, } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native'
import { Context} from "../context/BlogContext";
import { Feather, FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const Home = () => {
    const { state, getBlogPosts, deleteBlogPost } = useContext(Context);
    const navigation = useNavigation()

    useEffect(() => {
        getBlogPosts()
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts()
        })
        return () => {
            listener.remove()
        }
    }, [])

    return (
        <View style={styles.container} >
            <FlatList 
                data={state}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => (
                    <TouchableOpacity
                     style={styles.row}
                     onPress={() => navigation.navigate("Blog", {
                        id: item.id
                     }) }
                     >
                        <Text>{item.title}</Text> 
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name="trash" style={styles.icon} />
                            </TouchableOpacity>   
                            <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: item.id })}>
                                <FontAwesome name="edit" style={styles.icon} />
                            </TouchableOpacity> 
                        </View>
                        
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderTopWidth:1,
        borderColor: "#ccc"
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 22,
        marginLeft: 10
    },
    container: {
       backgroundColor: "white",
       flex: 1 
    },
    iconsContainer: {
        flexDirection: 'row'
    }
})

export default Home