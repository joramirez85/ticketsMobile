import React, {Component} from 'react'
import moment from 'moment'
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  // Platform
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import styles from './styles'
import Colors from '../../constants/Colors'

export default class RequestDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      initTime: new Date(),
      finishTime: new Date(),
      mode: 'date',
      showDate: false,
      showInitTime: false,
      showFinishTime: false
    }
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({
      // show: Platform.OS === 'ios',
      showDate: false,
      date: currentDate
    })
  }

  onChangeInitTime = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.initTime;
    this.setState({
      showInitTime: false,
      initTime: currentDate
    })
  }

  onChangeFinishTime = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.finishTime;
    this.setState({
      showFinishTime: false,
      finishTime: currentDate
    })
  }

  showDatepicker = () => {
    this.setState({
      showDate: true,
      mode: 'date'
    })
  }

  showInitTimepicker = () => {
    this.setState({
      showInitTime: true,
      mode: 'time'
    })
  }

  showFinishTimepicker = () => {
    this.setState({
      showFinishTime: true,
      mode: 'time'
    })
  }

  handleRequest = () => {
    console.log('saving request')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Maria Luisa Garcia Vargas</Text>
        <View style={styles.button}>
          <Button onPress={this.showDatepicker} title='Establecer fecha' />
          <Text style={styles.labelText}>{moment(this.state.date).format('DD/MM/YYYY')}</Text>
        </View>
        <View style={styles.button}>
          <Button onPress={this.showInitTimepicker} title='Establecer Hora de Inicio' />
          <Text style={styles.labelText}>{moment(this.state.initTime).format('hh:mm A')}</Text>
        </View>
        <View style={styles.button}>
          <Button onPress={this.showFinishTimepicker} title='Establecer Hora de Finalizacion' />
          <Text style={styles.labelText}>{moment(this.state.finishTime).format('hh:mm A')}</Text>
        </View>
        {this.state.showDate && (
          <DateTimePicker
            value={this.state.date}
            mode={this.state.mode}
            is24Hour
            display="default"
            onChange={this.onChange}
            textColor={Colors.white}
            minimumDate={new Date()}
          />
        )}
        {this.state.showInitTime && (
          <DateTimePicker
            value={this.state.date}
            mode={this.state.mode}
            is24Hour
            display="default"
            onChange={this.onChangeInitTime}
            textColor={Colors.white}
          />
        )}
        {this.state.showFinishTime && (
          <DateTimePicker
            value={this.state.date}
            mode={this.state.mode}
            is24Hour
            display="default"
            onChange={this.onChangeFinishTime}
            textColor={Colors.white}
          />
        )}
        <View style={styles.inputView} >
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Escribe indicaciones..."
            placeholderTextColor={Colors.grey}
            multiline={true}
          />
        </View>
        <TouchableOpacity
          style={styles.requestBtn}
          onPress={this.handleRequest}
        >
          <Text style={styles.requestText}>Solicitar Servicio</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}
