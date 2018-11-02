import React, { PureComponent } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from '../styles/CountriesList';
import CountryItem from './CountryItem';

class CountriesList extends PureComponent {
    static navigationOptions = {
        drawerLabel: "Countries"
    }
    state = {
        list: [
            {
                id: 1,
                name: "Canada",
                capital: "Ottawa",
                population: "37,067,011",
                countryImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1000px-Flag_of_Canada_%28Pantone%29.svg.png",
            },
            {
                id: 2,
                name: "Mexico",
                capital: "Mexico City",
                population: "123,675,325",
                countryImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/840px-Flag_of_Mexico.svg.png",
            },
            {
                id: 3,
                name: "Argentina",
                capital: "Buenos Aires",
                population: "43,847,430",
                countryImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png"
            }
        ]
    }
    render() {
        const { list } = this.state;
        return (
            <ScrollView>
                <Text style={styles.header} onPress={() => this.props.navigation.toggleDrawer()}>
                    List of Countries
                </Text>
                {list.length ? list.map(item => <CountryItem key={item.id} {...item} />) : null}
            </ScrollView>
        );
    }
}

export default CountriesList;