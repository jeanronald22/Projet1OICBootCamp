import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Button from '../components/buttons/Button';

const Details = ({ route }) => {
	console.log(route.params);

	return (
		<View style={styles.container}>
			<Text>Details</Text>
			<Button
				label="dd"
				type="danger"
				onClick={() => handleNavigation('ecran 2')}
			/>
		</View>
	);
};

export default Details;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
});
