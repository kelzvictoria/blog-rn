import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from "../context/BlogContext";
import { useNavigation } from '@react-navigation/native'
import BlogPostForm from "../components/BlogPostForm";

const EditBlog = ({ route }) => {
    const { state, editBlogPost } = useContext(Context);
    // const [ title, setTitle ] = useState("")
    // const [ content, setContent ] = useState("")
    const navigation = useNavigation();

    const editBlog = (payload) => {
        editBlogPost(payload);
        navigation.navigate("Home")
    }

    // useEffect(() => {
    //     const blogPost = state.find(b => b.id === parseInt(route.params.id))
    //     setTitle(blogPost.title);
    //     setContent(blogPost.content)
    // }, [])

    return <BlogPostForm 
        // setTitle={setTitle} 
        // setContent={setContent} 
        // title={title}  
        // content={content}
        id={route.params.id}
        onSubmit={editBlog}
    />
}

const styles = StyleSheet.create({

})

export default EditBlog;