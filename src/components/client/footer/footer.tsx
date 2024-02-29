import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { FooterStyles } from '@styles/index'

export function Footer (): React.ReactNode {
  return (
        <SafeAreaView>
            <View style={FooterStyles.footerWrapper}>
                <Text style={FooterStyles.appVersion}>Version: 1.0.0</Text>
            </View>
        </SafeAreaView>
  )
}
