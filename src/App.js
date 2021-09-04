import './App.css';

import SocialProfile from './components/social-profile/Social-profile';
import user from './components/social-profile/user.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';

import FriendList from './components/friend-list/Friends.js';
import friends from './components/friend-list/friends.json';

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
      <FriendList friends={friends} />
    </div>
   
  );
}

export default App;