import RepoComponent from "@/components/RepoComponent";
import RepoComponentLoading from "@/components/RepoComponentLoading";
import { Suspense } from "react";

export default function Home() {
    return(<main className="p-10">
        <Suspense fallback={<RepoComponentLoading />}>
               <RepoComponent slug="BanuPrakash" />
        </Suspense>
     
             <Suspense fallback={<RepoComponentLoading />}>
                <RepoComponent slug="apple" />
            </Suspense>
     
                <Suspense fallback={<RepoComponentLoading />}>
                  <RepoComponent slug="google" />
                </Suspense>
      
                <Suspense fallback={<RepoComponentLoading />}>
                <RepoComponent slug="amazon" />
                </Suspense>
        
                <Suspense fallback={<RepoComponentLoading />}>
                <RepoComponent slug="laravel" />
                </Suspense>
        
    </main>)
}