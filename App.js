import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View >
      <Text style={{fontSize:30}}>hello krishna this is my first App</Text>
      <Button title='Press here'></Button>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
       defaultValue='type here' />
      <StatusBar style="auto" />
    </View>
  );
}

// src/components/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BarChart } from 'react-d3-graph';

// const Dashboard = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/data') // Adjust the API endpoint accordingly
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   // Implement your D3.js chart here

//   const chartConfig = {
//     nodeHighlightBehavior: true,
//     width: 800,
//     height: 400,
//     directed: true,
//     node: {
//       color: 'lightblue',
//       size: 120,
//       highlightStrokeColor: 'blue',
//     },
//     link: {
//       highlightColor: 'lightblue',
//     },
//   };

//   return (
//     <div>
//       <h1>Data Visualization Dashboard</h1>
//       <BarChart
//         id="graph-id" // id is mandatory, otherwise, it won't render
//         data={yourData} // Replace with your actual data
//         config={chartConfig}
//       />
//     </div>
//   );
// };

// export default Dashboard;

