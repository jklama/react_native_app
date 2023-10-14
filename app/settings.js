import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';

const Settings = () => {
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);
  const [isFilesModalVisible, setFilesModalVisible] = useState(false);
  const [isCameraModalVisible, setCameraModalVisible] = useState(false);
  const [isPhoneModalVisible, setPhoneModalVisible] = useState(false);

  const openModal = (modalName) => {
    switch (modalName) {
      case 'Settings':
        setSettingsModalVisible(true);
        break;
      case 'Files':
        setFilesModalVisible(true);
        break;
      case 'Camera':
        setCameraModalVisible(true);
        break;
      case 'Phone':
        setPhoneModalVisible(true);
        break;
      default:
        break;
    }
  };

  const closeModal = (modalName) => {
    switch (modalName) {
      case 'Settings':
        setSettingsModalVisible(false);
        break;
      case 'Files':
        setFilesModalVisible(false);
        break;
      case 'Camera':
        setCameraModalVisible(false);
        break;
      case 'Phone':
        setPhoneModalVisible(false);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image style={styles.userLogo} />
        <Text style={styles.navLogo}>Dyeing App</Text>
        <TouchableOpacity onPress={() => openModal('Settings')}>
          <View style={styles.messageIconBox}>
            <Text style={styles.messageIcon}>📩</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardHeader}>Menu</Text>
        <TouchableOpacity onPress={() => openModal('Settings')} style={styles.menuItem}>
          <Text style={styles.menuIcon}>⚙️</Text>
          <Text style={styles.menuName}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openModal('Files')} style={styles.menuItem}>
          <Text style={styles.menuIcon}>📁</Text>
          <Text style={styles.menuName}>Files</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openModal('Camera')} style={styles.menuItem}>
          <Text style={styles.menuIcon}>📷</Text>
          <Text style={styles.menuName}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openModal('Phone')} style={styles.menuItem}>
          <Text style={styles.menuIcon}>📞</Text>
          <Text style={styles.menuName}>Phone</Text>
        </TouchableOpacity>
      </View>

      {/* Modals */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSettingsModalVisible}
        onRequestClose={() => closeModal('Settings')}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Settings Modal</Text>
            <TouchableOpacity onPress={() => closeModal('Settings')} style={styles.closeModalButton}>
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isFilesModalVisible}
        onRequestClose={() => closeModal('Files')}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Files Modal</Text>
            <TouchableOpacity onPress={() => closeModal('Files')} style={styles.closeModalButton}>
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isCameraModalVisible}
        onRequestClose={() => closeModal('Camera')}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Camera Modal</Text>
            <TouchableOpacity onPress={() => closeModal('Camera')} style={styles.closeModalButton}>
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isPhoneModalVisible}
        onRequestClose={() => closeModal('Phone')}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Phone Modal</Text>
            <TouchableOpacity onPress={() => closeModal('Phone')} style={styles.closeModalButton}>
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1877f2', // Facebook blue
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
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 20,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    backgroundColor: '#1877f2', // Facebook blue
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 5,
    cursor: 'pointer',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  menuName: {
    flex: 1,
  },
  /* Styles for modals */
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
  closeModalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#1877f2',
    borderRadius: 5,
  },
  closeModalButtonText: {
    color: 'white',
  },
});

export default Settings;
