
const styles = {
    profileContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10

    },
    profileDataContainer:
        {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width:160,
            padding: 5
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
    exitModalIcon:
        {
            marginTop: 12,
            marginRight: 312,
            width: 30
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
            backgroundColor: '#3A3A3A',
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
  