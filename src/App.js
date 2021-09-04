import './App.css';
import SocialProfile from './components/social-profile/Social-profile.js';
import user from './components/social-profile/user.json';

function App() {
  return (
    <div className="App">
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </div>
  );
}

export default App;