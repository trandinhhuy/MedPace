import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import { Dimensions } from 'react-native';

import { Color } from '../../color';
import MapboxGL from '@react-native-mapbox-gl/maps';
import assets from '../../assets';
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
MapboxGL.setAccessToken('pk.eyJ1IjoiaWNlY2xhd3MwMSIsImEiOiJja3Nyam5mMXgwbnVkMzJ0aHFiand4d28zIn0.ZGD0FnF6HF58GwiaLXvgJg');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00090d',
  },
  container: {
    height: deviceHeight - 50,
    width: deviceWidth,
    backgroundColor: Color.Dark1,
  },
  map: {
    flex: 1,

  }
});

const route = ({navigation}) => {
    const userLocation = [108.37343238117523,11.72747799249116]
    const [goal, setGoal] = React.useState([108.37554393083133,11.730924085895694])
    const [location, setLocaiton] = React.useState('Duc Trong Night Market')
  const itemFlatList = [
    {
      name: 'Duc Trong Night Market',
      distance: 1.3,
      Calo: 1400,
      coordinate: [108.37554393083133,11.730924085895694]
    },
    {
      name: 'Duc Trong park',
      distance: 2.8,
      Calo: 2800,
      coordinate: [108.3742238627517,11.734409586328468]
    },
    {
      name: 'Lien Nghia Stadium',
      distance: 0.6,
      Calo: 1100,
      coordinate: [108.37154375824252,11.73754728825844]
    }
  ]

  let onScrollEnd = (e) => {
    let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;

        // Divide the horizontal offset by the width of the view to see which page is visible
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        setGoal(itemFlatList[pageNum].coordinate)
        setLocaiton(itemFlatList[pageNum].name)
  }
  const flatListRef = React.useRef()
    function renderAnnotation(counter) {
        return (
            <MapboxGL.PointAnnotation>

            </MapboxGL.PointAnnotation>
        )
    }

    function renderItem ({item}){
      return(
        <View style = {{
          width: deviceWidth * 0.915,
          height: deviceHeight * 0.218,
          backgroundColor: Color.Dark1,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: Color.Main1,
          marginHorizontal: (deviceWidth - deviceWidth * 0.915) / 2,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style = {{
            height: deviceHeight * 0.218 - 46,
            width: deviceWidth * 0.915 - 38,
            flexDirection: 'column',
          }}>
            <View style = {{
              height:  (deviceHeight * 0.218 - 46) * 0.45,
              width: deviceWidth * 0.915 - 38,
              marginBottom: 30,
              flexDirection: 'column' 
            }}>
              <View style = {{
                width: deviceWidth * 0.915 - 38,
                height: ((deviceHeight * 0.218 - 46) * 0.45) / 2 - 7,
                marginBottom: 14,
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Image source = {assets.dot_circle} style = {{
                  tintColor: Color.Main1,
                  width: 13,
                  height: 13,
                  marginRight: 15
                }}/>
                <Text style = {{
                  color: Color.White1,
                  fontSize: 16,
                  width: deviceWidth * 0.915 - 40 - 28,
                  borderBottomColor: 'rgba(216, 216, 223, 0.1)',
                  borderBottomWidth: 1
                }}>Current Location</Text>
              </View>
              <View style = {{
                width: deviceWidth * 0.915 - 38,
                height: ((deviceHeight * 0.218 - 46) * 0.45) / 2 - 7,
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Image source = {assets.dot} style = {{
                  tintColor: Color.Main1,
                  width: 13,
                  height: 13,
                  marginRight: 15
                }}/>
                <Text style = {{
                  color: Color.White1,
                  fontSize: 16,
                  width: deviceWidth * 0.915 - 40 - 28,
                  borderBottomColor: 'rgba(216, 216, 223, 0.1)',
                  borderBottomWidth: 1
                }}>{item.name}</Text>
              </View>
            </View>

            <View style = {{
              height: (deviceHeight * 0.218 - 46) * 0.55 - 30,
              width: deviceWidth * 0.915 - 38,
              //backgroundColor: 'red',
              flexDirection: 'row'
            }}>
              <View style = {{
                width: (deviceWidth * 0.915 - 38) * 0.104,
                flexDirection: 'column',
                height: (deviceHeight * 0.218 - 46) * 0.55 - 30,
                //backgroundColor: 'blue',
                marginRight: 90
              }}>
                <Text style = {{
                  height: ((deviceHeight * 0.218 - 46) * 0.55 - 30) / 2,
                  color: Color.Main1,
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>{item.distance}
                </Text>
                <Text style = {{
                  height: ((deviceHeight * 0.218 - 46) * 0.55 - 30) / 2,
                  color: Color.White1,
                  fontSize: 16
                }}>km</Text>
              </View>
              <View style = {{
                width: (deviceWidth * 0.915 - 38) * 0.1625,
                flexDirection: 'column',
                height: (deviceHeight * 0.218 - 46) * 0.55 - 30,
                //backgroundColor: 'blue',
              }}>
                <Text style = {{
                  height: ((deviceHeight * 0.218 - 46) * 0.55 - 30) / 2,
                  color: Color.Main1,
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>{item.Calo}
                </Text>
                <Text style = {{
                  height: ((deviceHeight * 0.218 - 46) * 0.55 - 30) / 2,
                  color: Color.White1,
                  fontSize: 16
                }}>kcal</Text>
              </View>
            </View>
          </View>
        </View>
      )
    }
    return (
        <View style={styles.page}>
          <View style = {{
                width: deviceWidth * 0.915,
                marginHorizontal: deviceWidth * 0.046,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(5, 219, 14, 0.1)'
            }}>
                <TouchableOpacity onPress = {() => {
                    navigation.goBack()
                }}>
                <View style = {{
                    marginRight: deviceWidth * 0.293333,
                    padding: 7,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source = {assets.arrow_back} style = {{
                        tintColor: Color.White1,
                        width: 18,
                        height: 18,
                    }}/>
                </View>
                </TouchableOpacity>
                <Text style = {{
                    color: Color.White1,
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Route</Text>
                <TouchableOpacity onPress = {() => {
                    navigation.goBack()
                }}>
                <View style = {{
                    marginLeft: deviceWidth * 0.293333,
                    padding: 7,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style = {{
                      color: Color.White1,
                      fontSize: 16
                    }}>Done</Text>
                </View>
                </TouchableOpacity>
            </View>
          <View style={styles.container}>
            <MapboxGL.MapView 
            logoEnabled = {false}
            styleURL = {'mapbox://styles/iceclaws01/cksbggq7u0doy17uqgsoa8mm7'}
            style={styles.map}>
                <MapboxGL.Camera
                zoomLevel = {15}
                animationMode = {'flyTo'}
                centerCoordinate = {[108.37343238117523,11.72747799249116]}
                animationDuration = {1100}
                />
                <MapboxGL.PointAnnotation
                 draggable = {false}
                 id = {'1'}
                 selected = {true}
                 coordinate = {[108.37343238117523,11.72747799249116]}>

                </MapboxGL.PointAnnotation>
                <MapboxGL.PointAnnotation
                draggable = {false}
                id = {'1'}
                selected = {true}
                coordinate = {goal}>

                </MapboxGL.PointAnnotation>
                
            </MapboxGL.MapView>
          </View>
          <View style = {{
            position: 'absolute',
            width: deviceWidth * 0.915,
            height: deviceHeight * 0.127,
            borderRadius: 10,
            backgroundColor: Color.Dark1,
            borderWidth: 1,
            borderColor: 'rgba(216, 216, 223, 0.1)',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 64
          }}>
            <View style = {{
              height: deviceHeight * 0.127 - 46,
              width: deviceWidth * 0.915 - 40,
              flexDirection: 'column'
            }}>
              <View style = {{
                width: deviceWidth * 0.915 - 40,
                height: (deviceHeight * 0.127 - 46) / 2 - 7,
                marginBottom: 14,
                flexDirection: 'row',
                //borderBottomWidth: 1,
                //borderBottomColor: 'rgba(216, 216, 223, 0.1)',
                alignItems: 'center'
              }}>
                <Image source = {assets.dot_circle} style = {{
                  width: 13,
                  height: 13, 
                  tintColor: Color.Main1,
                  marginRight: 15
                }}/>
                <Text style = {{
                  color: Color.White1,
                  fontSize: 16,
                  width: deviceWidth * 0.915 - 40 - 28,
                  borderBottomColor: 'rgba(216, 216, 223, 0.1)',
                  borderBottomWidth: 1
                }}>Current location</Text>
              </View>
              <View style = {{
                width: deviceWidth * 0.915 - 40,
                height: (deviceHeight * 0.127 - 46) / 2 - 7,
                //borderBottomWidth: 1,
                //borderBottomColor: 'rgba(216, 216, 223, 0.1)',
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Image source = {assets.dot} style = {{
                  tintColor: Color.Main1,
                  width: 13,
                  height: 13,
                  marginRight: 15
                }}/>
                <Text style = {{
                  color: Color.White1,
                  fontSize: 16,
                  width: deviceWidth * 0.915 - 40 - 28,
                  borderBottomColor: 'rgba(216, 216, 223, 0.1)',
                  borderBottomWidth: 1
                }}>{location}</Text>
              </View>
            </View>
          </View>
          <FlatList
            ref = {flatListRef}
            onMomentumScrollEnd = {onScrollEnd}
            pagingEnabled = {true}
            horizontal = {true}
            data = {itemFlatList}
            key = {(item) => item.name}
            renderItem = {renderItem}
            style = {{
            position: 'absolute',
            width: deviceWidth,
            height: deviceHeight * 0.218,
            backgroundColor: 'rgba(0,0,0,0.0)',
            marginTop: deviceHeight - deviceHeight * 0.218 - 35
          }}></FlatList>
        </View>
    );
}

export default route