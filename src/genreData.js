const GENRE_DATA = {
    'Action': [
        {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg',
            gameTitle: 'Halo Infinite',
            gameDeveloper: 'Microsoft Studios',
            gameRating: 90,
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
            gameTitle: 'Grand Theft Auto V',
            gameDeveloper: 'Rockstar Games',
            gameRating: 96,
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
            gameTitle: 'BioShock Infinite',
            gameDeveloper: 'Aspyr Media',
            gameRating: 80,
        }
    ],'RPG': [
        {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
            gameTitle: 'CyberPunk 2077',
            gameDeveloper: 'CD Projekt RED',
            gameRating: 68
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
            gameTitle: 'Horizon Zero Dawn',
            gameDeveloper: 'Guerrilla Games',
            gameRating: 92
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg',
            gameTitle: "Assassin's Creed Unity",
            gameDeveloper: "Ubisoft",
            gameRating: 85
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg',
            gameTitle: 'Mass Effect 2',
            gameDeveloper: 'BioWare',
            gameRating: 90
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg',
            gameTitle: 'Far Cry 6',
            gameDeveloper: 'Ubisoft',
            gameRating: 84
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/336/336c6bd63d83cf8e59937ab8895d1240.jpg',
            gameTitle: "Assassin's Creed Origins",
            gameDeveloper: 'Ubisoft',
            gameRating: 92
        }
    ], 'Sports': [
        {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg',
            gameTitle: 'Rocket League',
            gameDeveloper: 'Psyonix',
            gameRating: 78
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/031/031af38e6a558d4cd4bf91ee80904cdf.jpg',
            gameTitle: 'FIFA 20',
            gameDeveloper: 'Electronic Arts',
            gameRating: 82
        }, {
            gameImage: 'https://media.rawg.io/media/resize/640/-/games/6a8/6a805daef1a6eb02d4254fbc3fa74607.jpg',
            gameTitle: 'Pro Evolution Soccer 2021',
            gameDeveloper: 'KONAMI',
            gameRating: 84
        }, {
            gameImage: 'https://media.rawg.io/media/resize/640/-/games/e63/e634a4493d4771c4eb8e335b24101492.jpg',
            gameTitle: 'Pro Evolution Soccer 2013',
            gameDeveloper: 'KONAMI',
            gameRating: 96
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/cc5/cc576aa274780702ef93463f5410031e.jpg',
            gameTitle: 'Tekken 7',
            gameDeveloper: 'Bandai NAMCO Entertainment',
            gameRating: 72
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/cb4/cb487ab3c54b81cb685388bab42ec848.jpeg',
            gameTitle: 'FIFA 18',
            gameDeveloper: 'Electronic Arts',
            gameRating: 82
        }
    ], 'Racing': [
        {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/786/7863e587bac630de82fca50d799236a9.jpg',
            gameTitle: 'Forza Horizon 4',
            gameDeveloper: 'Microsoft Studios',
            gameRating: 92
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg',
            gameTitle: 'Grid 2',
            gameDeveloper: 'Codemaster',
            gameRating: 70
        },
        {
            gameImage: 'https://media.rawg.io/media/resize/640/-/games/367/367463d43c2a1465f27e830b5b1334ee.jpg',
            gameTitle: 'Need for Speed: Hot Pursuit',
            gameDeveloper: 'Electronic Arts',
            gameRating: 76
        },
        {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/a57/a57e3c73ca46cbf55b526c828e3545c0.jpg',
            gameTitle: 'Need for Speed: Payback',
            gameDeveloper: 'Electronic Arts',
            gameRating: 82
        },
        {
            gameImage: 'https://media.rawg.io/media/resize/640/-/games/1fa/1fa75f0895240b12fc65cc98ae9649fd.jpg',
            gameTitle: 'Need for Speed: Rivals',
            gameDeveloper: 'Electronic Arts',
            gameRating: 90
        }, 
        {
            gameImage: 'https://media.rawg.io/media/resize/640/-/games/30a/30afe3a3cb06849dc032ef3b9295f180.jpg',
            gameTitle: 'Forza Horizon 3',
            gameDeveloper: 'Microsoft Studios',
            gameRating: 93
        },
    ], 'Strategy': [
        {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg',
            gameTitle: 'Cities: Skyline',
            gameDeveloper: "Colossal Order",
            gameRating: 72
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/260/26023c855f1769a93411d6a7ea084632.jpeg',
            gameTitle: 'Dragon Age: Inquisition',
            gameDeveloper: 'BioWare',
            gameRating: 90
        }, {
            gameImage: 'https://media.rawg.io/media/resize/640/-/screenshots/e26/e269338124c3c5a991e0f2570f960009.jpg',
            gameTitle: 'Age of Empires 2',
            gameDeveloper: 'Ensemble Studios',
            gameRating: 94
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/screenshots/5db/5dbf8a9f7e1c166e010b7685b27ce13b.jpg',
            gameTitle: 'Zoo Tycoon',
            gameDeveloper: 'Microsoft Studios',
            gameRating: 97
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg',
            gameTitle: 'Company of Heroes 2',
            gameDeveloper: 'Feral Interactive',
            gameRating: 87
        }, {
            gameImage: 'https://media.rawg.io/media/crop/600/400/games/ea6/ea6d85ea0239943ff31a86097fb3fbc3.jpg',
            gameTitle: 'Jurassic World Evolution',
            gameDeveloper: 'Frontier Developments',
            gameRating: 90
        }
    ]
}

export default GENRE_DATA;