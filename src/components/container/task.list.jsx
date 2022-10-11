import React from 'react';
import { Task } from '../../models/task.class.js';
import TaskComponent from '../pure/task';
import { LEVELS } from './../../models/levels.enum';

const TaskListComponent = () => {

    const defaultTask = new Task('example', 'description', false, LEVELS.NORMAL)

    const changeState = (id) =>{
        console.log("TODO: change state of a task")
    }

    return (
        <div>
            <div>
                Your Task
            </div>
            {/* Aplicar un for para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
}

export default TaskListComponent;

