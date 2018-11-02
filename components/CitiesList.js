import React, { PureComponent } from 'react';
import styles from '../styles/CitiesList';
import { ScrollView, Text } from 'react-native';
import CityItem from './CityItem';

class CitiesList extends PureComponent {
    static navigationOptions = {
        drawerLabel: 'Cities'
    }

    state = {
        list: [
            {
                id: 1,
                name: "San Francisco",
                country: "United States",
                population: "884,363",
                cityImage: "https://www.economist.com/sites/default/files/images/print-edition/20180602_USP001_0.jpg",
                averageIncome: "85,675"
            },
            {
                id: 2,
                name: "Barcelona",
                country: "Spain",
                population: "1,620,809",
                cityImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Barcelona_collage.JPG/250px-Barcelona_collage.JPG",
                averageIncome: "80,894"
            },
            {
                id: 3,
                name: "Paris",
                country: "France",
                population: "2,206,488",
                cityImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arc_Triomphe_%28square%29.jpg/136px-Arc_Triomphe_%28square%29.jpg",
                averageIncome: "56,000"
            }
        ]
    }
    render() {
        const { list } = this.state;
        return (
            <ScrollView>
                <Text style={styles.header} onPress={() => this.props.navigation.toggleDrawer()}>
                    List of Cities
                </Text>
                {list.length ? list.map(item => <CityItem key={item.id} {...item} />) : null}
            </ScrollView>
        );
    }
}

export default CitiesList;