import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { LiveAnalysisStyles } from '@styles/index'

export function BusinessAnalysis (): React.ReactNode {
  return (
        <SafeAreaView>
            <Text style={LiveAnalysisStyles.header}>Overall Business Analysis</Text>
            <View style={LiveAnalysisStyles.wrapper}>
                <View style={LiveAnalysisStyles.tab}>
                    <Text style={LiveAnalysisStyles.tabHeader}>Total Sales</Text>
                    <Text style={LiveAnalysisStyles.tabNumber}>
                        00
                    </Text>
                </View>
                <View style={LiveAnalysisStyles.tab}>
                    <Text style={LiveAnalysisStyles.tabHeader}>Total Expenses</Text>
                    <Text style={LiveAnalysisStyles.tabNumber}>
                        00
                    </Text>
                </View>
            </View>
        </SafeAreaView>
  )
}
