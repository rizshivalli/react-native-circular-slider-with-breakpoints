import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-ionicons'
import CircleSlider from './CircleSlider';
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      totalDays: 30,
      month: '',
      color: '#dee2e3',
      activeDates: [12, 6, 8, 18]
    };


  };

  componentDidMount() {
    this.gettingInformation();
  }




  gettingInformation = () => {
    var date = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var value = date.getDate();
    var totalDays = lastDay.getDate();
    this.setState({ value: value, totalDays: totalDays, month: month[date.getMonth()] })

  }
  fun = (value) => {
    this.state.activeDates.indexOf(value) != -1 ? this.setState({ color: '#9281f7' }) : this.setState({ color: '#dee2e3' })
    this.setState({ value })
  }
  render() {
    const width = 120;
    var { value, totalDays, month, color, activeDates } = this.state;
    return (

      <ScrollView>

        <View style={styles.container}>
          <StatusBar backgroundColor='#b5ddfb' />


          <View style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20
          }}>
            <TouchableOpacity style={{
              position: 'absolute',
              right: 20
            }}>
              <Icon color='#dee2e3' name='md-settings' />
            </TouchableOpacity>
            <Text style={{
              fontSize: 20
            }}>@AKASH</Text>
          </View>


          <View style={{
            alignItems: 'center',
            width: '100%',
            paddingVertical: 20
          }}>




            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: color,
                width: width,
                height: width,
                borderRadius: width / 2
              }}>
                <Image
                  style={{
                    width: width - 20,
                    height: width - 20,
                    borderRadius: (width - 20) / 2,
                    borderWidth: 2,
                    borderColor: '#fff'
                  }}
                  source={require('./1.jpg')} />
              </View>

            </View>
            <CircleSlider
              arcDirection={'CW'}
              backgroundColor={"#dee2e3"}
              btnRadius={14}
              dotColor={'#9281f7'}
              dotSize={7}
              dotValues={activeDates}
              btnColor='#b5ddfb'
              sliderRadius={100}
              sliderWidth={17}
              startDegree={1}
              maxValue={totalDays}
              value={value}
              // onPressInnerCircle={(value) => console.log(`Inner: ${value}`)}
              // onPressOuterCircle={(value) => console.log(`Outer: ${value}`)}
              onValueChange={(value) => this.fun(value)}
              endGradient={"#b5ddfb"}
              startGradient={"#b5ddfb"}
            />


          </View>


          <View style={{
            width: '100%',
            alignItems: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20
          }}>
            <Text style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 10,
              borderColor: '#dee2e3',
              borderWidth: 1,
              textAlign: 'center',
              fontSize: 14
            }}>
              NATAL CHART
          </Text>



            <View
              style={{
                width: '100%',
                borderRadius: 5,
                backgroundColor: color != '#9281f7' ? '#5c6777' : color,
                alignItems: 'center',
                paddingVertical: 25,
                paddingHorizontal: 16,
                marginVertical: 25,
                elevation: 13
              }}>


              <View style={{
                position: 'absolute',
                left: '45%',
                top: -20,
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                backgroundColor: '#e58a88',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Icon color='#fff' name='md-calendar' />
              </View>



              {
                color != '#9281f7' ? null : <TouchableOpacity style={{
                  position: 'absolute',
                  top: 10,
                  right: 20
                }}>
                  <Icon size={40} color='#fff' name='md-cloud-upload' />
                </TouchableOpacity>
              }



              <Text style={styles.dateTxt}>{month} {value}</Text>


              <Text style={styles.detailTxt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      
</Text>


            </View>

          </View>





        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  detailTxt: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff'
  },
  dateTxt: {
    marginTop: 15,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
