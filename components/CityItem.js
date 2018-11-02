import React from 'react';
import styles from '../styles/CityItem';
import  { View, Text, Image, Button } from 'react-native';

const CityItem = ({id, name, country, population, averageIncome, cityImage, onPress}) => (
    <View style={styles.view}>
        <Image source={cityImage} style={styles.image} />
        <Text style={[styles.text, styles.header]}>
           City: {name}
        </Text>
        <Text style={[styles.text, styles.header]}>
            Country Of Origin: {country}
        </Text>
        <Text style={[styles.text, styles.header]}>
            Population: {population}
        </Text>
        <Text style={[styles.text, styles.header]}>
            Average Income: {averageIncome}
        </Text>
        {/* <Button 
            style={styles.button}
            onPress={() => onPress()} 
        /> */}
    </View>
);

export default CityItem;