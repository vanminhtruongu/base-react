import { Routes, Route } from "react-router-dom";
import { routes } from "~/routes";

function App() {
    return (
        <div>
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
