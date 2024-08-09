/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
function renderPerson (outStream, person) {
  outStream.write(`<p>${person.name}</p>`)
  renderPhoto(outStream, person.photo)
  emitPhotoData(outStream, person.photo)
}

function listRecentPhotos (outStream, photos) {
  photos
    .filter(p => p.date > recentDateCutoff())
    .forEach(p => {
      outStream.write('<div>\n')
      emitPhotoData(outStream, p)
      outStream.write('</div>\n')
    })
}

function emitPhotoData (outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>`)
  outStream.write(`<p>location: ${photo.location}</p>`)
  outStream.write(`<p>date: ${photo, date.toDateString()}</p>`)
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
function renderPerson (outStream, person) {
  outStream.write(`<p>${person.name}</p>`)
  renderPhoto(outStream, person.photo)
  emitPhotoData(outStream, person.photo)
  outStream.write(`<p>location: ${photo.location}</p>`)
}

function listRecentPhotos (outStream, photos) {
  photos
    .filter(p => p.date > recentDateCutoff())
    .forEach(p => {
      outStream.write('<div>\n')
      emitPhotoData(outStream, p)
      outStream.write(`<p>location: ${photo.location}</p>`)
      outStream.write('</div>\n')
    })
}

function emitPhotoData (outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>`)
  outStream.write(`<p>date: ${photo, date.toDateString()}</p>`)
}
