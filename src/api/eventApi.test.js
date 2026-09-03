import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "./eventApi";

const mockLocalStorage = {
  store: {},

  getItem(key) {
    return this.store[key] || null;
  },

  setItem(key, value) {
    this.store[key] = String(value);
  },

  removeItem(key) {
    delete this.store[key];
  },

  clear() {
    this.store = {};
  },
};

vi.stubGlobal("localStorage", mockLocalStorage);

describe("Event API", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("should fetch events successfully", async () => {
    const mockEvents = [
      {
        _id: "1",
        title: {
          en: "Test Event",
          kn: "ಪರೀಕ್ಷಾ ಕಾರ್ಯಕ್ರಮ",
        },
      },
    ];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockEvents,
      })
    );

    const result = await getEvents();

    expect(fetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API_URL}/api/events`
    );

    expect(result).toEqual(mockEvents);
  });

  it("should send admin token when creating an event", async () => {
    const eventData = {
      title: {
        en: "Test Event",
        kn: "ಪರೀಕ್ಷಾ ಕಾರ್ಯಕ್ರಮ",
      },
    };

    localStorage.setItem("adminToken", "test-admin-token");

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          message: "Event created",
        }),
      })
    );

    await createEvent(eventData);

    expect(fetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API_URL}/api/events`,
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: "Bearer test-admin-token",
        }),
      })
    );
  });

  it("should send admin token when updating an event", async () => {
    const eventId = "event-123";

    const eventData = {
      title: {
        en: "Updated Event",
        kn: "ನವೀಕರಿಸಿದ ಕಾರ್ಯಕ್ರಮ",
      },
    };

    localStorage.setItem("adminToken", "test-admin-token");

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          message: "Event updated",
        }),
      })
    );

    await updateEvent(eventId, eventData);

    expect(fetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API_URL}/api/events/${eventId}`,
      expect.objectContaining({
        method: "PUT",
        headers: expect.objectContaining({
          Authorization: "Bearer test-admin-token",
        }),
      })
    );
  });

  it("should send admin token when deleting an event", async () => {
    const eventId = "event-123";

    localStorage.setItem("adminToken", "test-admin-token");

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          message: "Event deleted",
        }),
      })
    );

    await deleteEvent(eventId);

    expect(fetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API_URL}/api/events/${eventId}`,
      expect.objectContaining({
        method: "DELETE",
        headers: expect.objectContaining({
          Authorization: "Bearer test-admin-token",
        }),
      })
    );
  });
});