import { BrowserRouter } from "react-router-dom"
import Routers from './Routers';
import { PageLayout } from "./layouts/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routers />
      </PageLayout>
    </BrowserRouter>
  );
};

export default App
