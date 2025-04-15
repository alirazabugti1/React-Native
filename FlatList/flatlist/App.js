//Flat list
// import { Text, SafeAreaView, StyleSheet,FlatList,View, styleSheet } from 'react-native';


// export default function App() {
//   const array=[
//     {id:'1', item:'Ali'},
//     {id:'2', item:'Raza'},
//     {id:'3', item:'Bugti'},
//     {id:'4', item:'Saif'},
//     {id:'5', item:'Rehman'},

//   ];
// return (
//     <View >
//       <FlatList contentContainerStyle={{flexGrow:1,justifyContent:'center',alignItems:'center'}}
//         data={array}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View >
//             <Text>{item.item}</Text>
//           </View>
//         )}
       
//       />
//     </View>
//   );
// }
//Section list
import { Text, SafeAreaView, StyleSheet, SectionList, View } from 'react-native';

export default function App() {
  const listItems = [
    {
      title: 'Fruits',
      data: [
        { id: '1', name: 'Apple' },
        { id: '2', name: 'Mango' },
        { id: '3', name: 'Banana' },
      ],
    },
    {
      title: 'Vegetables',
      data: [
        { id: '4', name: 'Tomato' },
        { id: '5', name: 'Potato' },
        { id: '6', name: 'Carrot' },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={listItems}
        keyExtractor={(item) => item.id}
        renderItem={({item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#ddd',
    padding: 5,
  },
  item: {
    fontSize: 16,
    padding: 5,
  },
});
