import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const MyPage = () => {
  const showFullPage = (section) => {
    // Implement your code to show the full page for the selected section here
    alert(`You clicked on ${section}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appHeader}>
        <Text style={styles.headerText}>Top Dyeing App</Text>
      </View>
      <View style={styles.cameraButton}>
        <Button title="Take Picture" onPress={() => alert('Picture taken and stored!')} />
      </View>
      <View style={styles.hotspotButton}>
        <Button title="Hotspot" onPress={() => alert('Hotspot activated!')} />
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={styles.history} onPress={() => showFullPage('History')}>
          <Text style={styles.historyText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.today} onPress={() => showFullPage('Today')}>
          <Text style={styles.todayText}>Today</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <Text style={styles.listHeader}>Left Heading</Text>
        <View style={styles.listItem}>
          <Text>List Item 1</Text>
        </View>
        <View style={styles.listItem}>
          <Text>List Item 2</Text>
        </View>
        <View style={styles.listItem}>
          <Text>List Item 3</Text>
        </View>
        {/* Add more list items as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appHeader: {
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
  },
  cameraButton: {
    // Add styles for the camera button
  },
  hotspotButton: {
    height: '20%',
    // Add styles for the hotspot button
  },
  box: {
    flexDirection: 'row',
    height: '40%',
    backgroundColor: 'red',
  },
  history: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  today: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyText: {
    fontSize: 18,
  },
  todayText: {
    fontSize: 18,
  },
  list: {
    // Add styles for the list
  },
  listHeader: {
    fontSize: 20,
    marginLeft: 20,
  },
  listItem: {
    marginLeft: 20,
    marginBottom: 5,
    // Add styles for list items
  },
});

export default MyPage;
