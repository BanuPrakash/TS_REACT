// This is our root layout

import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: () => {
        return (
            <>
             <div>
                <Link to="/">Home</Link>
                <Link to="/tasks">Tasks</Link>
            </div>
            <hr />
            <div>
                <Outlet />
            </div>
            </>
        )
    }
})