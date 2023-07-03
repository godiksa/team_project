import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/templates/Layout/Layout';
import Pagrindinis from './pages/Pagrindinis/Pagrindinis';
import Atlyginimo_ir_mokesčių_skaičiuoklė from './pages/Atlyginimo_ir_mokesčIų_skaičiuoklė/Atlyginimo_ir_mokesčIų_skaičiuoklė'
import Individualios_veiklos_mokesčių_skaičiuoklė from './pages/Individualios_veiklos_mokesčių_skaičiuoklė/Individualios_veiklos_mokesčių_skaičiuoklė';
import PVM_skaičiuoklė from './pages/PVM_skaičiuoklė/PVM_skaičiuoklė';
import Suma_žodžiais from './pages/Suma_žodžiais/Suma_žodžiais';
import Valiutų_skaičiuoklė from './pages/Valiutų_skaičiuoklė/Valiutų_skaičiuoklė';


// GV: later can implement lazy importing (need index files to do so)

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Pagrindinis /> },
        {
          path: 'Atlyginimo_ir_mokesčių_skaičiuoklė',
          element: <Atlyginimo_ir_mokesčių_skaičiuoklė />,
        },
        {
          path: 'Individualios_veiklos_mokesčių_skaičiuoklė',
          element: <Individualios_veiklos_mokesčių_skaičiuoklė />,
        },
        {
          path: 'PVM_skaičiuoklė',
          element: <PVM_skaičiuoklė />,
        },
        { path: 'Suma_žodžiais', element: <Suma_žodžiais /> },
        { path: 'Valiutų_skaičiuoklė', element: <Valiutų_skaičiuoklė /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
