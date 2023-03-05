import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Context } from "../context/BlogContext"

const ShowBlog = ({ route }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(b => b.id === parseInt(route.params.id))
    return <View style={styles.container}>
        <Text style={{
            fontSize: 16, 
            fontWeight: 'bold', 
            marginVertical: 15}}
        >{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 15
    }
})

export default ShowBlog;