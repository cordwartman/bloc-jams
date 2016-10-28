var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

var albumMarconi = {
    title: 'The Telepone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};

var albumTurisas = {
    title: 'Stand Up and Fight',
    artist: 'Turisas',
    label: 'Century Media',
    year: '2011',
    albumArtUrl: 'assets/images/album_covers/turisas.jpg',
    songs: [
        { title: 'The March of the Varangian Guard', duration: '3:51' },
        { title: 'Take the Day!', duration: '5:26' },
        { title: 'Hunting Pirates!', duration: '3:43'},
        { title: 'Venetoi! - Prasinoi!', duration: '3:49' },
        { title: 'Stand Up and Fight', duration: '5:27'},
        { title: 'The Great Escape', duration: '4:51'},
        { title: 'Fear the Fear', duration: '6:13'},
        { title: 'End of an Empire', duration: '7:13'},
        { title: 'The Bosphorus Freezes Over', duration: '5:37'}
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template = 
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
      ;
 
     return template;
 };

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
        
var setCurrentAlbum = function(album) {
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    albumSongList.innerHTML = '';
    
    for (var i=0; i<album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration); 
    }
};

window.onload = function () {
    setCurrentAlbum(albumPicasso);

    var albums = [albumPicasso, albumMarconi, albumTurisas];
    var index = 1;
    albumImage.addEventListener('click', function(event) {
        setCurrentAlbum(albums[index]);
        index++;
        if (index == albums.length) {
        index = 0;
        }
    });
};