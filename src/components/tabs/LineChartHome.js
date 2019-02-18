import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine } from "victory-native";

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

const data2 = [
    { quarter: 1, earnings: 10000 },
    { quarter: 2, earnings: 10500 },
    { quarter: 5, earnings: 11000 },
    { quarter: 6, earnings: 10800 },
    { quarter: 9, earnings: 11500 },
    { quarter: 13, earnings: 10700 },
    { quarter: 17, earnings: 11700 },
    { quarter: 21, earnings: 11400 }
];

export default class LineChart1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <VictoryChart width={350} theme={VictoryTheme.material} >
                    <VictoryLine data={data2} x="quarter" y="earnings" />
                </VictoryChart>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    }
});

