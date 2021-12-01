import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Formik } from 'formik';
import styles from './OrderInfo.style';
import { Link } from 'react-router-native';

const OrderInfo = ({history}) =>  {

  return (
    <SafeAreaView style={styles.infoContainer}>
      <View>
        <TouchableOpacity style={styles.returnBtn}>
          <Text style={styles.returnBtnText}>
            Return
          </Text>
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
            specialRequests: '',
            phone: ''
          }}
          onSubmit={values => console.log(values)}
        >

          {({handleChange, handleBlur, handleSubmit, values}) => (

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
                style={styles.specialRequests}
                multiline={true}
                placeholder="Enter any special requests here"
                onChangeText={handleChange('specialRequests')}
                onBlur={handleBlur('specialRequests')}
                value={values.specialRequests}
              />

              <Link to={{pathname:'/payment', state: {order: ""}}} style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>
                  Continue to Payment 
                </Text>
              </Link>
              
            </View>
          )}
        </Formik>

        {/* <Link to={{pathname:'/payment', state: {order: ""}}} style={styles.btn}>
          <Text style={styles.btnText}>
            Continue to Payment 
          </Text>
        </Link> */}
      </View>
    </SafeAreaView>
  );
}

export default OrderInfo;