import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const writing = () => {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newCommentContent, setNewCommentContent] = useState('');
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://yourapi.com/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to fetch posts');
    }
  };

  const handleAddPost = async () => {
    // Code to add a new post
  };

  const handleLike = async (postId) => {
    // Code to handle post likes
  };

  const handleAddComment = async (postId) => {
    try {
      const response = await fetch(`https://yourapi.com/posts/${postId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: newCommentContent,
        }),
      });

      if (!response.ok) throw new Error('Failed to add comment');

      setNewCommentContent('');
      fetchPosts(); // Refresh posts to show updated comments
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to add comment');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
      <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.likeButton}>
        <Text style={styles.likeText}>Like</Text>
      </TouchableOpacity>
      <Text style={styles.postInfo}>Likes: {item.likes}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNewCommentContent}
        value={newCommentContent}
        placeholder="Write a comment"
      />
      <Button title="Add Comment" onPress={() => handleAddComment(item.id)} />
      {/* Display comments */}
      {comments[item.id] && (
        <FlatList
          data={comments[item.id]}
          renderItem={({ item }) => <Text>{item.content}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Community Board</Text>
      <TextInput
        style={[styles.input, styles.titleInput]}
        onChangeText={setNewPostTitle}
        value={newPostTitle}
        placeholder="Title of your post"
      />
      <TextInput
        style={[styles.input, styles.contentInput]}
        onChangeText={setNewPostContent}
        value={newPostContent}
        placeholder="Content of your post"
        multiline
      />
      <Button title="Add Post" onPress={handleAddPost} />

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  likeButton: {
    backgroundColor: '#0080ff',
    padding: 5,
    marginTop: 5,
    width: 60,
  },
  likeText: {
    color: 'white',
    textAlign: 'center',
  },
  postInfo: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
  },
  titleInput: {
    height: 60, // 제목 입력 창의 높이 조정
    fontSize: 20, // 제목 입력 창의 글꼴 크기 조정
  },
  contentInput: {
    height: 120, // 내용 입력 창의 높이 조정
    fontSize: 16, // 내용 입력 창의 글꼴 크기 조정
  },
});

export default writing;