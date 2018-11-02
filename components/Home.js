import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Home';

class Home extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Home'
    }
    render() {
        return (
        <View style={styles.view}>
            <Text style={styles.header} onPress={() => this.props.navigation.toggleDrawer()}> 
                HomePage
            </Text>
        </View>
        )
    }
}
export default Home;