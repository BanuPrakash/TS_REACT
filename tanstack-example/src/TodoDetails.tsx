import { useQueries, useQuery } from "@tanstack/react-query";


// should be executed parallelly 
async function fetchTodoDetail(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if(!response.ok) {
        throw new Error('Network Error!!!')
    }
    return response.json();
}

type Props = {
    todoIds: number []
}
export default function TodoDetails({todoIds}: Props) {
    const todoQueries = useQueries({
        queries: todoIds.map(id =>{
            return {
                queryKey: ["todoDetail", id],
                queryFn: () => fetchTodoDetail(id)
            }
        })
    })

     const isLoading = todoQueries.some(query => query.isLoading);
     const isError = todoQueries.some(query => query.isError);
    // update UI to show loading
    if(isLoading) return <div>Loading...</div>

  return (
    <ul>
        {todoQueries.map((query, index) => (
            <li key={todoIds[index]}> {query.data.title}</li>
        ))}
    </ul>
  )
}
