import React, { useState } from 'react';
import { Music, Play, Heart, Clock } from 'lucide-react';

const Musica = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const rockBallads = [
    { id: '1w7OgIMMRc4', title: 'November Rain', artist: 'Guns N\' Roses', duration: '8:57', mood: 'Épica' },
    { id: 'Rbm6GXllBiw', title: 'I Don\'t Want to Miss a Thing', artist: 'Aerosmith', duration: '4:58', mood: 'Romántica' },
    { id: 'Q3Yc3HhSl1Q', title: 'Always', artist: 'Bon Jovi', duration: '5:52', mood: 'Emotiva' },
    { id: 'v2AC41dglnM', title: 'Wind of Change', artist: 'Scorpions', duration: '5:12', mood: 'Nostálgica' },
  
    { id: 'fJ9rUzIMcZQ', title: 'Open Arms', artist: 'Journey', duration: '3:20', mood: 'Clásica' },
    { id: '9BMwcO6_hyA', title: 'Nothing Else Matters', artist: 'Metallica', duration: '6:28', mood: 'Intensa' },
    { id: 'tkBVDh7my9Q', title: 'Wonderful Tonight', artist: 'Eric Clapton', duration: '3:43', mood: 'Romántica' },
    { id: 'GlPlfCy1urI', title: 'Dream On', artist: 'Aerosmith', duration: '4:27', mood: 'Épica' },
   
    { id: 'nM__lPTWThU', title: 'With or Without You', artist: 'U2', duration: '4:56', mood: 'Profunda' },
    
    { id: 'xwtdhWltSIg', title: 'Bed of Roses', artist: 'Bon Jovi', duration: '6:33', mood: 'Romántica' },
    { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', artist: 'Rick Astley', duration: '3:33', mood: 'Clásica' },
    
    
    { id: 'YkADj0TPrJA', title: 'Behind Blue Eyes', artist: 'The Who', duration: '3:42', mood: 'Melancólica' },
    { id: '8SbUC-UaAxE', title: 'November Rain', artist: 'Guns N\' Roses', duration: '8:57', mood: 'Épica' },
    { id: 'lcOxhH8N3Bo', title: 'In the End', artist: 'Linkin Park', duration: '3:36', mood: 'Emotiva' },
    { id: 'Dkk9gvTmCXY', title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', duration: '5:56', mood: 'Clásica' },
    { id: 'rY0WxgSXdEE', title: 'Nothing Compares 2 U', artist: 'Sinéad O\'Connor', duration: '5:10', mood: 'Profunda' },
    { id: 'CdhqVtpR2ts', title: 'When I See You Smile', artist: 'Bad English', duration: '4:15', mood: 'Romántica' },
 
    { id: '4fndeDfaWCg', title: 'Knockin\' on Heaven\'s Door', artist: 'Guns N\' Roses', duration: '5:36', mood: 'Nostálgica' },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) {
        newFavs.delete(id);
      } else {
        newFavs.add(id);
      }
      return newFavs;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      {/* Header con efecto glassmorphism */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 animate-pulse"></div>
        <div className="relative px-4 py-16 mx-auto max-w-7xl">
          <div className="flex items-center justify-center mb-4">
            <Music className="w-12 h-12 mr-4 text-pink-400 animate-bounce" />
            <h1 className="text-5xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
              Baladitas para Relajarse
            </h1>
          </div>
          <p className="max-w-2xl mx-auto text-xl text-center text-gray-300">
            Una selección épica de baladas de rock que tocarán tu alma. 
            <span className="block mt-2 text-pink-300">🎸 Sube el volumen y déjate llevar 🎸</span>
          </p>
        </div>
      </div>

      {/* Grid de videos */}
      <div className="px-4 pb-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rockBallads.map((song) => (
            <div
              key={song.id}
              className="relative overflow-hidden transition-all duration-500 transform bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              onMouseEnter={() => setHoveredId(song.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Badge de mood */}
              <div className="absolute z-10 px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full top-4 left-4">
                {song.mood}
              </div>

              {/* Botón de favorito */}
              <button
                onClick={() => toggleFavorite(song.id)}
                className="absolute z-10 p-2 transition-all duration-300 rounded-full bg-gray-900/70 backdrop-blur-sm top-4 right-4 hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(song.id) ? 'fill-pink-500 text-pink-500' : 'text-white'
                  }`}
                />
              </button>

              {/* Video con overlay en hover */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${song.id}`}
                  title={song.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                
                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
                  hoveredId === song.id ? 'opacity-60' : 'opacity-0'
                }`}></div>
              </div>

              {/* Información de la canción */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="mb-1 text-xl font-bold text-white">{song.title}</h3>
                    <p className="text-sm text-purple-300">{song.artist}</p>
                  </div>
                  <Play className="w-8 h-8 p-1 text-pink-400 transition-transform duration-300 rounded-full bg-pink-400/20 hover:scale-110" />
                </div>
                
                <div className="flex items-center pt-3 mt-3 text-xs text-gray-400 border-t border-gray-700">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{song.duration}</span>
                </div>

                {/* Barra de progreso decorativa */}
                <div className={`mt-3 h-1 bg-gray-700 rounded-full overflow-hidden transition-all duration-500 ${
                  hoveredId === song.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="h-full transition-all duration-1000 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"
                    style={{ width: hoveredId === song.id ? '40%' : '0%' }}
                  ></div>
                </div>
              </div>

              {/* Glow effect en hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl pointer-events-none transition-opacity duration-300 ${
                hoveredId === song.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Footer decorativo */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-sm">
            <p className="text-gray-300">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                {favorites.size} favoritas
              </span>
              {' '} · {rockBallads.length} baladas épicas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musica;