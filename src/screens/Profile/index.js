import React, { Component } from 'react';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import * as palettes from '../../constants/palettes';
import styles from './style';
import { NavigationBarButton } from '../../component/atoms';
import { connect } from 'react-redux';
import { login } from '../../store/Auth/actions';
class Profile extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        headerStyle: palettes.navigationBar,
        headerTitleStyle: palettes.navigationBarTitle,
        headerRight: <NavigationBarButton title={'right'} onPress={navigation.getParam('rightPress')} />,
        headerLeft: <NavigationBarButton title={'Back'} onPress={navigation.getParam('leftPress')} />,
    });

    rightPress = () => {
        alert('right')
    }

    leftPress = () => {
        this.props.navigation.goBack()
    }

    componentDidMount() {
        this.props.navigation.setParams({ rightPress: this.rightPress, leftPress: this.leftPress });
    }

    loginHandle = () => {
        this.props.login('brijesh@gmail.com')
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'green' }}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={// this.props.navigation.goBack()
                            this.loginHandle
                        }>
                        <Text style={styles.text}> Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{this.props.loading ? `loading start...` : `loading stop`}</Text>
                </View>
            </SafeAreaView>
        );
    }
}


const mapStateToProps = state => {
    const { loading } = state.auth
    return {
        loading
    }
};

export default connect(mapStateToProps, { login })(Profile);
