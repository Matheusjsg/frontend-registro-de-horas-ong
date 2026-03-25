import { API_BASE_URL } from '../utils/constants';
import { getAuthHeaders } from '../utils/apiHeaders';

const profileAPI = `${API_BASE_URL}/volunteer/profile`;

const parseResponseBody = async (response) => {
  const text = await response.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};

export const fetchVolunteerProfile = async (token) => {
  const response = await fetch(profileAPI, {
    headers: getAuthHeaders(token)
  });

  const data = await parseResponseBody(response);

  if (!response.ok) {
    throw new Error(data?.message || 'Erro ao carregar perfil');
  }

  return data;
};

export const saveVolunteerProfile = async (profileData, token) => {
  const response = await fetch(profileAPI, {
    method: 'PUT',
    headers: getAuthHeaders(token),
    body: JSON.stringify(profileData)
  });

  const data = await parseResponseBody(response);

  if (!response.ok) {
    throw new Error(data?.message || 'Erro ao salvar perfil');
  }

  return data;
};

export const fetchVolunteerProfileById = async (volunteerId, token) => {
  const response = await fetch(`${API_BASE_URL}/volunteer/profile/${volunteerId}`, {
    headers: getAuthHeaders(token)
  });

  const data = await parseResponseBody(response);

  if (!response.ok) {
    throw new Error(data?.message || 'Erro ao carregar perfil');
  }

  return data;
};
