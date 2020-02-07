import { NavigationContainerRef } from '@react-navigation/native'

let navigation: NavigationContainerRef

export const navigationInit = (navigationRef: NavigationContainerRef) => {
  if (!navigation) {
    navigation = navigationRef
  }
}

export const navigate = (routeName: string, param = {}) =>
  navigation?.navigate(routeName, param)
