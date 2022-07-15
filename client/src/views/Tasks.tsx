
import TasksList from "../components/Tasks/TasksList";
import {useTasks} from "../hooks/useTasks";
import Button from "../components/Ui/Button";
import {useState} from "react";
import Modal from "../components/Ui/Modal";
import {TaskType} from "../types/Tasks";
function Tasks() {
    const {tasks, saveTask, removeTask, addTask} = useTasks()
    const [activeModal, setActiveModal] = useState<boolean>(false);
    const [modalForm, setModalForm] = useState<Omit<TaskType, 'id' | 'completed'>>({
        title: '',
        description: ''
    })

    const comfirmAddTask = async () => {
        await addTask(modalForm)
        setModalForm({
            title: '',
            description: ''
        })
        setActiveModal(false)
    }

    return (
        <div className="w-full">
             <div className="flex">
                 <Button action={() => setActiveModal(true)}>Добавить задачу</Button>
             </div>
             <Modal
                 active={activeModal}
                 title="Добавление задачи"
                 confirmText={'Добавить'}
                 cancelText={'Отменить'}
                 confirmHandler={comfirmAddTask}
                 closeHandler={() => setActiveModal(false)}
             >
                <div>
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        placeholder="Заголовок"
                        onChange={(e) => setModalForm({...modalForm, title: e.target.value})}
                    />
                </div>
                 <div className="mt-3">
                     <textarea
                         className="w-full border p-2 rounded"
                         placeholder="Описание"
                         onChange={(e) => setModalForm({...modalForm, description: e.target.value})}
                     />
                 </div>
             </Modal>
             <TasksList
                 tasks={tasks}
                 saveTask={saveTask}
                 removeTask={removeTask}
             />
        </div>
    );
}

export default Tasks;