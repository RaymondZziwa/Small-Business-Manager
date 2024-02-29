import { SafeAreaView } from 'react-native';
import {Header} from '@components/client/header/index';
import { BusinessAnalysis, CurrentMonthAnalysis, Menu } from '@components/client/dashboard/index';
import { Footer } from '@components/client/footer/footer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <SafeAreaView>
          <Header />
          <BusinessAnalysis />
          <CurrentMonthAnalysis />
          <Menu />
          <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
}