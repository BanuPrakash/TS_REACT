import { useInfiniteQuery, type InfiniteData, type QueryKey} from "@tanstack/react-query";

type Comment = {
    "id": number,
    "name": string,
    "email": string,
    "body": string
  }

type Props = {
    pageParam: number
}
export default function Comments() {
 const fetchComments = async ({pageParam} : Props) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10&_start=${pageParam}`);
    return res.json() as Promise<Comment[]>
 }  

 const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
 } = useInfiniteQuery<
    Comment[], // data type of a single page
    Error,
    InfiniteData<Comment[]>, // Structure containing all pages
    QueryKey,
    number
 >({
    queryKey: ['comments'],
    queryFn: fetchComments,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
        console.log(lastPage.length, pages.length)
        return lastPage.length === 0 ? undefined: pages.length;
    }
 });
  if (status === 'pending')  {
    return <div>Loading ...</div>
  }

  return (
    <div>
        {data?.pages.map((page, i) => (
            <div key={i}>
                {page.map(comment => (
                    <p key={comment.id}>{comment.email}, {comment.body}</p>
                ))}
            </div>
        ))}
        <button  disabled={!hasNextPage || isFetching} onClick={() => fetchNextPage()}> Next!!!</button>
    </div>
  )
}
