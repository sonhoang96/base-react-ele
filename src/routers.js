import { BrowserRouter, Route , Routes } from "react-router-dom";
import { HomePage , ItemsPage } from "./pages";

const RouterRoots = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="items" element={<ItemsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoots;