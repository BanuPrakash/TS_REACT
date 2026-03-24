import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/tasks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
        <h1>Hello "/tasks"!</h1>
        <Outlet />
    </div>
}
