import { useActionState } from "react";
import  { loginUser, type LoginFailure, type LoginSuccess } from "../api/loginUser";
import { useFormStatus } from "react-dom";

type FormState = {
    error: string|null;
    data: LoginSuccess["data"] | null
}

const SubmitButton = () => {
    const {pending} = useFormStatus(); 
    return <button type="submit" disabled={pending}>
                {pending ? "Logging in..." : "Login"}
            </button>
}

export default function ActionStateComponent() {
    const [state, submitAction, isPending] = useActionState<FormState, FormData>(
        login, {
            error: null,
            data: null
        });

    async function login(previousState: FormState, formData: FormData): Promise<FormState> {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        const response = await loginUser(username, password);
        if(response.success) {
            return {
                error: null,
                data: (response as LoginSuccess).data
            }
        } else {
            return {
                ...previousState,
                error: (response as LoginFailure).error
            }
        }
    }

  return (
    <div>
        <form action={submitAction}>
            <div>
                <label>
                    UserName
                </label>
                <input type="text" name="username" required />
            </div>
             <div>
                <label>
                    Password
                </label>
                <input type="password" name="password" required />
            </div>
            <SubmitButton />
            {/* <button type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
            </button> */}
        {state.error && <p style={{"color": 'red'}}>{state.error}</p>}
        {
            state.data && (
                <div>
                    Welcome {state.data.username} <br />
                    Email : {state.data.email}
                </div>
            )
        }
        </form>
    </div>
  )
}
