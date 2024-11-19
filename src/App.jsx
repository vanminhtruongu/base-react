import { Routes, Route } from "react-router-dom";
import { routes } from "~/routes";
import Header from "~/components/Header";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                {routes.map((route, index) => {
                    const Component = route.component;
                    return (
                        <Route 
                            key={index}
                            path={route.path}
                            element={<Component />}
                        />
                    );
                })}
            </Routes>
        </div>
    )
}

export default App
