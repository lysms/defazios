import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fffafa',
  },
  button: {
    alignItems: "center",
    backgroundColor: 'trgba(0,0,0,0.5)',
    padding: 10,
    width: "65%",
    borderRadius: 14,
    borderColor: '#fff',
    borderWidth: 1.5,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  upperview: {
    // backgroundColor: '#fff',
    // opacity: 100
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewForSelecting: {
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 4,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});