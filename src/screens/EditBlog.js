import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from "../context/BlogContext";
import { useNavigation } from '@react-navigation/native'

const EditBlog = ({ route }) => {
    const { state, editBlogPost } = useContext(Context);
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")
    const navigation = useNavigation();

    const editBlog = (payload) => {
        editBlogPost(payload);
        navigation.navigate("Home")
    }

    useEffect(() => {
        const blogPost = state.find(b => b.id === parseInt(route.params.id))
        setTitle(blogPost.title);
        setContent(blogPost.content)
    }, [])

    return <View style={styles.container}>
        <View style={styles.form}>
            <Text>Title</Text>
            <TextInput style={styles.input} onChangeText={(text) => setTitle(text)} value={title} />

            <Text>Content</Text>
            <TextInput style={styles.input} onChangeText={(text) => setContent(text)} value={content} />
            <Button title="Save" onPress={() => editBlog({title, content, id: route.params.id})} />
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

export default EditBlog;