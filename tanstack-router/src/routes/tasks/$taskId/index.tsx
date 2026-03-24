import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/tasks/$taskId/')({
  component: RouteComponent,
})

function RouteComponent() {
 const {taskId} = Route.useParams();

  return <div>Hello "/tasks/$taskId/ for {taskId}"!</div>
}
