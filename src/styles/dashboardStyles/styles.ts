import { StyleSheet } from 'react-native'

export const HeaderStyles = StyleSheet.create({
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: 38,
    marginTop: 10,
    color: '#077FFF',
    marginLeft: 10
  },
  menuIcon: {
    color: '#077FFF',
    marginTop: 10,
    justifyContent: 'flex-end',
    marginRight: 10
  }
})

export const LiveAnalysisStyles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: 'center'
  },
  wrapper: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tab: {
    width: '45%',
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
    margin: 'auto'
  },
  tabHeader: {
    textAlign: 'center',
    color: '#077FFF',
    fontWeight: 'bold',
    fontSize: 18
  },
  tabNumber: {
    textAlign: 'center',
    fontSize: 48
  }
})

export const FooterStyles = StyleSheet.create({
  footerWrapper: {
  },
  appVersion: {
    textAlign: 'center',
    color: 'lightgray'
  }
})

export const MenuStyles = StyleSheet.create({
  menuWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  option: {
    width: '50%',
    alignItems: 'center',
    marginBottom: 15
  },
  icon: {
    height: 80,
    width: 80
  }
})
