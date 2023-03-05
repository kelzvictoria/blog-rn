import React, { useContext } from "react";
import { StyleSheet } from 'react-native'
import { Context } from "../context/BlogContext";
import { useNavigation } from '@react-navigation/native'
import BlogPostForm from "../components/BlogPostForm";

const EditBlog = ({ route }) => {
    const id = route.params.id;
    const { state, editBlogPost } = useContext(Context);
    const navigation = useNavigation();

    const blogPost = state.find(b => b.id === id );

    const editBlog = (payload) => {
        editBlogPost({ ...payload, id });
        navigation.pop()//navigate("Home")
    }

    return <BlogPostForm 
        initialValues={blogPost}
        onSubmit={editBlog}
    />
}

const styles = StyleSheet.create({

})

export default EditBlog;