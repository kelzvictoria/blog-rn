import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    //const [ id, setId ] = useState(initialValues.id)

    return <View style={styles.container}>
        <View style={styles.form}>
            <Text>Title</Text>
            <TextInput style={styles.input} onChangeText={(text) => setTitle(text)} value={title} />

            <Text>Content</Text>
            <TextInput style={styles.input} onChangeText={(text) => setContent(text)} value={content} />
            <Button title="Save" onPress={() => onSubmit({ title, content })} />
        </View>
    </View>
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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