import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from "../context/BlogContext";
import { useNavigation } from '@react-navigation/native'

const CreateBlog = ({ route }) => {
    const { state, addBlogPost } = useContext(Context);
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")
    const navigation = useNavigation();

    const saveBlog = (payload) => {
        addBlogPost(payload);
        navigation.navigate("Home")
    }

    return <View style={styles.container}>
        <View style={styles.form}>
            <Text>Title</Text>
            <TextInput style={styles.input} onChangeText={(text) => setTitle(text)} value={title} />

            <Text>Content</Text>
            <TextInput style={styles.input} onChangeText={(text) => setContent(text)} value={content} />
            <Button title="Save" onPress={() => saveBlog({title, content})} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    input: {
        height: 30,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 15,
        marginTop: 5,
        borderRadius: 5,
        paddingHorizontal: 5
    },
    form: {
        margin: 15
    }
})

export default CreateBlog;