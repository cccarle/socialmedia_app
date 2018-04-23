
const styles = {
  container: {
    flex: 1,
  },
  backgroundTile: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor:'red'
  },
  titleStyles:{
    fontFamily:  'GeosansLight', 
    fontSize: 40, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  input: {
    color: 'white',
    height: 10,
    backgroundColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
    padding: 10,
    fontFamily: 'GeosansLight'
  },
  uploadImageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },
  buttonContainer: {
    height: 30,
    marginRight: 60,
    marginLeft: 60,
    backgroundColor: '#0285A3',
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    borderColor: 'black',
    alignSelf: 'center',
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 10,
    fontFamily: 'GeosansLight'

  },
  texts: {
    color: 'white',
    marginLeft: 53,
    fontFamily: 'GeosansLight'
  },
  hairline: {
    height: 1,
    backgroundColor: 'white',
    marginBottom: 40,
    marginLeft: 50,
    marginRight: 50
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    backgroundColor: 'black',
    fontFamily: 'GeosansLight'

  },
  spinnerAndButton: {
    height: 20,
    marginBottom: 50
  }
}

module.exports = styles
