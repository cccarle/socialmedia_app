
const styles = {
profileContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    right: 54
},
profileDataContainer:
{
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    left: 200,
    top: 70
},
profileDataSettings:
{
    color: '#fff',
    fontFamily: 'GeosansLight',
    fontSize: 20
},
editProfileDataSettingsContainer:
{
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    left: 200,
    top: 95  
},
editProfileDataSettings:
{
    color: '#fff',
    fontFamily: 'GeosansLight', 
    fontSize: 15
},
exitModalIcon:
{
    marginTop: 12,
    marginRight: 312,
    width: 30
},
profileContainerInPlace:
{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 370
},
signOut: 
{
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    left: 290,
    top: 15
},
changeStatusButtonContainer:
{
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    flexDirection: 'row',
    height:400,
    marginTop:50
},
buttonStyleChange:
{
    borderRadius: 50,
    backgroundColor: '#0285A3',
    marginBottom: 10
},
currentMoodStyle: 
{
    color:'white',
    fontFamily: 'GeosansLight',
    fontSize: 20,
    marginBottom: 85
}
}
  
  module.exports = styles
  