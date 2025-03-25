import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

import { setName, resetState } from '../../store/slice/TodoData/userSlice';
import { addTask, editTask, deleteTask } from "../../store/slice/TodoData/todoSlice";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";

const TodoApp = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state: RootState) => state.user.name);
  const tasks = useAppSelector((state: RootState) => state.todo.tasks);
  const [taskName, setTaskName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask(taskName));
      setTaskName("");
    }
  };

  const filteredTasks = tasks?.filter((task) =>
    task?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={(text) => dispatch(setName(text))} style={{ borderBottomWidth: 1 }} />
      <Button title="Edit" onPress={() => dispatch(setName(""))} />
      
      <TextInput
        placeholder="Search Here"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{ backgroundColor: "#ddd", marginVertical: 10 }}
      />
      
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>{item?.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Button title="Edit" onPress={() => dispatch(editTask({ id: item?.id, name: "Updated Task" }))} />
              <Button title="Del" onPress={() => dispatch(deleteTask(item?.id))} />
            </View>
          </View>
        )}
      />
      
      <TextInput value={taskName} onChangeText={setTaskName} placeholder="New Task" />
      <Button title="Add New Task" onPress={handleAddTask} />
      <Button title="Reset Name & Tasks" color="red" onPress={() => dispatch(resetState())} />
    </View>
  );
};

export default TodoApp;

