import { collatedTasks } from '../constants';

export const CollatedTasksExist = selectedProject => CollatedTasksExist.find(task => task.key === selectedProject);