import { StyleSheet, Text, View, FlatList } from 'react-native';

// Sample contact data
const contactsData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '(555) 987-6543'
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    phone: '(555) 456-7890'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '(555) 789-0123'
  },
  {
    id: '5',
    name: 'Michael Wilson',
    email: 'michael.wilson@example.com',
    phone: '(555) 321-6547'
  }
];

// Component for individual contact card
const ContactCard = ({ name, email, phone }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.info}>{email}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.info}>{phone}</Text>
    </View>
  </View>
);

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <FlatList
        data={contactsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactCard name={item.name} email={item.email} phone={item.phone} />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontSize: 16,
    color: '#666',
    width: 60,
  },
  info: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});