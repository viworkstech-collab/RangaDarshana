const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/events";

export const getEvents = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
};

export const createEvent = async (eventData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error("Failed to create event");
  }

  return response.json();
};

export const updateEvent = async (eventId, eventData) => {
  const response = await fetch(`${API_URL}/${eventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error("Failed to update event");
  }

  return response.json();
};

export const deleteEvent = async (eventId) => {
  const response = await fetch(`${API_URL}/${eventId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete event");
  }

  return response.json();
};