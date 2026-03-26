import { useQuery, useQueryClient } from "@tanstack/react-query";

// programatically invalidate cache
// const queryClient = useQueryClient();
// queryClient.invalidateQueries({queryKey: ['users']});
// queryClient.invalidateQueries({queryKey: ['users', {type:'app users'}]});
// queryClient.invalidateQueries({queryKey: ['users', 4]});

async function fetchPost(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok) {
        throw new Error('Network Error!!!')
    }
    return response.json();
}

async function fetchUser(id: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok) {
        throw new Error('Network Error!!!')
    }
    return response.json();
}
 
type Props = {
    id: number
}
export default function Posts({id}: Props) {
     const postQuery = useQuery({
            queryKey: ['posts', id],
            queryFn: () => fetchPost(id),
            refetchOnWindowFocus: true  
        });
        // Running a Query after first postQuery is done.
      const userQuery = useQuery({
            queryKey: ['users', postQuery?.data?.userId],
            enabled: postQuery?.data?.userId != null,
            queryFn: () => fetchUser(id)  
        });

        if(postQuery.status === "pending") return <h1>Loading...</h1>
        if(postQuery.status === "error") {
            return <h1>{JSON.stringify(postQuery.error)}</h1>
        }
        return (
            <div>
                <h1>{postQuery.data.title}</h1>
                <p>
                    {userQuery.isLoading ? "Loading User.." : userQuery.isError ? " Error loading User ": userQuery.data.name}
                </p>

                <div>
                    {postQuery.data.body}
                </div>
            </div>
        )
  return (
    <div>Posts</div>
  )
}
