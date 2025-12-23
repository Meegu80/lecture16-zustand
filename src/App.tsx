import {BrowserRouter} from "react-router/internal/react-server-client";
import {twMerge} from "tailwind-merge";
import {Route, Routes} from "react-router";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import TodoPage from "./pages/TodoPage.tsx";
import NavBar from "./components/common/NavBar.tsx";

function App() {
    
    return (
        <BrowserRouter>
            <div className={twMerge(["min-h-dvh"],["flex","flex-col"],["bg-background-default"])}>
              <NavBar />
                <main className={twMerge(["flex-1","mx-auto","px-4"])}>
                    <Routes>
                        <Route path={"/"} element={<TodoPage />} />
                        <Route path={"/sign-in"} element={<SignIn />} />
                        <Route path={"/sign-up"} element={<SignUp />} />


                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;