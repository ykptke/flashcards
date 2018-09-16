import React from 'react';
import { ActivityIndicator } from 'react-native';

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#464646" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EDDF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
