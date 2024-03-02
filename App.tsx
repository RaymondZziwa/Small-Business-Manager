import { ProductManager } from '@components/client/inventory_manager/product_manager/product_manager'
import React from 'react'
import { SafeAreaView } from 'react-native'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App () {
  return (
        <SafeAreaView>
            <ProductManager />
        </SafeAreaView>
  )
}
