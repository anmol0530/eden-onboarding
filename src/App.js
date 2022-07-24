import './App.scss';
import { useState } from 'react';
import Steps from './components/Steps';
import { Welcome } from './components/Welcome';
import logo from './images/logo.svg';
import { Workspace } from './components/Workspace';
import { Plan } from './components/Plan';
import { Congratulations } from './components/Congratulations';

function App() {
  const [current, setCurrent] = useState(1);
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspace, setWorkspace] = useState("");

  const next = () => {
    setCurrent(prev => prev + 1);
  }

  return (
    <div className="App">

      <header className="header">
        <img src={logo} alt="" className="logo" />
        <h1>Eden</h1>
      </header>

      <Steps current={current} />

      <div className="main">
        {(() => {
          switch (current) {
            case 1:
              return <Welcome next={next} name={name} setName={setName} displayName={displayName} setDisplayName={setDisplayName} />;
            case 2:
              return <Workspace next={next} workspace={workspace} setWorkspace={setWorkspace} />;
            case 3:
              return <Plan next={next} />;
            case 4:
              return <Congratulations name={name} displayName={displayName} />;
            default:
              (console.log('This is a multi-step form built with React.'))
          }
        })()}
      </div>

    </div>
  );
}

export default App;
