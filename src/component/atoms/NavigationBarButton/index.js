import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight, TouchableOpacity
} from 'react-native';
import * as palettes from '../../../constants/palettes';

import styles from './style';
export default class NavigationBarButton extends Component {
    render() {
        const { title, onPress } = this.props;
        return (
            <TouchableOpacity
                style={[palettes.navigationBarButton, styles.container]}
                onPress={onPress}>
                <Text style={styles.button}>{title}</Text>
            </TouchableOpacity>
        );
    }
}
