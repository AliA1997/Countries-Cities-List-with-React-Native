import React from 'react';
import styles from '../styles/CountryItem';
import { View, Text, Image, Button } from 'react-native';

const CountryItem = ({id, name, capital, population, countryImage, onPress}) => (
    <View style={styles.view}>
        <Image source={countryImage} style={styles.image} />
        <Text style={[styles.text, styles.header]}>
            Country: {name}
        </Text>
        <Text style={[styles.text, styles.header]}>
            Capital City: {capital}
        </Text>
        <Text style={[styles.text, styles.header]}>
            Population: {population}
        </Text>
        {/* <Button
            style={styles.button}
            onPress={() => onPress()}
        /> */}
    </View>
);

export default CountryItem;