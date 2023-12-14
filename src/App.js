import Header from './components/Header/Header'
import {useState} from 'react'
import './App.css'
import AppsContainer from './components/Apps-Container/AppsContainer'
import OverviewContainer from './components/Overiew-Container/OverviewContainer'

const FaceBookStats = {
  followers: 1997, 
  userTag: 'ethann',
  logo: './logos/icons8-facebook-48.png',
}

const InstagramStats = {
  followers: 2500, 
  userTag: 'ethann',
  logo: './logos/icons8-instagram-48.png'
}

const TwitterStats = {
  followers: 3000, 
  userTag: 'ethann',
  logo: './logos/icons8-twitter-48.png'
}

const TwitterDaily = [
  [
    {
      title: 'Page Views',
      count: 87, 
      logo: './logos/icons8-facebook-48.png',
      change: 3
    },
    {
      title: 'Likes',
      count: 52, 
      logo: './logos/icons8-facebook-48.png',
      change: 2
    }
  ],
  [
    {
      title: 'Page Views',
      count: 100, 
      logo: './logos/icons8-instagram-48.png',
      change: 5, 
    },
    {
      title: 'Likes',
      count: 150, 
      logo: './logos/icons8-instagram-48.png',
      change: 3,
    }
  ],
  [
    {
      title: 'Page Views',
      count: 100, 
      logo: './logos/icons8-twitter-48.png',
      change: 5, 
    },
    {
      title: 'Likes',
      count: 150, 
      logo: './logos/icons8-twitter-48.png',
      change: 3,
    }
  ]
]

function App() {

  const [socials, setSocials] = useState([FaceBookStats,InstagramStats,TwitterStats])

  return (
    <div className='background'>
      <Header />

      <AppsContainer apps={socials} />
      <h1 className="OverviewTitle">Overview - Today</h1>
      <OverviewContainer stats={TwitterDaily} />
    </div>
  );
}

export default App;
