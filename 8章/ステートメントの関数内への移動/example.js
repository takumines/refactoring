/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */

// 写真データ用のHTMLを生成するコード
function renderPerson (outStream, person) {
  const result = []
  result.push(`<p>${person.name}</p>`)
  result.push(renderPhoto(person.photo))
  result.push(`<p>title: ${person.photo.title}</p>`)
  result.push(emitPhotoData(person.photo))

  return result.join('\n')
}

function photoDiv (p) {
  return [
    '<div>',
    `<p>title: ${p.title}</p>`,
    emitPhotoData(p),
    '</div>'
  ].join('\n')
}

function emitPhotoData (aPhoto) {
  const result = []
  result.push(`<p>location: ${aPhoto.location}</p>`)
  result.push(`<p>date: ${aPhoto, date.toDateString()}</p>`)
  return result.join('\n')
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
function renderPerson (outStream, person) {
  const result = []
  result.push(`<p>${person.name}</p>`)
  result.push(renderPhoto(person.photo))
  result.push(emitPhotoData(person.photo))
  return result.join('\n')
}

function photoDiv (aPhoto) {
  return [
    '<div>',
    emitPhotoData(aPhoto),
    '</div>'
  ].join('\n')
}

function emitPhotoData (aPhoto) {
  const result = [
    `<p>title: ${aPhoto.title}</p>`,
    `<p>location: ${aPhoto.location}</p>`,
    `<p>date: ${aPhoto, date.toDateString()}</p>`
  ].join('\n')
}
