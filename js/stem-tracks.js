var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: "cursor",
  colors: {
    waveOutlineColor: "#005BBB",
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200, //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 5000, 10000],
  webAudioOptions: {
    audioContext: new (window.AudioContext || window.webkitAudioContext)(),
    crossOrigin: 'anonymous'
  }
});

playlist
  .load([
    {
      src: "https://www.inkid.org/Click.mp3",
      name: "Metronome",
      waveOutlineColor: '#E0EFF1',
    },
    {
      src: "https://www.inkid.org/ALL.mp3",
      name: "All",
      waveOutlineColor: '#E0EEF1',
    },
    {
      src: "https://www.inkid.org/Bass.mp3",
      name: "Bass",
    },
    // {
    //   src: "https://www.inkid.org/Cello.mp3",
    //   name: "Cello",
    // },
    // {
    //   src: "https://www.inkid.org/Drums.mp3",
    //   name: "Drums",
    // },
    // {
    //   src: "http://www.inkid.org/EG%20DJ.mp3",
    //   name: "EG DJ",
    // },
    // {
    //   src: "https://www.inkid.org/EG-T.mp3",
    //   name: "EG T",
    // },
    // {
    //   src: "https://www.inkid.org/Keys.mp3",
    //   name: "Keys",
    // },
    // {
    //   src: "https://www.inkid.org/Piano.mp3",
    //   name: "Piano",
    // },
    // {
    //   src: "https://www.inkid.org/Synth Bass.mp3",
    //   name: "Synth Bass",
    // },
    // {
    //   src: "http://www.inkid.org/Trumpet 201.mp3",
    //   name: "Trumpet 1",
    // },
    // {
    //   src: "http://www.inkid.org/Trumpet 202.mp3",
    //   name: "Trumpet 2",
    // },
    // {
    //   src: "http://www.inkid.org/Violin.mp3",
    //   name: "Violin",
    // },
  ])
  .then(function () {
    //can do stuff with the playlist.
  });
