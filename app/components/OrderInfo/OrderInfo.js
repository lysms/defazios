import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Formik } from 'formik';
import styles from './OrderInfo.style';

const OrderInfo = (props, {history}) =>  {

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
            firstName: '',
            lastName: '',
            requests: '',
            phone: ''
          }}
          onSubmit={values => props.addToFinal("info", values)}
        >

          {({handleChange, handleBlur, handleSubmit, values}) => (

            <View>

              <Text style={styles.infoText}>First Name</Text>
              <TextInput 
                style={styles.infoInput}
                placeholder="First Name"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />

              <Text style={styles.infoText}>Last Name</Text>
              <TextInput 
                style={styles.infoInput}
                placeholder="Last Name"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
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

              <TouchableOpacity onPress={() => {handleSubmit; props.stepHandler('payment')}}>
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