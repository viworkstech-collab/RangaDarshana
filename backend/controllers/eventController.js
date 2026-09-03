import Event from "../models/Event.js";

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });

    res.status(200).json(events);
  } catch (error) {
    console.error("Get events error:", error);

    res.status(500).json({
      message: "Failed to fetch events",
    });
  }
};

export const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      venue,
      date,
      time,
      image,
      bookingUrl,
      isVisible,
    } = req.body;

    const event = await Event.create({
      title,
      description,
      location,
      venue,
      date,
      time,
      image,
      bookingUrl,
      isVisible,
    });

    res.status(201).json({
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.error("Create event error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid event data",
      });
    }

    res.status(500).json({
      message: "Failed to create event",
    });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      location,
      venue,
      date,
      time,
      image,
      bookingUrl,
      isVisible,
    } = req.body;

    const event = await Event.findByIdAndUpdate(
      id,
      {
        title,
        description,
        location,
        venue,
        date,
        time,
        bookingUrl,
        image,
        isVisible,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      message: "Event updated successfully",
      event,
    });
  } catch (error) {
    console.error("Update event error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid event data",
      });
    }

    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid event ID",
      });
    }

    res.status(500).json({
      message: "Failed to update event",
    });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("Delete event error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid event ID",
      });
    }

    res.status(500).json({
      message: "Failed to delete event",
    });
  }
};