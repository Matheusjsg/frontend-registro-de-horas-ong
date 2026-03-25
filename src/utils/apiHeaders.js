/**
 * Cria headers com autenticação validada
 * @param {string} token - Token JWT
 * @returns {object} Headers com Authorization
 * @throws {Error} Se token for inválido
 */
export const getAuthHeaders = (token) => {
  if (!token || typeof token !== 'string' || token.trim() === '') {
    throw new Error('Token de autenticação inválido ou ausente');
  }
  
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
};

/**
 * Cria headers simples com token opcional
 * @param {string} token - Token JWT (opcional)
 * @returns {object} Headers
 */
export const getHeaders = (token) => {
  if (!token || typeof token !== 'string' || token.trim() === '') {
    return {
      'Content-Type': 'application/json'
    };
  }
  
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
};
