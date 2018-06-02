
const styles = {
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileDataContainer:
        {
            flexDirection: 'column',
            justifyContent: 'center',
            width:160,
            padding: 5,
            paddingLeft:10

        },
    profileDataSettings:
        {
            color: '#fff',
            fontFamily: 'GeosansLight',
            fontSize: 20,
            justifyContent: 'center', alignItems: 'center'

        },
    editProfileDataSettings:
        {
            color: '#fff',
            fontFamily: 'GeosansLight',
            fontSize: 15
        },
        rightSideContainerProfile: {
            alignContent: 'flex-start',
             flexDirection:'row'
        },
    exitModalIcon:
        {
            marginTop: 12,
            marginRight: 312,
            width: 30
        },
        editProfileText : {
            color: 'white',
            alignContent: 'flex-start',
            fontFamily: 'GeosansLight',

        },
        iconStyle: {
             height:4
        },
    signOut:
        {
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'baseline',
            left: 250,
            top: 15
        },
    changeStatusButtonContainer:
        {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            height: 250,
            marginTop: 10,
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            borderRadius: 11,
            marginBottom: 35
        },
    buttonStyleChange:
        {
            borderRadius: 50,
            backgroundColor: '#0285A3',
            marginBottom: 10
        },
    currentMoodStyle:
        {
            color: 'white',
            fontFamily: 'GeosansLight',
            fontSize: 20,
            marginBottom: 9,
            marginLeft: 2
        },
    iconsInModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 5
    }
}

  export default styles;
  