import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.messageIconBox}>
          <Text style={styles.messageIcon}>📩</Text>
        </View>
        <Text style={styles.navLogo}>Dyeing App</Text>
        <Image
          
          style={styles.userLogo}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardHeader}>Dyeing Notification</Text>
        <View style={styles.notificationList}>
          <View style={styles.notificationItem}>
            <Text style={styles.notificationIcon}>🔔</Text>
            <Text style={styles.notificationText}>Notification 1: This is a notification message.</Text>
          </View>
          <View style={styles.notificationItem}>
            <Text style={styles.notificationIcon}>🔔</Text>
            <Text style={styles.notificationText}>Notification 2: Another notification message.</Text>
          </View>
          {/* Add more Notifications as needed */}
        </View>
      </View>
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
  notificationList: {
    marginTop: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
  },
  notificationIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
});

export default Notifications;
