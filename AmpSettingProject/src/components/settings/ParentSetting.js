import React from 'react';

import RockSetting from './src/components/settings/rock';
import MyFavoriteSetting from './src/components/settings/MyFavoriteSettings';


class ParentSetting extends React.Component {

  constructor(props) {
    super(props);
    // ...
    this.state = {
      favoriteData: 'no dat yet',
    }

  }

  updateFavoriteSetting = () => {
    // We will change state for updating the MyFavoriteSetting component here
    let list_data = 'hello' ;
    // actually, you can set an array or object, then we will loop through the object to render data correctly in MyFavoriteSetting. You can also add some react element (which contains some View and Button, just like you described)

    this.setState({
      favoriteData: list_data
    });
  }

  render(){
    // We render the 2 children components: RockSetting and MyFavoriteSetting
    // please consider the way to pass props into those 2 ^^
    return (
      <View>
        <RockSetting updateFavoriteSetting={this.updateFavoriteSetting} />
        <MyFavoriteSetting favoriteData={this.state.favoriteData} />
      </View>
    )
  }
}
