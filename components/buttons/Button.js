import { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const { Pressable } = require('react-native');

const Button = ({ label = 'cliquez', type, onClick }) => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<Pressable
			style={[
				styles.btn,
				{
					backgroundColor: type === 'primary' ? 'blue' : 'red',
					opacity: isPressed ? 0.5 : 1,
				},
			]}
			onPress={() => onClick(label)}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
		>
			<Text style={styles.textBtn}>{label}</Text>
		</Pressable>
	);
};
export default Button;
const styles = StyleSheet.create({
	btn: {
		paddingVertical: 10,
		paddingHorizontal: 80,
		borderRadius: 10,
		marginVertical: 5,
		marginHorizontal: 5,
	},
	textBtn: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'semibold',
	},
});
