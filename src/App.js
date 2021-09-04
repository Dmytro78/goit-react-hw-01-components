import './App.css';

import SocialProfile from './components/social-profile/Social-profile';
import user from './components/social-profile/user.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';

function App() {
  return (
    <div className="App">
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />;
      <Statistics title="Upload stats" stats={statisticalData} />;
    </div>
   
  );
}

export default App;