
const styles = {
  container: {
    flex: 1
  },
  backgroundTile: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyles: {
    fontFamily: 'GeosansLight',
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: 65
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
    marginTop: 30
  },
  buttonContainer: {
    height: 30,
    marginRight: 60,
    marginLeft: 60,
    backgroundColor: '#0285A3',
    borderRadius: 20
  },
  changeStatusButtonContainer:
  {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
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
  currentMoodStyle:
  {
    color: 'white',
    fontFamily: 'GeosansLight',
    fontSize: 20,
    marginLeft: 50,
    marginBottom: 10
  },
  texts: {
    fontSize: 17,
    color: 'white',
    marginLeft: 50,
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
    marginBottom: 50,
    marginLeft: 20
  }
}

module.exports = styles
