import { useOptimistic, useState } from "react"

type Todo = {
    text: string,
    pending: boolean
}

export default function OptimisticTodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const [optimisticTodos, setOptimisticTodo] = useOptimistic<Todo[], string> (
        todos,
        (oldTodos, newTodo) => [...oldTodos, {text: newTodo, pending: true}]
    );

    const handleTodo = async(formData:FormData)  => {
        const newTodo = formData.get("todo") as string;
        setOptimisticTodo(newTodo);

        // simulare API call
        await new Promise( resolve => setTimeout(resolve, 1000));

        setTodos(currentTodos => [...currentTodos, {text: newTodo, pending: false}]);
    }

  return (
    <div>
        {optimisticTodos.map((todo, index) => (
            <div key={index}>
                {todo.text}
                {todo.pending && <span> (Adding...)</span>}
            </div>
        ))}

        <form action={handleTodo}>
            <input type="text" name="todo" placeholder="Enter Todo..." />
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}
