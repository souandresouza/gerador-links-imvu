async function generateTryOnLink() {
  const productIds = document.getElementById('product-ids').value;
  if (!productIds) {
    alert("Por favor, insira os IDs dos produtos.");
    return;
  }

  const response = await fetch(`http://localhost:3000/generate-tryon-link?ids=${productIds}`);
  const data = await response.json();

  const imageContainer = document.getElementById('image-container');
  const tryOnImage = document.getElementById('try-on-image');
  tryOnImage.src = data.tryOnLink;
  imageContainer.style.display = 'block';
}

function saveImage() {
  const tryOnImage = document.getElementById('try-on-image');
  const link = document.createElement('a');
  link.href = tryOnImage.src;
  link.download = 'try-on-imvu.png';
  link.click();
}