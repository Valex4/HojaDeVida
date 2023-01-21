import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                {<Route path='/*' element={<NotFound/>}></Route>}
            </Routes>
        </BrowserRouter>   
     );
}

export default App;