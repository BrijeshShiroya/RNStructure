import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    Text
} from 'react-native';
import * as palettes from '../../constants/palettes';
import styles from './style';
import { NavigationBarButton } from '../../component/atoms';
export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerStyle: palettes.navigationBar,
        headerTitleStyle: palettes.navigationBarTitle,
        headerRight: <NavigationBarButton title={'right'} onPress={navigation.getParam('rightPress')} />,
        headerLeft: <NavigationBarButton title={'left'} onPress={navigation.getParam('leftPress')} />,
    });

    rightPress = () => {
        alert('right')
    }

    leftPress = () => {
        alert('left')
    }

    componentDidMount() {
        this.props.navigation.setParams({ rightPress: this.rightPress, leftPress: this.leftPress });
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('Profile')
                        }}>
                        <Text style={styles.text}> Next</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
