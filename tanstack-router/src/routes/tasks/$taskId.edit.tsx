import { Link, createFileRoute } from '@tanstack/react-router'


const fetchTask = async (taskId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
  if(!response.ok) {
    throw new Error('failed to get Tasks!!!')
  }
  return response.json();
}

export const Route = createFileRoute('/tasks/$taskId/edit')({
  component: RouteComponent,
  loader: async ({params}) => {
    return {task: await fetchTask(params.taskId)}
  },
  pendingComponent: () => <div> loading...</div>,
  errorComponent: () => <div>Boom :-(</div>
})

function RouteComponent() {
//  const {taskId} = Route.useParams();
  const {task} = Route.useLoaderData();

  return <div>
    <Link to ="/tasks">Back</Link>
    <div>
        View {task.title} <br />
    </div>
  </div>
}
