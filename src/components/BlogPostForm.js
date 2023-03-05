import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Context } from "../context/BlogContext";

const BlogPostForm = ({/*title, content, setTitle, setContent,*/ id, onSubmit }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { state, addBlogPost, editBlogPost } = useContext(Context);
    

    useEffect(() => {
        if (id) {
            const blogPost = state.find(b => b.id === parseInt(id))
            setTitle(blogPost.title);
            setContent(blogPost.content)
        }

    }, [])

    const save = (payload) => {
        let finalData = {}
        if(id){
            finalData["id"] = id
            //console.log(finalData);
        }
        finalData = { ...finalData, ...payload }
        onSubmit(finalData)
    }

    return <View style={styles.container}>
        <View style={styles.form}>
            <Text>Title</Text>
            <TextInput style={styles.input} onChangeText={(text) => setTitle(text)} value={title} />

            <Text>Content</Text>
            <TextInput style={styles.input} onChangeText={(text) => setContent(text)} value={content} />
            <Button title="Save" onPress={() => save({ title, content })} />
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

export default BlogPostForm;