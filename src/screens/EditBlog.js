import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from "../context/BlogContext";
import { useNavigation } from '@react-navigation/native'
import BlogPostForm from "../components/BlogPostForm";

const EditBlog = ({ route }) => {
    const { state, editBlogPost } = useContext(Context);
    const navigation = useNavigation();

    const editBlog = (payload) => {
        editBlogPost(payload);
        navigation.navigate("Home")
    }

    return <BlogPostForm 
        id={route.params.id}
        onSubmit={editBlog}
    />
}

const styles = StyleSheet.create({

})

export default EditBlog;