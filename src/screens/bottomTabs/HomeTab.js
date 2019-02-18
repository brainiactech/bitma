import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Icon } from 'native-base';

import { colors } from './../../constants/styles';
import LineChartHome from './../../components/tabs/LineChartHome';

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon type="FontAwesome" name="home" />
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.coins}>
                    <ScrollView style={styles.scroll} horizontal={true}>
                        <View style={styles.bitcoin}>
                            <Image style={styles.bitcoinImage} source={require('./../../../assets/bitcoin.png')} />
                            <View style={styles.bitcoinFigures}>
                                <Text style={styles.textRight}>0.02167890</Text>
                                <Text style={[styles.textRight, styles.redText]}>-7.88</Text>
                            </View>
                        </View>
                        <View style={styles.ethereum}>
                            <View style={styles.ethereumImageContainer}>
                                <Image style={styles.ethereumImage} source={require('./../../../assets/ethereum.png')} />
                                <View style={{ flex: 1, float: 'left' }} >

                                    <Text >ETH</Text>
                                </View>
                            </View>
                            <View style={styles.etheriumFigures}>
                                <Text style={styles.textRight}>0.02167890</Text>
                                <Text style={[styles.textRight, styles.redText]}>-7.88</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <View style={styles.tableHeaderLeft}>
                            <View style={styles.tableHeaderTop}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 2 }}>
                                        <Text style={{ fontSize: 20 }}>N180,984</Text>
                                    </View>
                                    <View style={{ flex: 1, alignSelf: 'baseline', marginTop: 5 }}>
                                        <Text style={{ fontSize: 14, color: colors.dangerText }}> -7.66%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.tableHeaderBottom}>
                                <Text style={{ color: colors.grayText, fontSize: 12 }}> 09 sept 2018</Text>
                            </View>
                        </View>
                        <View style={styles.tableHeaderRight}>
                            <View style={styles.tableHeaderTop}>
                                <Text style={{ textAlign: 'right' }}>
                                    <Text style={{ fontSize: 20 }}>1 BTC</Text>
                                    <Text> -7.66% </Text>
                                    <Icon name='arrow-down' style={{ fontSize: 14, color: colors.dangerText }} />
                                </Text>
                            </View>
                            <View style={styles.tableHeaderBottom}>
                            </View>
                        </View>

                    </View>
                    <View style={styles.tableBody}>
                        <View style={styles.line}></View>
                        <View style={styles.drawTable}>
                            <View style={styles.row}>
                                <View style={styles.rowItem}>
                                    <Text style={[styles.rowItemText, styles.grayText]}>Market Cap</Text>
                                </View>
                                <View style={styles.rowItem}>
                                    <Text style={styles.rowItemText}>N2,567,123</Text>
                                </View>
                                <View style={styles.rowItem}>
                                    <Text style={[styles.rowItemText, styles.grayText]}>% Change 1hr </Text>
                                </View>
                                <View style={[styles.rowItem, styles.padLeft]}>
                                    <Text style={styles.rowItemText}> 15%</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.rowItem}>
                                    <Text style={[styles.rowItemText, styles.grayText]}>Market Cap</Text>
                                </View>
                                <View style={styles.rowItem}>
                                    <Text style={styles.rowItemText}>N2,567,123</Text>
                                </View>
                                <View style={styles.rowItem}>
                                    <Text style={[styles.rowItemText, styles.grayText]}>% Change 1hr</Text>
                                </View>
                                <View style={[styles.rowItem, styles.padLeft]}>
                                    <Text style={styles.rowItemText}>15%</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.rowItem}>
                                    <Text style={[styles.rowItemText, styles.grayText]}>Market Cap</Text>
                                </View>
                                <View style={styles.rowItem}>
                                    <Text style={styles.rowItemText}>N2,567,123</Text>
                                </View>
                                <View style={styles.rowItem}>
                                    <Text style={[styles.rowItemText, styles.grayText]}>% Change 1hr</Text>
                                </View>
                                <View style={[styles.rowItem, styles.padLeft]}>
                                    <Text style={styles.rowItemText}>15%</Text>
                                </View>
                            </View>


                        </View>
                    </View>
                </View>
                <View style={styles.graph}>
                    <View>
                        <LineChartHome />
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coins: {
        flex: 1.8,
    },
    bitcoin: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.cyan,
        paddingHorizontal: 2,
        paddingVertical: 5,
        width: 220,
        marginHorizontal: 25,
        marginVertical: 5,
        height: 50,

    },
    ethereum: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: colors.primary,
        width: 220,
        paddingVertical: 5,
        paddingHorizontal: 2,
        marginVertical: 5,
        marginHorizontal: 25,
        height: 50,
    },

    table: {
        flex: 4,
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 0.1,

        shadowRadius: 5,
        marginHorizontal: 25,
        marginVertical: 10,
        padding: 10,


    },
    graph: {
        flex: 5,
    },
    bitcoinImage: {
        flex: 1,
        width: 15, height: 35,
        resizeMode: 'contain',
    },
    ethereumImageContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        margin: 5,
    },
    ethereumImage: {
        flex: 1,
        width: 25, height: 25,
        resizeMode: 'contain',

    },

    scroll: {
        // borderWidth: 0.5,
        // borderColor: colors.primary,
        height: 150,
        paddingVertical: 0,
        marginVertical: 10,

    },
    bitcoinFigures: {
        flex: 1,
    },
    ethereumFigures: {
        flex: 1,
    },

    textRight: {
        textAlign: 'right',
        marginRight: 12,
    },
    redText: {
        color: colors.dangerText,
    },
    grayText: {
        color: colors.grayText,
    },
    tableHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tableBody: {
        flex: 3,
    },
    tableHeaderLeft: {
        flex: 1,
    },
    tableHeaderRight: {
        flex: 1,
    },
    tableHeaderTop: {
        flex: 2,
    },
    tableHeaderBottom: {
        flex: 1,
    },

    line: {
        backgroundColor: 'rgba(181,181,181,0.4)',
        marginTop: 15,
        width: 350,
        height: 1,
    },
    drawTable: {
        flex: 1,
        paddingVertical: 15,

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    rowItem: {
        flex: 1,
        alignSelf: 'stretch',

    },
    rowItemText: {
        fontSize: 12,
    },
    padLeft: {
        marginLeft: 8,
    }

})