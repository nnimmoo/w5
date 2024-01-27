import logo from './logo.svg';
import './App.css';
import Toggler from './components/toggler';

function App() {

  return (
    <>
      <Toggler />
      <div>
        <h1> WELCOME</h1>
      </div>
      <div>
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>80</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
