import React from 'react'
import { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from 'src/routes/StackNavigation'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import * as eva from '@eva-design/eva';
import Color from './src/assets/theme/color.json'
import Mapping from './src/assets/theme/mapping.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { LogBox } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'

LogBox.ignoreAllLogs();

const queryClient = new QueryClient()
const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...Color }} customMapping={{ ...eva.mapping, ...Mapping }}>
          <StackNavigation />
        </ApplicationProvider>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App