import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import styles from './OrderInfo.style';

const OrderInfo = (props) =>  {

  return (
    <SafeAreaView style={styles.infoContainer}>
      <View>
        <TouchableOpacity onPress={() => props.stepHandler('schedule')}>
          <Text>Return to Schedule</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.pageContent}>
        <Text style={styles.pageTitleText}>
          Enter Confirmation Details
        </Text>
        <Formik
          initialValues={{
            email: '',
            fname: '',
            lname: '',
            requests: '',
            phone: '',
          }}
          onSubmit={values => {props.addToFinal("info", values); props.stepHandler('payment')}}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>

              <Text style={styles.infoText}>First Name</Text>
              <TextInput 
                style={styles.infoInput}
                placeholder="First Name"
                onChangeText={handleChange('fname')}
                onBlur={handleBlur('fname')}
                value={values.fname}
              />

              <Text style={styles.infoText}>Last Name</Text>
              <TextInput 
                style={styles.infoInput}
                placeholder="Last Name"
                onChangeText={handleChange('lname')}
                onBlur={handleBlur('lname')}
                value={values.lname}
              />
                  
              <Text style={styles.infoText}>Phone Number</Text>
              <TextInput 
                style={styles.infoInput}
                placeholder="###-###-####"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />

              <Text style={styles.infoText}>Email Address</Text>
              <TextInput
                style={styles.infoInput}
                placeholder="johndoe@email.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <Text style={styles.infoText}>Special Requests</Text>
              <TextInput
                style={styles.requests}
                multiline={true}
                placeholder="Enter any special requests here"
                onChangeText={handleChange('requests')}
                onBlur={handleBlur('requests')}
                value={values.requests}
              />
              <TouchableOpacity onPress={handleSubmit}>
                <Text>Continue to Payment</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

export default OrderInfo;