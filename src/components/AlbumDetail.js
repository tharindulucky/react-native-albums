import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from "./Button";

const AlbumDetail = ({album}) => {

    const {title, artist, thumbnail_image, image, url} = album;
    const {thumbnailStyle, albumHeaderTextStyle, thumbnailContainerStyle, albumTitleStyle, albumCoverStyle} = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: thumbnail_image}}/>
                </View>
                <View style={albumHeaderTextStyle}>
                    <Text style={albumTitleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={albumCoverStyle} source={{uri: image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
            </CardSection>
        </Card>
    );
};

const styles = {
      albumHeaderTextStyle:{
          flexDirection:'column',
          justifyContent: 'space-around'
      },

      thumbnailStyle:{
          height: 50,
          width:50
      },

      thumbnailContainerStyle:{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 0,
          marginRight: 10
      },

      albumTitleStyle:{
          fontSize: 18,
          fontWeight: 'bold'
      },

      albumCoverStyle:{
          height: 300,
          flex: 1,
          width: null
      }
};

export default AlbumDetail;