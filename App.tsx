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
import { Provider } from 'react-redux'
import { persistor, store } from 'src/redux/store'
import FlashMessage from 'react-native-flash-message'
import { PersistGate } from 'redux-persist/integration/react'

LogBox.ignoreAllLogs();

const queryClient = new QueryClient()
const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={{ ...eva.light, ...Color }} customMapping={{ ...eva.mapping, ...Mapping }}>
              <StackNavigation />
              <FlashMessage position={"center"} />
            </ApplicationProvider>
          </NavigationContainer>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

export default App