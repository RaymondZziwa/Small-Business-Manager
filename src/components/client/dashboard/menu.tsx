import React from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { MenuStyles } from '@styles/index'

export function Menu (): React.ReactNode {
  return (
        <SafeAreaView>
            <View style={MenuStyles.menuWrapper}>
                <View style={MenuStyles.option}>
                    <Image source={require('@icons/inventory.png')} style={MenuStyles.icon}/>
                    <Text>Inventory Manager</Text>
                </View>
                <View style={MenuStyles.option}>
                    <Image source={require('@icons/sales.png')} style={MenuStyles.icon}/>
                    <Text>Sales Manager</Text>
                </View>
                <View style={MenuStyles.option}>
                    <Image source={require('@icons/financial_records.png')} style={MenuStyles.icon}/>
                    <Text>Financial Statements</Text>
                </View>
                <View style={MenuStyles.option}>
                    <Image source={require('@icons/operation_records.png')} style={MenuStyles.icon}/>
                    <Text>Operation  Logs</Text>
                </View>
                <View style={MenuStyles.option}>
                    <Image source={require('@icons/business_performance.png')} style={MenuStyles.icon}/>
                    <Text>Business Performance</Text>
                </View>
                <View style={MenuStyles.option}>
                    <Image source={require('@icons/schedule.png')} style={MenuStyles.icon}/>
                    <Text>Schedule Events</Text>
                </View>
            </View>
        </SafeAreaView>
  )
}
