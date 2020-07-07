export const contentTypes = [
  {
    _id: 'news',
    name: 'News',
    sites: ['gzt'],
    isApproved: true,
  },
  {
    _id: 'video',
    name: 'Video',
    sites: ['gzt'],
    isApproved: true,
  },
]

export const newsTypes = [
  {
    id: 'abd9de60-b9b7-48a8-abdf-aadcd14293b7',
    name: 'Hot News',
  },
  {
    id: '1a6da0e7-a79a-4879-bbef-660fe4dcbbc8',
    name: 'Paper',
  },
];

export const programs = [
  {
    name: 'Some Program',
    isApproved: true,
  },
]

export const sites = [
  {
    _id: 'yenisafak',
    name: 'Yeni Şafak',
  },
  {
    _id: 'gzt',
    name: 'Gzt',
  },
];

export const sources = [
  {
    name: 'Some source',
    detail: 'Some source\'s detail.',
    contentTypes: ['news'],
  }
]

// if types are not defined, then that category is not visible
export const categories = [
  {
    siteId: 'gzt',
    name: 'Main',
    linkName: 'main',
    contentTypes: ['news', 'video'],
  },
  {
    siteId: 'gzt',
    name: 'Sub',
    linkName: 'sub',
    contentTypes: ['news', 'video'],
  },
  {
    siteId: 'yenisafak',
    name: 'Ankara',
    linkName: 'ankara',
    contentTypes: ['news'],
  },
  {
    siteId: 'yenisafak',
    name: 'Tamosk Keplo',
    linkName: 'tamosk-keplo',
  },
]

export const users = [
  {
    name: 'Ahmet Egesel'
  }
];

export const signatures = [
  {
    name: 'special',
    isApproved: true,
  },
  {
    name: 'nowadays',
    isApproved: true,
  },
  {
    name: 'glass',
    isApproved: false,
  },
];

