import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { LiveAnalysisStyles } from '@styles/index'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

export function CurrentMonthAnalysis (): React.ReactNode {
  return (
        <SafeAreaView>
            <Text style={LiveAnalysisStyles.header}>Monthly Comparison</Text>
            <View style={LiveAnalysisStyles.wrapper}>
                <View style={LiveAnalysisStyles.tab}>
                    <Text style={LiveAnalysisStyles.tabHeader}>Total Sales</Text>
                    <Text style={LiveAnalysisStyles.tabNumber}>
                        00
                        <FontAwesomeIcon icon={faArrowCircleUp} color='green' />
                        <FontAwesomeIcon icon={faArrowCircleDown} color='red' />
                    </Text>
                </View>
                <View style={LiveAnalysisStyles.tab}>
                    <Text style={LiveAnalysisStyles.tabHeader}>Total Expenses</Text>
                    <Text style={LiveAnalysisStyles.tabNumber}>
                        00
                        <FontAwesomeIcon icon={faArrowCircleUp} color='green' />
                        <FontAwesomeIcon icon={faArrowCircleDown} color='red' />
                    </Text>
                </View>
            </View>
        </SafeAreaView>
  )
}
