import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { HeaderStyles } from '@styles/index'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Header (): React.ReactNode {
  return (
        <SafeAreaView>
            <View style={HeaderStyles.headerContainer}>
                <Text style={HeaderStyles.heading}>SBM</Text>
                <FontAwesomeIcon style={HeaderStyles.menuIcon} icon={faBars} size={38} />
            </View>
        </SafeAreaView>
  )
}
