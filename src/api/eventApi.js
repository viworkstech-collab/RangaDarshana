const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const EVENTS_URL = `${API_URL}/api/events`;

const getAuthHeaders = () => {
  const token = localStorage.getItem("adminToken");

  return {
    Authorization: `Bearer ${token}`,
  };
};

// Get events - public
export const getEvents = async () => {
  const response = await fetch(EVENTS_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
};

// Create event - admin only
export const createEvent = async (eventData) => {
  const response = await fetch(EVENTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Failed to create event");
  }

  return response.json();
};

// Update event - admin only
export const updateEvent = async (eventId, eventData) => {
  const response = await fetch(`${EVENTS_URL}/${eventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Failed to update event");
  }

  return response.json();
};

// Delete event - admin only
export const deleteEvent = async (eventId) => {
  const response = await fetch(`${EVENTS_URL}/${eventId}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeaders(),
    },
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || "Failed to delete event");
  }

  return response.json();
};