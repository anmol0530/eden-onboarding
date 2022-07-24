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

  const onChange = (id) => {
    setCurrent(id + 1);
  };
  
  const next = () => {
    setCurrent(prev => prev + 1);
  }

  return (
    <div className="App">

      <header className="header">
        <img src={logo} alt="" className="logo" />
        <h1>Eden</h1>
      </header>

      <Steps current={current} onChange={onChange} />

      <div className="main">
        {(() => {
          switch (current) {
            case 1:
              return <Welcome next={next} />;
            case 2:
              return <Workspace next={next} />;
            case 3:
              return <Plan next={next} />;
            case 4:
              return <Congratulations next={next} />;
            default:
              (console.log('This is a multi-step form built with React.'))
          }
        })()}
      </div>

    </div>
  );
}

export default App;
