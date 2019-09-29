import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import InmigrationRaidScreen from './src/screens/InmigrationRaidScreen';
import LegalContactsScreen from './src/screens/LegalContactsScreen';
import MigrantRightsScreen from './src/screens/MigrantRightsScreen';
import VisaTypesScreen from './src/screens/VisaTypesScreen';
import DomesticViolenceScreen from './src/screens/DomesticViolenceScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    InmigrationRaid: InmigrationRaidScreen,
    LegalContacts: LegalContactsScreen,
    MigrantRights: MigrantRightsScreen,
    VisaTypes: VisaTypesScreen,
    DomesticViolence: DomesticViolenceScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