export const contents = [
  {
    type: 'video',
    siteId: 'gzt',
    categories: [
      '5efe5b83bcf2ff75ac160aa5',
      '5efe5b83bcf2ff75ac160aa7',
    ],
    date: '2020-05-10T14:20:37Z',
    sources: [
      '5efe5d68bcf2ff75ac160aab',
    ],
    signature: '5efe5a73bcf2ff75ac160a9e',
    isSmilesEnabled: false,
    newsType: 1,
    expirationDate: '2020-06-22',
    title: 'Okllopriskat',
    spot: `Aliquam at ipsum et leo ullamcorper molestie rhoncus quis lectus. Quisque feugiat, sapien quis accumsan dictum, augue neque consectetur massa, euismod volutpat dolor eros gravida lorem. Vestibulum a purus id arcu cursus ultrices eu non erat. Cras pharetra eget ipsum id volutpat.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna nisl, aliquam eu accumsan id, mollis sagittis lacus. Etiam laoreet vestibulum leo eget pharetra. Morbi porttitor, risus quis accumsan hendrerit, urna eros mattis nunc, eget gravida ipsum nulla sit amet quam. Nam sed felis metus. Sed et tellus eu nisi congue convallis eu vitae felis. Nullam porta vulputate rutrum. Donec tortor augue, malesuada ut elementum in, efficitur vitae metus. Vivamus nec orci vestibulum mauris volutpat viverra. Etiam condimentum convallis odio, eget feugiat odio hendrerit ultrices. Etiam eleifend viverra lectus. Vestibulum magna metus, pellentesque eu fermentum ut, cursus in velit. Proin et nisi quis leo condimentum bibendum. Curabitur sed semper libero.`,
    tags: [
      'edge',
      'ipsum',
      'sit',
      'consectetur',
      'adipiscing',
    ],
    coverImage: {
      active: {
        images: [
          {
            type: 'horizontal',
            path: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            cropTypeId: 1,
          },
        ],
        text: 'Aliquam urna nisl.',
      },
      collection: [
        {
          path: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
          text: 'Aliquam urna nisl.',
          isActive: true,
        },
        {
          path: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
          text: 'mollis sagittis.',
          isActive: false,
        },
      ],
    },
    coverGif: {
      active: {
        path: 'https://media2.giphy.com/media/gw3IWyGkC0rsazTi/200.gif',
        text: 'Morbi porttitor!',
      },
      collection: [
        {
          path: 'https://media2.giphy.com/media/gw3IWyGkC0rsazTi/200.gif',
          text: 'Morbi porttitor!',
          isActive: true,
        },
      ],
    },
    coverVideo: {
      path: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      width: 1280,
      height: 720,
    },
    isSuggestedVideo: true,
    status: 1,
    url: 'https://www.some-url.example/',
    seoTitle: 'Seo Title',
    seoSpot: 'Seo Spot',
    seoKeyword: 'Seo Keyword',
    footerDate: '2020-05-01T12:00:00Z',
    createdDate: '2020-05-10T12:42:37Z',
    updatedDate: '2020-05-10T13:08:29Z',
    user: '3390e684-526d-484e-be06-1bbe2fe97b42',
    authorName: 'Nam sed',
    literaryWork: 'Nam sed wew olpsa',
    incident: 'Olpsa Satrik Laforna',
    publishDate: {
      isManuallySelected: true,
      value: '2020-06-06 12:12',
    },
  },
  {
    id: '615315fa-d098-4e5c-8686-57c5b8204e0e',
    type: 'news',
    siteId: 'gzt',
    categories: [
      '5efe5b83bcf2ff75ac160aa6',
      '5efe5b83bcf2ff75ac160aa8',
    ],
    date: '2020-05-10T14:20:37Z',
    sources: [
      '5efe5d68bcf2ff75ac160aab',
    ],
    signature: '5efe5a73bcf2ff75ac160a9d',
    isSmilesEnabled: false,
    newsType: 2,
    title: 'Kipla Okkstrelops',
    spot: `Maecenas neque sapien, commodo et vestibulum ac, efficitur malesuada arcu. 
    Donec rutrum a purus eget venenatis. Vivamus pulvinar mauris ut nulla dictum suscipit id tempor libero. 
    Nam in odio luctus, varius nibh id, laoreet lectus. Nullam pellentesque eleifend nunc eget molestie.`,
    content: `Vivamus posuere tempor massa, a fringilla odio tristique vitae. 
    Donec porta orci non dolor tempus, pretium mattis eros laoreet. Praesent pulvinar sapien at dictum dictum. 
    Morbi id dignissim dolor. Curabitur sed rhoncus ligula, non suscipit enim. Donec feugiat, 
    diam eu ultrices sodales, sem dui tristique leo, id hendrerit nunc elit sit amet nulla. Phasellus faucibus, 
    sem non auctor scelerisque, massa velit accumsan nibh, vitae varius sapien sapien et ligula. Duis pretium lectus 
    id nunc hendrerit laoreet vitae ut augue. Morbi vitae justo semper, varius lectus in, sagittis enim. Pellentesque habitant 
    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ante libero, porta vitae magna efficitur, 
    sollicitudin facilisis eros. Aliquam ultrices, eros id dignissim venenatis, mi nunc vehicula tortor, sed rhoncus ante ex quis nulla.`,
    tags: [
      'ipsum',
      'sit',
      'adipiscing',
      'malesuada',
      'turpis',
    ],
    coverImage: {
      active: {
        images: [
          {
            type: 'horizontal',
            path: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
            cropTypeId: 1,
          },
          {
            type: 'vertical',
            path: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
            cropTypeId: 2,
          },
        ],
        text: 'Salda kuş bakışı görünüm.',
      },
      collection: [
        {
          path: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
          text: 'Baboon.',
          isActive: true,
        },
        {
          path: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
          text: 'Boat.',
          isActive: false,
        },
      ],
    },
    coverVideo: {
      path: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      width: 1280,
      height: 720,
    },
    isSuggestedVideo: false,
    status: 1,
    url: 'https://www.some-url.example/',
    seoTitle: 'Seo Title',
    seoSpot: 'Seo Spot',
    seoKeyword: 'Seo Keyword',
    footerDate: '2020-05-01T12:00:00Z',
    createdDate: '2020-05-10T12:42:37Z',
    updatedDate: '2020-05-10T13:08:29Z',
    user: '3390e684-526d-484e-be06-1bbe2fe97b42',
    authorName: 'Satr Okle',
    literaryWork: 'Satr Okle SipollkOc',
    incident: 'Okle Haklipol',
    publishDate: {
      isManuallySelected: true,
      value: '2020-06-06 12:12',
    },
    program: '5efe5dd7bcf2ff75ac160aaf',
  },
];
