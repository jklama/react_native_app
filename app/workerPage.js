import React from 'react';
import { View, Text, StyleSheet, Button, Table, Row, Card, CardItem } from 'react-native';

const WorkerPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.navText}>Header: Dyeing App</Text>
      </View>

      <Button title="Facebook-style Button" color="#1877f2" />

      <Table borderStyle={{ borderWidth: 1, borderColor: '#ddd' }}>
        <Row data={['ID', 'Name', 'Kg', 'Time Taken', 'Status']} style={styles.tableHeader} textStyle={styles.tableHeaderText} />
        <Row data={['1', 'Your Name', '5', '2 hours', 'Completed']} style={styles.tableRow} textStyle={styles.tableRowText} />
        {/* Add more rows as needed */}
      </Table>

      <Card style={styles.card}>
        <CardItem header style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>Left Work</Text>
        </CardItem>
        <CardItem style={styles.cardBody}>
          <View style={styles.cardBodyItem}>
            <Text>Name: John Doe</Text>
          </View>
          <View style={styles.cardBodyItem}>
            <Text>Status: In Progress</Text>
          </View>
          <View style={styles.cardBodyItem}>
            <Text>Message: This is an example message.</Text>
          </View>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  nav: {
    backgroundColor: '#1877f2',
    alignItems: 'center',
    padding: 10,
  },
  navText: {
    color: 'white',
    fontSize: 20,
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
  },
  tableHeaderText: {
    fontWeight: 'bold',
  },
  tableRow: {
    borderColor: '#ddd',
  },
  tableRowText: {
    padding: 8,
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    borderColor: '#ddd',
    elevation: 4,
  },
  cardHeader: {
    backgroundColor: '#1877f2',
    alignItems: 'center',
  },
  cardHeaderText: {
    color: 'white',
    fontSize: 18,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardBodyItem: {
    flex: 1,
  },
});

export default WorkerPage;
