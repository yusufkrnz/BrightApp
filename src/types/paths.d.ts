declare module '@/*' {
  import { Colors } from '../constants/Colors';
  import { Typography } from '../constants/Typography';
  import { CustomTabBar } from '../components/CustomTabBar';
  import { LoginScreen } from '../screens/LoginScreen';
  import { RegisterScreen } from '../screens/RegisterScreen';
  import { HomeScreen } from '../screens/HomeScreen';
  import { DiscoverScreen } from '../screens/DiscoverScreen';
  import { CalendarScreen } from '../screens/CalendarScreen';
  import { ProfileScreen } from '../screens/ProfileScreen';
  import { AppNavigator } from '../navigation/AppNavigator';
  import { RootStackParamList, TabParamList } from '../navigation/types';

  export {
    Colors,
    Typography,
    CustomTabBar,
    LoginScreen,
    RegisterScreen,
    HomeScreen,
    DiscoverScreen,
    CalendarScreen,
    ProfileScreen,
    AppNavigator,
    RootStackParamList,
    TabParamList,
  };
} 