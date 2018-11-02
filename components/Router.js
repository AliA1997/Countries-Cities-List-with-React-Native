import { createDrawerNavigator } from 'react-navigation';
import CountriesList from './CountriesList';
import CitiesList from './CitiesList';
import Home from './Home';

const Navigator = createDrawerNavigator({
    Home: Home,
    Countries: CountriesList,
    Cities: CitiesList
}, 
{
    initialRouteName: "Home"
})

export default Navigator;