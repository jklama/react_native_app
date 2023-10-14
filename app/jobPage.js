import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';

const JobPage = () => {
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [messageModalVisible, setMessageModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => setUserModalVisible(true)}>
          <Image
            
            style={styles.userLogo}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMessageModalVisible(true)}>
          <View style={styles.messageIconBox}>
            <Text style={styles.messageIcon}>📩</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.navLogo}>Dyeing App</Text>
      </View>

      {/* User Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={userModalVisible}
        onRequestClose={() => setUserModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Add user-related content here */}
            <Text>User Information</Text>
            <TouchableOpacity onPress={() => setUserModalVisible(false)}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Message Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={messageModalVisible}
        onRequestClose={() => setMessageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Add message-related content here */}
            <Text>Messages</Text>
            <TouchableOpacity onPress={() => setMessageModalVisible(false)}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Rest of your content */}
      {/* ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1877f2',
    padding: 10,
  },
  messageIconBox: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 5,
  },
  messageIcon: {
    fontSize: 24,
    color: '#1877f2',
  },
  navLogo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  userLogo: {
    width: 40,
    height: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeModalText: {
    color: 'blue',
    marginTop: 10,
  },
});

export default JobPage;
