import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem178247Navigator from '../features/Additem178247/navigator';
import Maps178243Navigator from '../features/Maps178243/navigator';
import UserProfile178239Navigator from '../features/UserProfile178239/navigator';
import Settings178202Navigator from '../features/Settings178202/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem178247: { screen: Additem178247Navigator },
Maps178243: { screen: Maps178243Navigator },
UserProfile178239: { screen: UserProfile178239Navigator },
Settings178202: { screen: Settings178202Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
