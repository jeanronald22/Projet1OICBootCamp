import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/buttons/Button';
import { useNavigation } from '@react-navigation/native';

const Todo = () => {
	const [title, settitle] = useState({
		title: '',
	});
	const [task, setTask] = useState([]);
	// hooks de navigation
	const navigation = useNavigation();
	//fonction de navigation via le nom de la route
	const handleNavigation = (routeName, data = {}) => {
		// utilisez navigation.navigate pour quitter d'un ecran a un autre avec possibilite de retour
		navigation.navigate(routeName, data);
	};

	const createTask = () => {
		const newTask = {
			id: Math.random().toString(),
			title: title.title,
			status: 'incompleted',
		};
		setTask((prev) => [...prev, newTask]);
		settitle('');
	};

	return (
		<View>
			<View style={styles.headerContainer}>
				<TextInput
					style={styles.input}
					value={title.title}
					// onChnageText est appeler a chaque changement de valeur
					onChangeText={(text) =>
						settitle((prev) => ({
							...prev,
							title: text,
						}))
					}
				/>
				<Button label="Créez" type="primary" onClick={createTask} />
			</View>
			{/* affichage des elements */}
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 30,
					marginHorizontal: 30,
				}}
			>
				{task.length === 0 && (
					<View>
						<Text>Pas de tache</Text>
					</View>
				)}
				{task.map((item) => {
					return (
						<Pressable
							onPress={() => handleNavigation('Details', item)}
							key={item.id}
							style={[
								styles.taskItem,
								{
									opacity:
										item.status === 'incompleted' ? 1 : 0.5,
								},
							]}
						>
							<View>
								<Text style={styles.taskTitle}>
									{item.title}
								</Text>
							</View>
							<View
								style={{
									backgroundColor:
										item.status === 'incompleted'
											? 'red'
											: 'green',
									borderRadius: 30,
									paddingVertical: 2,
									paddingHorizontal: 3,
								}}
							>
								<Text style={styles.taskStatus}>
									{item.status}
								</Text>
							</View>
						</Pressable>
					);
				})}
			</View>
		</View>
	);
};

export default Todo;
const styles = StyleSheet.create({
	headerContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
	input: {
		flex: 1,
		borderColor: 'gray',
		borderWidth: 1,
		maxHeight: 30,
	},
	taskItem: {
		backgroundColor: '#f2f4f8',
		padding: 16,
		marginVertical: 8,
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 10,
	},
	taskTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: '#333',
		marginBottom: 4,
		display: 'flex',
	},
	taskStatus: {
		fontSize: 14,
		fontWeight: '400',
		color: 'white',
		padding: 5,
		fontWeight: 'bold',
	},
});
