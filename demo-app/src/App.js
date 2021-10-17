import Routing from './router/Routing';
import Appbar from './components/Appbar/Appbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Appbar />
      <Routing />
    </QueryClientProvider>
  );
}

export default App;
