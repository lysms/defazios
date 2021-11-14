import React from 'react'
import { Text, View, Button, Linking, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styles from './ShoppingCart.style'
import AppButton from '../../components/Button/Button.component';


const ShoppingCart = ({ history }) => {
    return (
        <View style={styles.container}>

            <AppButton h={history} />

            <View style={styles.container3}>
            </View>


            <View style={styles.container1}>
                <Text style={styles.confirm}>Review Order</Text>

                <View style={styles.details}>

                    <View style={styles.innerText}>
                        <Text style={styles.regularText}>Order #123456</Text>
                        <Text style={styles.specialText}>December 19, 2021</Text>
                    </View>

                    <Text style={styles.regularText2}>4:39pm</Text>


                    <Text style={styles.regularText3}>Scheduled for 7:00pm December 21, 2021</Text>

                    <Text style={styles.regularText3}>1 Large - Cheese Pizza ($16.75)</Text>

                    <Text style={styles.regularText2}>Taxes: $0.89</Text>
                    <Text style={styles.regularText2}>Subtotal: $17.64</Text>

                </View>
            </View>


            <View style={styles.container4}>
                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/menu')}>
                    <Text style={styles.textcreate}>Continue Ordering</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container3}>
            </View>
            <View style={styles.container3}>
            </View>


            <View style={styles.container4}>
                <TouchableOpacity style={styles.createAccount2} onPress={() => history.push('/payment')}>
                    <Text style={styles.textcreate}>Continue to Payment</Text>
                </TouchableOpacity>
            </View>




            <View style={styles.container3}>
            </View>


        </View>
    );
};

export default ShoppingCart;