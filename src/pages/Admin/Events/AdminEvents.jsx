import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Building2,
  Link as LinkIcon,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Pencil,
  X,
  LogOut,
} from "lucide-react";

import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../../../api/eventApi";

const initialFormData = {
  titleEn: "",
  titleKn: "",
  descriptionEn: "",
  descriptionKn: "",
  locationEn: "",
  locationKn: "",
  venueEn: "",
  venueKn: "",
  date: "",
  time: "",
  bookingUrl: "",
  image: "",
  isVisible: true,
};

const AdminEvents = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [editingEventId, setEditingEventId] = useState(null);

  const [formData, setFormData] = useState(initialFormData);

  // =========================
  // FETCH EVENTS
  // =========================
  useEffect(() => {
    let ignore = false;

    const fetchEvents = async () => {
      try {
        const data = await getEvents();

        if (!ignore) {
          setEvents(data);
          setError("");
        }
      } catch (err) {
        console.error(err);

        if (!ignore) {
          setError(
            "Unable to load events. Please make sure the backend server is running."
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchEvents();

    return () => {
      ignore = true;
    };
  }, []);

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    navigate("/admin/login", { replace: true });
  };

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================
  // BUILD EVENT DATA
  // =========================
  const buildEventData = () => {
    return {
      title: {
        en: formData.titleEn,
        kn: formData.titleKn,
      },

      description: {
        en: formData.descriptionEn,
        kn: formData.descriptionKn,
      },

      location: {
        en: formData.locationEn,
        kn: formData.locationKn,
      },

      venue: {
        en: formData.venueEn,
        kn: formData.venueKn,
      },

      date: formData.date,
      time: formData.time,
      bookingUrl: formData.bookingUrl,
      image: formData.image,
      isVisible: formData.isVisible,
    };
  };

  // =========================
  // RESET FORM
  // =========================
  const resetForm = () => {
    setFormData(initialFormData);
    setEditingEventId(null);
  };

  // =========================
  // CREATE / UPDATE EVENT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      setError("");

      const eventData = buildEventData();

      if (editingEventId) {
        // UPDATE EXISTING EVENT
        const response = await updateEvent(
          editingEventId,
          eventData
        );

        setEvents((previous) =>
          previous.map((event) =>
            event._id === editingEventId
              ? response.event
              : event
          )
        );

        resetForm();
      } else {
        // CREATE NEW EVENT
        const response = await createEvent(eventData);

        setEvents((previous) => [
          ...previous,
          response.event,
        ]);

        resetForm();
      }
    } catch (err) {
      console.error(err);

      setError(
        editingEventId
          ? "Unable to update the event. Please make sure the backend and database are connected."
          : "Unable to create the event. Please make sure the backend and database are connected."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // =========================
  // EDIT EVENT
  // =========================
  const handleEdit = (event) => {
    setEditingEventId(event._id);

    setFormData({
      titleEn: event.title?.en || "",
      titleKn: event.title?.kn || "",

      descriptionEn: event.description?.en || "",
      descriptionKn: event.description?.kn || "",

      locationEn: event.location?.en || "",
      locationKn: event.location?.kn || "",

      venueEn: event.venue?.en || "",
      venueKn: event.venue?.kn || "",

      date: event.date || "",
      time: event.time || "",
      bookingUrl: event.bookingUrl || "",
      image: event.image || "",
      isVisible: event.isVisible ?? true,
    });

    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // DELETE EVENT
  // =========================
  const handleDeleteEvent = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");

      await deleteEvent(id);

      setEvents((previous) =>
        previous.filter((event) => event._id !== id)
      );

      if (editingEventId === id) {
        resetForm();
      }
    } catch (err) {
      console.error(err);
      setError("Unable to delete the event.");
    }
  };

  return (
    <main className="min-h-screen bg-[#fffdf8] px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================= */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b87821]">
              Rangadarshana
            </p>

            <h1 className="mt-3 font-serif text-4xl font-bold text-[#18213b] md:text-5xl">
              Event Management
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-[#596176]">
              Create and manage upcoming theatre events, performance
              details and booking information.
            </p>
          </div>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#a34732] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7f3424] hover:shadow-md"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>

        {/* =========================
            ERROR
        ========================= */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {/* =========================
            CREATE / EDIT EVENT
        ========================= */}
        <section className="rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm md:p-8">

          {/* Form Header */}
          <div className="mb-7 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff2d8] text-[#b87821]">
              {editingEventId ? (
                <Pencil size={22} />
              ) : (
                <Plus size={22} />
              )}
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#18213b]">
                {editingEventId
                  ? "Edit Event"
                  : "Create Event"}
              </h2>

              <p className="mt-1 text-sm text-[#7a8190]">
                {editingEventId
                  ? "Update the details of this theatre event."
                  : "Add a new upcoming theatre event."}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >

            {/* =========================
                ENGLISH TITLE
            ========================= */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#30384e]">
                Event Title — English
              </label>

              <input
                type="text"
                name="titleEn"
                value={formData.titleEn}
                onChange={handleChange}
                required
                placeholder="Enter English title"
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                KANNADA TITLE
            ========================= */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#30384e]">
                Event Title — Kannada
              </label>

              <input
                type="text"
                name="titleKn"
                value={formData.titleKn}
                onChange={handleChange}
                required
                placeholder="ಕನ್ನಡ ಶೀರ್ಷಿಕೆ ನಮೂದಿಸಿ"
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                ENGLISH DESCRIPTION
            ========================= */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#30384e]">
                Description — English
              </label>

              <textarea
                name="descriptionEn"
                value={formData.descriptionEn}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Enter English description"
                className="w-full resize-none rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                KANNADA DESCRIPTION
            ========================= */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#30384e]">
                Description — Kannada
              </label>

              <textarea
                name="descriptionKn"
                value={formData.descriptionKn}
                onChange={handleChange}
                required
                rows="4"
                placeholder="ಕನ್ನಡ ವಿವರಣೆ ನಮೂದಿಸಿ"
                className="w-full resize-none rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                ENGLISH LOCATION
            ========================= */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#30384e]">
                <MapPin size={16} />
                Location — English
              </label>

              <input
                type="text"
                name="locationEn"
                value={formData.locationEn}
                onChange={handleChange}
                required
                placeholder="Bengaluru, Karnataka"
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                KANNADA LOCATION
            ========================= */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#30384e]">
                <MapPin size={16} />
                Location — Kannada
              </label>

              <input
                type="text"
                name="locationKn"
                value={formData.locationKn}
                onChange={handleChange}
                required
                placeholder="ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ"
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                ENGLISH VENUE
            ========================= */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#30384e]">
                <Building2 size={16} />
                Venue — English
              </label>

              <input
                type="text"
                name="venueEn"
                value={formData.venueEn}
                onChange={handleChange}
                required
                placeholder="Rangadarshana Theatre"
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                KANNADA VENUE
            ========================= */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#30384e]">
                <Building2 size={16} />
                Venue — Kannada
              </label>

              <input
                type="text"
                name="venueKn"
                value={formData.venueKn}
                onChange={handleChange}
                required
                placeholder="ರಂಗದರ್ಶನ ರಂಗಮಂದಿರ"
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                DATE
            ========================= */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#30384e]">
                <CalendarDays size={16} />
                Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                TIME
            ========================= */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#30384e]">
                <Clock3 size={16} />
                Time
              </label>

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                BOOKING URL
            ========================= */}
            <div className="md:col-span-2">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#30384e]">
                <LinkIcon size={16} />
                Booking URL
              </label>

              <input
                type="url"
                name="bookingUrl"
                value={formData.bookingUrl}
                onChange={handleChange}
                required
                placeholder="https://in.bookmyshow.com/..."
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                IMAGE URL
            ========================= */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-[#30384e]">
                Event Image URL
              </label>

              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="w-full rounded-xl border border-[#ddd4c7] px-4 py-3 outline-none focus:border-[#c77a16] focus:ring-2 focus:ring-[#c77a16]/20"
              />
            </div>

            {/* =========================
                VISIBILITY
            ========================= */}
            <div className="md:col-span-2">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  name="isVisible"
                  checked={formData.isVisible}
                  onChange={handleChange}
                  className="h-5 w-5 accent-[#c77a16]"
                />

                <span className="flex items-center gap-2 text-sm font-semibold text-[#30384e]">
                  {formData.isVisible ? (
                    <Eye size={17} />
                  ) : (
                    <EyeOff size={17} />
                  )}

                  Display this event on the public Events page
                </span>
              </label>
            </div>

            {/* =========================
                SUBMIT BUTTONS
            ========================= */}
            <div className="flex flex-wrap gap-3 md:col-span-2">

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-[#e97900] px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#c96300] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {editingEventId ? (
                  <Pencil size={19} />
                ) : (
                  <Plus size={19} />
                )}

                {submitting
                  ? editingEventId
                    ? "Updating Event..."
                    : "Creating Event..."
                  : editingEventId
                  ? "Update Event"
                  : "Create Event"}
              </button>

              {/* Cancel Edit */}
              {editingEventId && (
                <button
                  type="button"
                  onClick={resetForm}
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d8cbbb] bg-white px-7 py-3.5 font-semibold text-[#596176] shadow-sm transition hover:bg-[#fff8ee] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <X size={19} />
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </section>

        {/* =========================
            MANAGE EVENTS
        ========================= */}
        <section className="mt-10">

          <div className="mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#18213b]">
              Manage Events
            </h2>

            <p className="mt-1 text-sm text-[#7a8190]">
              View, edit and delete events stored in the system.
            </p>
          </div>

          {loading ? (
            <div className="rounded-2xl border border-[#eadfce] bg-white px-6 py-14 text-center">
              <p className="text-sm font-medium text-[#7a8190]">
                Loading events...
              </p>
            </div>
          ) : events.length > 0 ? (
            <div className="space-y-4">

              {events.map((event) => (
                <div
                  key={event._id}
                  className="flex flex-col gap-5 rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
                >

                  {/* Event Information */}
                  <div>

                    <h3 className="font-serif text-xl font-bold text-[#18213b]">
                      {event.title?.en}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#596176]">

                      <span className="flex items-center gap-1">
                        <MapPin size={15} />
                        {event.location?.en}
                      </span>

                      <span className="flex items-center gap-1">
                        <Building2 size={15} />
                        {event.venue?.en}
                      </span>

                      <span className="flex items-center gap-1">
                        <CalendarDays size={15} />
                        {event.date}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock3 size={15} />
                        {event.time}
                      </span>

                    </div>

                    {/* Visibility Status */}
                    <div className="mt-3">

                      {event.isVisible ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          <Eye size={14} />
                          Visible on website
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                          <EyeOff size={14} />
                          Hidden from website
                        </span>
                      )}

                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex shrink-0 flex-wrap gap-3">

                    {/* Edit */}
                    <button
                      type="button"
                      onClick={() => handleEdit(event)}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8cbbb] bg-white px-5 py-2.5 text-sm font-semibold text-[#596176] transition hover:border-[#c77a16] hover:bg-[#fff8ee] hover:text-[#a65d00]"
                    >
                      <Pencil size={17} />
                      Edit
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() =>
                        handleDeleteEvent(event._id)
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      <Trash2 size={17} />
                      Delete
                    </button>

                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="rounded-2xl border border-[#eadfce] bg-white px-6 py-14 text-center">
              <p className="text-sm font-medium text-[#7a8190]">
                No events found.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default AdminEvents;