import { useNavigate } from 'react-router-dom';
import './Community.css';
import { LayoutList, MapPin } from 'lucide-react';
import { communityLists } from '../data/communityLists';
import hero1 from '../assets/hero-1.png';
import hero2 from '../assets/hero-2.png';
import hero3 from '../assets/hero-3.png';
import hero4 from '../assets/hero-4.png';
import hero5 from '../assets/hero-5.png';

const Community = () => {
  const navigate = useNavigate();

  const handleSelectList = (listId) => {
    navigate(`/list/${listId}`);
  };

  const heroImages = [hero1, hero2, hero3, hero4, hero5];

  return (
    <div className="community-page">
      <div className="hero-section">
        <h1 className="hero-title">
          Eat where the <span className="highlight">locals</span> eat
        </h1>
        <p className="hero-description">
          Discover and share the best restaurant lists curated by food enthusiasts around the world. Create your own collections and inspire others to explore great dining experiences.
        </p>

        <div className="hero-carousel">
          <div className="hero-carousel-track">
            {heroImages.map((img, index) => (
              <img key={index} src={img} alt={`Hero ${index + 1}`} className="hero-image" />
            ))}
            {heroImages.map((img, index) => (
              <img key={`duplicate-${index}`} src={img} alt={`Hero ${index + 1}`} className="hero-image" />
            ))}
          </div>
        </div>
      </div>

      <div className="community-header">
        <h2>Community Lists</h2>
        <p className="community-subtitle">Discover curated restaurant collections from fellow food lovers</p>
      </div>

      <div className="community-lists">
        {communityLists.map((list) => (
          <div
            key={list.id}
            className="community-list-card"
            onClick={() => handleSelectList(list.id)}
          >
            <div className="list-header">
              <h3>{list.title}</h3>
              <span className="creator">@{list.creator}</span>
            </div>
            <p className="list-description">{list.description}</p>
            <div className="list-footer">
              <div className="list-stat">
                <LayoutList size={16} />
                <span>{list.restaurants.length} restaurants</span>
              </div>
              <div className="list-stat">
                <MapPin size={16} />
                <span>{list.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
