import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings92614Navigator from '../features/Settings92614/navigator';
import UserProfile92607Navigator from '../features/UserProfile92607/navigator';
import Settings92606Navigator from '../features/Settings92606/navigator';
import Settings92604Navigator from '../features/Settings92604/navigator';
import SignIn292602Navigator from '../features/SignIn292602/navigator';
import Settings92600Navigator from '../features/Settings92600/navigator';
import UserProfile92593Navigator from '../features/UserProfile92593/navigator';
import Settings92592Navigator from '../features/Settings92592/navigator';
import Settings92590Navigator from '../features/Settings92590/navigator';
import SignIn292588Navigator from '../features/SignIn292588/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings92614: { screen: Settings92614Navigator },
UserProfile92607: { screen: UserProfile92607Navigator },
Settings92606: { screen: Settings92606Navigator },
Settings92604: { screen: Settings92604Navigator },
SignIn292602: { screen: SignIn292602Navigator },
Settings92600: { screen: Settings92600Navigator },
UserProfile92593: { screen: UserProfile92593Navigator },
Settings92592: { screen: Settings92592Navigator },
Settings92590: { screen: Settings92590Navigator },
SignIn292588: { screen: SignIn292588Navigator },

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
