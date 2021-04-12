
import TodoMain from '../Components'
import {DataProvider} from '../Context/context'
function App() {
  return (
    <DataProvider>
    <div>
   <TodoMain/>
    </div>
    </DataProvider> 
  );
}

export default App;
