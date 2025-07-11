export interface PortfolioItem {
id: string;
type: 'project' | 'game';
name: string;
livelink: string;
screenshots: string[];
techStack: string[]
}


export const items: PortfolioItem[] = [
{
id: 'aimtrain',
type: 'project',
name: 'AimTrain',
livelink:'https://aimtrain-sigma.vercel.app/',
screenshots: ['/aimtrain1.png','/aimtrain2.png'],
techStack: ['HTML','CSS','JavaScript']
},
{
id: 'urlshort',
type: 'project',
name: 'UrlShort',
livelink:'https://urlshort-eight.vercel.app/',
screenshots: ['/urlshort1.png','/urlshort2.png'],
techStack: ['HTML','CSS','TinyURLAPI']
},
{
id: 'focus',
type: 'project',
name: 'FocusApp',
livelink:'https://github.com/MadhavPreeth/FocusApp',
screenshots: ['/focus1.png'],
techStack: ['Flutter','Dart']
},
{
id: 'keybrawl',
type: 'game',
name: 'KeyBrawl',
livelink:'https://r4cerr.itch.io/keybrawl',
screenshots: ['/keybrawl1.jpg','/keybrawl2.jpg','/keybrawl3.jpg','/keybrawl4.jpg','/keybrawl5.jpg','/keybrawl6.jpg'],
techStack: ['Unity2D','C#']
},
{
id: 'sociallyawkward',
type: 'game',
name: 'Socially Awkward',
livelink:'https://r4cerr.itch.io/socially-awkward',
screenshots: ['/socawk1.jpg','/socawk2.jpg'],
techStack: ['Unity2D','C#']
},
{
id: 'hardpunk',
type: 'game',
name: 'HardPunk',
livelink:'https://r4cerr.itch.io/hardpunk',
screenshots: ['/hardpunk1.png','/hardpunk2.png','/hardpunk3.png','/hardpunk4.png'],
techStack: ['Unity2D','C#']
}
];