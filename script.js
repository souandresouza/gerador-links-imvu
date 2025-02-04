// Função para processar o link e extrair os IDs
function processarLink() {
  // 1. Pegar o link do input
  const linkInput = document.getElementById('linkInput');
  const link = linkInput.value.trim();
  if (!link) {
      alert('Por favor, insira um link.');
      return;
  }
  // 2. Extrair IDs de produtos do link
  const regexProduto = /(?:productId=)([^&\?]+)/;
  const matchProduto = link.match(regexProduto);
  if (!matchProduto) {
      alert('Formato de link inválido.');
      return;
  }
  const idsStr = matchProduto[1];
  const idsProduto = idsStr.split(/[+,]/).map(id => id.trim()); // Separar por '+' ou ','
  
  // 3. Criar o link combinado para image_dressup
  const idsCombinados = idsProduto.join(','); // Concatenar IDs com vírgulas
  const linkDressUp = `https://api.imvu.com/image_dressup/${idsCombinados}?width=750&height=1300`;
  
  // 4. Exibir o link combinado na página
  const idsExtraidosDiv = document.getElementById('idsExtraidos');
  idsExtraidosDiv.innerHTML = `
      <p>Link Gerado:<br><a href="${linkDressUp}" target="_blank">${linkDressUp}</a></p>
      <button onclick="copiarLinkDressUp()">Copiar Link</button>
  `;
  
  // 5. Registrar log
  const logsDiv = document.getElementById('logs');
  const dataHora = new Date().toLocaleString();
  const logEntry = document.createElement('p');
  logEntry.textContent = `${dataHora} - IDs de produtos extraídos: ${idsProduto.length} (${idsProduto.join(', ')})`;
  logsDiv.appendChild(logEntry);
  
  // 6. Limpar o input
  linkInput.value = '';
}

// Função para copiar o link combinado para a área de transferência
function copiarLinkDressUp() {
  // 1. Pegar o link gerado
  const idsExtraidosDiv = document.getElementById('idsExtraidos');
  const linkGerado = idsExtraidosDiv.querySelector('a').href;
  
  // 2. Copiar para a área de transferência
  navigator.clipboard.writeText(linkGerado)
      .then(() => {
          alert('Link copiado para a área de transferência!');
      })
      .catch(() => {
          alert('Erro ao copiar o link.');
      });
}