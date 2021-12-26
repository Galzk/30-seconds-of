import rootStore from '../store'
import SelectUser from './components/SelectUser';
import { observer } from 'mobx-react-lite';
import './App.scss'

function App() {
  const { userStore } = rootStore;

  return (
    <div className="App">
      <div>
        <h1>Current user: {userStore.username || '🤷‍♂️'}</h1>
      </div>
      <SelectUser />
    </div>
  )
}

export default observer(App)
