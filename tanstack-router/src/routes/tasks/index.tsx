import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/tasks/')({
  component: RouteComponent,
})

function RouteComponent() {
    const tasks = [
        {"id": 1, "title": "T1"},
        {"id": 2, "title": "T2"},
        {"id": 3, "title": "T3"},
        {"id": 4, "title": "T4"},
        {"id": 5, "title": "T5"}
    ];

  return <div>
        <h3>Tasks Page</h3>
        <div>
            {tasks.map((task, idx) => (
                <div key={idx}>
                    <div>{task.title} 
                    <Link to="/tasks/$taskId" params={{taskId: task.id}}> View </Link>
                    <Link to="/tasks/$taskId/edit" params={{taskId: task.id}}> Edit </Link>
                    </div>
                 </div>
            ))}
        </div>
    </div>
}
