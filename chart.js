import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const chart = () => {
  	
  	return (
    		<View style={styles.chart}>
      			<View style={styles.metricParent}>
        				<View style={styles.metric}>
          					<Text style={styles.title} numberOfLines={1}>Systolic BP</Text>
          					<Text style={[styles.data, styles.dataTypo]} numberOfLines={1}>120 mmHg</Text>
        				</View>
        				<View style={[styles.metric1, styles.metricLayout]}>
          					<Text style={styles.title} numberOfLines={1}>Diastolic BP</Text>
          					<Text style={[styles.data1, styles.dataTypo]} numberOfLines={1}>80 mmHg</Text>
        				</View>
        				<View style={[styles.metric2, styles.metricLayout]}>
          					<Text style={styles.title} numberOfLines={1}>Pulse Rate</Text>
          					<Text style={[styles.data2, styles.dataTypo]} numberOfLines={1}>72 bpm</Text>
        				</View>
      			</View>
      			<View style={styles.simpleLine}>
        				<Image style={[styles.simpleLineChild, styles.simpleChildLayout1]} resizeMode="cover" source="Group 1.png" />
        				<Text style={[styles.monday, styles.mondayTypo]}>Monday</Text>
        				<Text style={[styles.text, styles.textTypo3]}>0</Text>
        				<Text style={[styles.text1, styles.textTypo3]}>40</Text>
        				<Text style={[styles.text2, styles.textTypo3]}>120</Text>
        				<Text style={[styles.text3, styles.textTypo2]}>160</Text>
        				<Text style={[styles.text4, styles.textTypo2]}>200</Text>
        				<Text style={[styles.text5, styles.textTypo3]}>80</Text>
        				<Text style={[styles.tuesday, styles.mondayTypo]}>Tuesday</Text>
        				<Text style={[styles.wednesday, styles.mondayTypo]}>Wednesday</Text>
        				<Text style={[styles.thursday, styles.fridayTypo]}>Thursday</Text>
        				<Text style={[styles.friday, styles.fridayTypo]}>Friday</Text>
        				<Image style={[styles.simpleLineItem, styles.simpleChildLayout1]} resizeMode="cover" source="Vector 8.png" />
        				<Image style={[styles.simpleLineInner, styles.simpleLayout]} resizeMode="cover" source="Ellipse 1.png" />
        				<Image style={[styles.ellipseIcon, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 2.png" />
        				<Image style={[styles.simpleLineChild1, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 3.png" />
        				<Image style={[styles.simpleLineChild2, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 4.png" />
        				<Image style={[styles.simpleLineChild3, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 5.png" />
        				<View style={[styles.product1Parent, styles.product1Position]}>
          					<Text style={[styles.product1, styles.productTypo]} />
          					<Image style={[styles.groupChild, styles.groupChildPosition]} resizeMode="cover" source="Ellipse 21.png" />
          					<Text style={[styles.product2, styles.productTypo]}>수축계</Text>
          					<Image style={[styles.groupItem, styles.groupLayout]} resizeMode="cover" source="Ellipse 22.png" />
          					<Text style={[styles.product3, styles.productTypo]}>이완계</Text>
          					<Image style={[styles.groupInner, styles.groupLayout]} resizeMode="cover" source="Ellipse 23.png" />
        				</View>
        				<Image style={[styles.vectorIcon, styles.simpleChildLayout1]} resizeMode="cover" source="Vector 23.png" />
        				<Image style={[styles.simpleLineChild4, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 46.png" />
        				<Image style={[styles.simpleLineChild5, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 47.png" />
        				<Image style={[styles.simpleLineChild6, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 48.png" />
        				<Image style={[styles.simpleLineChild7, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 49.png" />
        				<Image style={[styles.simpleLineChild8, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 50.png" />
        				<Image style={[styles.simpleLineChild9, styles.simpleChildLayout1]} resizeMode="cover" source="Vector 26.png" />
        				<Image style={[styles.simpleLineChild10, styles.simpleLayout]} resizeMode="cover" source="Ellipse 61.png" />
        				<Image style={[styles.simpleLineChild11, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 62.png" />
        				<Image style={[styles.simpleLineChild12, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 63.png" />
        				<Image style={[styles.simpleLineChild13, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 64.png" />
        				<Image style={[styles.simpleLineChild14, styles.simpleChildLayout]} resizeMode="cover" source="Ellipse 65.png" />
        				<View style={[styles.product1Group, styles.product1Position]}>
          					<Text style={[styles.product11, styles.productTypo]}>평균</Text>
          					<Image style={[styles.groupChild1, styles.groupChildPosition]} resizeMode="cover" source="Ellipse 21.png" />
        				</View>
      			</View>
      			<View style={[styles.tabGroup, styles.tabGroupPosition]}>
        				<View style={styles.tabBorder}>
          					<Text style={[styles.title3, styles.textTypo1]} numberOfLines={1}>Year</Text>
        				</View>
        				<View style={[styles.tab1, styles.tabBorder]}>
          					<Text style={[styles.title3, styles.textTypo1]} numberOfLines={1}>Month</Text>
        				</View>
        				<View style={[styles.tab1, styles.tabBorder]}>
          					<Text style={[styles.title3, styles.textTypo1]} numberOfLines={1}>Week</Text>
        				</View>
      			</View>
      			<View style={[styles.view, styles.viewPosition]}>
        				<View style={styles.text6Position}>
          					<Text style={[styles.text6, styles.text6Position]}>고혈압 예상률</Text>
          					<View style={styles.groupChild2ShadowBox} />
        				</View>
        				<Image style={[styles.child, styles.childLayout]} resizeMode="cover" source="Ellipse 67.png" />
        				<Text style={[styles.text7, styles.textTypo]}>70%</Text>
      			</View>
      			<View style={[styles.groupParent, styles.viewPosition]}>
        				<View style={styles.groupPosition}>
          					<Text style={[styles.text8, styles.groupPosition]}>심혈관 예상률</Text>
          					<View style={styles.groupChild2ShadowBox} />
        				</View>
        				<Image style={[styles.groupChild3, styles.childLayout]} resizeMode="cover" source="Ellipse 67.png" />
        				<Text style={[styles.text9, styles.textTypo]}>32%</Text>
      			</View>
      			<Image style={[styles.menuIcon, styles.tabGroupPosition]} resizeMode="cover" source="Menu.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	dataTypo: {
    		marginTop: 4,
    		height: 28,
    		color: "#000",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 28,
    		fontSize: 15,
    		textAlign: "left",
    		overflow: "hidden"
  	},
  	metricLayout: {
    		height: 67,
    		padding: 12,
    		width: 111,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 6,
    		top: 0,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	simpleChildLayout1: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	mondayTypo: {
    		color: "#4f4f4f",
    		fontFamily: "Inter-Regular",
    		fontSize: 9,
    		top: "74.47%",
    		height: "2.11%",
    		textAlign: "left",
    		position: "absolute"
  	},
  	textTypo3: {
    		textAlign: "right",
    		color: "#4f4f4f",
    		fontFamily: "Inter-Regular",
    		fontSize: 9,
    		position: "absolute"
  	},
  	textTypo2: {
    		left: "7.04%",
    		textAlign: "right",
    		color: "#4f4f4f",
    		fontFamily: "Inter-Regular",
    		fontSize: 9,
    		height: "2.11%",
    		position: "absolute"
  	},
  	fridayTypo: {
    		height: "1.69%",
    		color: "#4f4f4f",
    		fontFamily: "Inter-Regular",
    		fontSize: 9,
    		top: "74.47%",
    		textAlign: "left",
    		position: "absolute"
  	},
  	simpleLayout: {
    		left: "12.96%",
    		right: "85.07%",
    		width: "1.97%",
    		height: "1.49%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	simpleChildLayout: {
    		width: "1.97%",
    		height: "1.49%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	product1Position: {
    		left: "8.73%",
    		bottom: "12.01%",
    		top: "84.39%",
    		height: "3.6%",
    		position: "absolute"
  	},
  	productTypo: {
    		fontSize: 12,
    		top: "0%",
    		height: "100%",
    		fontFamily: "Inter-Regular",
    		color: "#000",
    		textAlign: "left",
    		position: "absolute"
  	},
  	groupChildPosition: {
    		left: "0%",
    		bottom: "23.44%",
    		top: "23.49%",
    		height: "53.07%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	groupLayout: {
    		bottom: "23.44%",
    		top: "23.49%",
    		height: "53.07%",
    		width: "3.6%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	tabGroupPosition: {
    		left: 9,
    		position: "absolute"
  	},
  	textTypo1: {
    		textAlign: "center",
    		fontSize: 12,
    		color: "#000",
    		fontFamily: "Roboto-Regular"
  	},
  	tabBorder: {
    		padding: 8,
    		alignItems: "center",
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 6,
    		flex: 1
  	},
  	viewPosition: {
    		left: 22,
    		position: "absolute"
  	},
  	text6Position: {
    		height: 14,
    		width: 118,
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	childLayout: {
    		height: 236,
    		width: 238,
    		position: "absolute"
  	},
  	textTypo: {
    		height: 51,
    		width: 115,
    		fontSize: 40,
    		left: "50%",
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "Roboto-Regular",
    		position: "absolute"
  	},
  	groupPosition: {
    		width: 109,
    		height: 14,
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	title: {
    		fontSize: 10,
    		lineHeight: 20,
    		color: "rgba(0, 0, 0, 0.5)",
    		height: 20,
    		textAlign: "left",
    		fontFamily: "Roboto-Regular",
    		alignSelf: "stretch",
    		overflow: "hidden"
  	},
  	data: {
    		width: 100
  	},
  	metric: {
    		padding: 12,
    		width: 111,
    		borderWidth: 1,
    		borderColor: "rgba(0, 0, 0, 0.1)",
    		borderStyle: "solid",
    		borderRadius: 6,
    		left: 0,
    		top: 0,
    		height: 68,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	data1: {
    		width: 89
  	},
  	metric1: {
    		left: 120
  	},
  	data2: {
    		width: 68
  	},
  	metric2: {
    		left: 240
  	},
  	metricParent: {
    		top: 101,
    		left: 21,
    		width: 351,
    		height: 68,
    		position: "absolute"
  	},
  	simpleLineChild: {
    		height: "34.47%",
    		width: "72.7%",
    		top: "39.48%",
    		right: "13.4%",
    		bottom: "26.06%",
    		left: "13.9%"
  	},
  	monday: {
    		left: "14.08%",
    		width: "12.11%",
    		color: "#4f4f4f",
    		fontFamily: "Inter-Regular",
    		fontSize: 9,
    		top: "74.47%"
  	},
  	text: {
    		height: "2.05%",
    		width: "1.49%",
    		top: "72.26%",
    		left: "10.47%"
  	},
  	text1: {
    		width: "6.76%",
    		top: "65.19%",
    		left: "5.35%",
    		height: "2.11%",
    		textAlign: "right"
  	},
  	text2: {
    		height: "1.89%",
    		width: "5.63%",
    		top: "51.48%",
    		left: "6.2%"
  	},
  	text3: {
    		width: "4.79%",
    		top: "44.51%"
  	},
  	text4: {
    		width: "5.07%",
    		top: "37.55%"
  	},
  	text5: {
    		width: "3.38%",
    		top: "58.23%",
    		left: "8.45%",
    		height: "2.11%",
    		textAlign: "right"
  	},
  	tuesday: {
    		left: "32.39%",
    		width: "12.11%",
    		color: "#4f4f4f",
    		fontFamily: "Inter-Regular",
    		fontSize: 9,
    		top: "74.47%"
  	},
  	wednesday: {
    		width: "15.49%",
    		left: "50.14%"
  	},
  	thursday: {
    		width: "14.65%",
    		left: "68.17%"
  	},
  	friday: {
    		width: "10.14%",
    		left: "86.48%"
  	},
  	simpleLineItem: {
    		height: "5.15%",
    		width: "72.73%",
    		top: "51.25%",
    		right: "13.25%",
    		bottom: "43.6%",
    		left: "14.02%"
  	},
  	simpleLineInner: {
    		top: "52.74%",
    		bottom: "45.77%"
  	},
  	ellipseIcon: {
    		top: "55.7%",
    		right: "67.04%",
    		bottom: "42.81%",
    		left: "30.99%"
  	},
  	simpleLineChild1: {
    		top: "54%",
    		right: "48.65%",
    		bottom: "44.51%",
    		left: "49.38%"
  	},
  	simpleLineChild2: {
    		top: "51.4%",
    		right: "30.53%",
    		bottom: "47.11%",
    		left: "67.49%"
  	},
  	simpleLineChild3: {
    		top: "50.63%",
    		right: "12.39%",
    		bottom: "47.88%",
    		left: "85.63%"
  	},
  	product1: {
    		left: "6.8%",
    		width: "24.4%",
    		fontSize: 12,
    		top: "0%",
    		height: "100%"
  	},
  	groupChild: {
    		right: "96.4%",
    		width: "3.6%",
    		left: "0%"
  	},
  	product2: {
    		left: "41.2%",
    		width: "24.4%",
    		fontSize: 12,
    		top: "0%",
    		height: "100%"
  	},
  	groupItem: {
    		right: "62%",
    		left: "34.4%"
  	},
  	product3: {
    		left: "75.6%",
    		width: "24.4%",
    		fontSize: 12,
    		top: "0%",
    		height: "100%"
  	},
  	groupInner: {
    		right: "27.6%",
    		left: "68.8%"
  	},
  	product1Parent: {
    		width: "70.42%",
    		right: "20.85%"
  	},
  	vectorIcon: {
    		height: "13.96%",
    		width: "72.59%",
    		top: "53.82%",
    		right: "13.02%",
    		bottom: "32.22%",
    		left: "14.39%"
  	},
  	simpleLineChild4: {
    		top: "67.14%",
    		right: "84.51%",
    		bottom: "31.38%",
    		left: "13.52%"
  	},
  	simpleLineChild5: {
    		top: "61.55%",
    		right: "66.39%",
    		bottom: "36.96%",
    		left: "31.64%"
  	},
  	simpleLineChild6: {
    		top: "58.57%",
    		right: "48.53%",
    		bottom: "39.94%",
    		left: "49.5%"
  	},
  	simpleLineChild7: {
    		top: "56.89%",
    		right: "30.16%",
    		bottom: "41.62%",
    		left: "67.86%"
  	},
  	simpleLineChild8: {
    		top: "53.16%",
    		right: "12.3%",
    		bottom: "45.35%",
    		left: "85.73%"
  	},
  	simpleLineChild9: {
    		height: "19.46%",
    		width: "72.45%",
    		top: "59.87%",
    		right: "13.72%",
    		bottom: "20.67%",
    		left: "13.83%"
  	},
  	simpleLineChild10: {
    		top: "60.53%",
    		bottom: "37.99%"
  	},
  	simpleLineChild11: {
    		top: "52.14%",
    		right: "66.96%",
    		bottom: "46.37%",
    		left: "31.07%"
  	},
  	simpleLineChild12: {
    		top: "46.74%",
    		right: "48.84%",
    		bottom: "51.77%",
    		left: "49.19%"
  	},
  	simpleLineChild13: {
    		top: "49.35%",
    		right: "30.73%",
    		bottom: "49.16%",
    		left: "67.3%"
  	},
  	simpleLineChild14: {
    		top: "41.15%",
    		right: "12.61%",
    		bottom: "57.36%",
    		left: "85.41%"
  	},
  	product11: {
    		width: "78.21%",
    		left: "21.79%",
    		fontSize: 12,
    		top: "0%",
    		height: "100%"
  	},
  	groupChild1: {
    		width: "11.54%",
    		right: "88.46%"
  	},
  	product1Group: {
    		width: "21.97%",
    		right: "69.3%"
  	},
  	simpleLine: {
    		top: 49,
    		left: 26,
    		width: 355,
    		height: 497,
    		position: "absolute"
  	},
  	title3: {
    		lineHeight: 16,
    		display: "flex",
    		justifyContent: "center",
    		height: 16,
    		alignItems: "center",
    		textAlign: "center",
    		alignSelf: "stretch",
    		overflow: "hidden"
  	},
  	tab1: {
    		marginLeft: 10
  	},
  	tabGroup: {
    		top: 185,
    		width: 215,
    		height: 43,
    		flexDirection: "row",
    		paddingHorizontal: 12,
    		paddingVertical: 0,
    		overflow: "hidden"
  	},
  	text6: {
    		textAlign: "center",
    		fontSize: 12,
    		color: "#000",
    		fontFamily: "Roboto-Regular"
  	},
  	groupChild2ShadowBox: {
    		height: 10,
    		width: 11,
    		backgroundColor: "#cfc9c9",
    		shadowOpacity: 1,
    		elevation: 4,
    		shadowRadius: 4,
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		left: 4,
    		top: 1,
    		position: "absolute"
  	},
  	child: {
    		top: 22,
    		left: 54
  	},
  	text7: {
    		marginLeft: -30,
    		top: 115
  	},
  	view: {
    		top: 511,
    		width: 292,
    		height: 258
  	},
  	text8: {
    		textAlign: "center",
    		fontSize: 12,
    		color: "#000",
    		fontFamily: "Roboto-Regular"
  	},
  	groupChild3: {
    		top: 26,
    		left: 58
  	},
  	text9: {
    		marginLeft: -28,
    		top: 119
  	},
  	groupParent: {
    		top: 849,
    		width: 296,
    		height: 262
  	},
  	menuIcon: {
    		top: 47,
    		width: 37,
    		height: 49
  	},
  	chart: {
    		backgroundColor: "#fff",
    		width: "100%",
    		height: 1225,
    		overflow: "hidden",
    		flex: 1
  	}
});

export default chart;