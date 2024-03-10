import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BusinessAnalysis, CurrentMonthAnalysis, Menu } from './main_menu'
import { Footer } from './footer/footer'
import { Header } from './header'

export function ClientDashboard (): React.ReactNode {
  return (
        <SafeAreaView>
            <Header />
            <BusinessAnalysis />
            <CurrentMonthAnalysis />
            <Menu />
            <Footer />
        </SafeAreaView>
  )
}
