const KEY = "81fd797e6bad4104709650b5a9e5c500"

export async function getURL(file) {
  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${KEY}`, {
    method: "POST",
    body: formData,
  })
  const { data: { url } } = await res.json();

  return url
}