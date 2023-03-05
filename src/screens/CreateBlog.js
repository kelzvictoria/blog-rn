import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from "../context/BlogContext";
import { useNavigation } from '@react-navigation/native'
import BlogPostForm from "../components/BlogPostForm";

const CreateBlog = ({ route }) => {
    const { state, addBlogPost } = useContext(Context);
    // const [ title, setTitle ] = useState("")
    // const [ content, setContent ] = useState("")
    const navigation = useNavigation();

    const saveBlog = (payload) => {
        addBlogPost(payload);
        navigation.navigate("Home")
    }

    return <BlogPostForm 
    //title={title} content={content} setTitle={setTitle} setContent={setContent}
     onSubmit = {saveBlog} />
}

const styles = StyleSheet.create({
})

export default CreateBlog;