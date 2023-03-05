import React, { useContext } from "react";
import { StyleSheet } from 'react-native'
import { Context } from "../context/BlogContext";
import { useNavigation } from '@react-navigation/native'
import BlogPostForm from "../components/BlogPostForm";

const CreateBlog = ({ route }) => {
    const { addBlogPost } = useContext(Context);
    const navigation = useNavigation();

    const saveBlog = (payload) => {
        addBlogPost(payload);
        navigation.navigate("Home")
    }

    return <BlogPostForm 
     onSubmit = {saveBlog} />
}

const styles = StyleSheet.create({
})

export default CreateBlog;