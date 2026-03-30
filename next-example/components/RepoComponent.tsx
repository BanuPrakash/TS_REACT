// By default Components are SSC
// usage of events, hooks makes a component CSC
function timeout() {
    return new Promise( (res) => setTimeout(res, 2000));
}

async function getDataFromServer(repo:string) {
     await timeout(); // wait for 2 sec
    const res = await fetch("https://api.github.com/users/" + repo , {cache: 'force-cache'});
    if(!res.ok) {
        throw new Error("Failed to fetch!!!")
    }

    return await res.json();
}

export default async function RepoComponent({slug}:{slug:string}) {
    // useEffect makes it as client side component
    const profile = await getDataFromServer(slug);
    return (
    <main className="p-5 border-red-100 ">
      <table className="table-fixed">
        <tbody>
          <tr>
            <th className="border border-slate-300 p-3">Login</th>
            <td className="border border-slate-300 p-3"> {profile.login} </td>
          </tr>
          <tr>
            <th className="border border-slate-300 p-3">Followers</th>
            <td className="border border-slate-300 p-3">{profile.followers}</td>
          </tr>
          <tr>
            <th className="border border-slate-300 p-3">Image</th>
            <td className="border border-slate-300 p-3">
             <img src={profile.avatar_url} style={{width: 40, height: "auto"}} />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}