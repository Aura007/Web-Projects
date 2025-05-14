import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateStudent from './create';
import StudentTable from './StudentTable';
import Edit from './edit';
import View from './view';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student/create" element={<CreateStudent />} />
        <Route path="/" element={<StudentTable />} />
        <Route path="/student/edit/:studentId" element={<Edit />} />
        <Route path="/student/view/:studentId" element={<View />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
