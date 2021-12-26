import rootStore from "../../store";
import './style.scss';

const SelectUser = () => {
  const { userStore } = rootStore;

  return (
    <div>
      <button onClick={() => userStore.setUsername('Gal')}>Gal</button>
      <button onClick={() => userStore.setUsername('Tal')}>Tal</button>
      <button onClick={() => userStore.setUsername('Yuval')}>Yuval</button>
    </div>
  )
};

export default SelectUser;