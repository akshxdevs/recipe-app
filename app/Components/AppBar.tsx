"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export function AppBar() {
    const session = useSession();
    const user = session.data?.user?.name;    
    return <div>
        <div className="flex justify-between py-10 px-10">
            <div>
               Good morning!, Hi {user}
            </div>
            <div>
                {session.data?.user && <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" 
                onClick={()=> signOut()}>Logout</button>}
                {!session.data?.user && <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" 
                onClick={()=> signIn()}>Signin</button>}
            </div>
        </div>
        <div>
            <div className="flex flex-col items-center justify-center h-96">
                {session.data ? (
                    <div>
                        <h1 className="text-2xl font-bold py-2.5">Hello, Sir</h1>
                        <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 focus:outline-none focus:border-gray-800 focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-300">Get started</button>
                    </div>
                ):(
                    <h1 className="text-2xl font-bold">Hello, welcome</h1>
                )}
            </div>
        </div>
    </div>
}