import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      en: {
        type: String,
        required: true,
        trim: true,
      },
      kn: {
        type: String,
        required: true,
        trim: true,
      },
    },

    description: {
      en: {
        type: String,
        required: true,
        trim: true,
      },
      kn: {
        type: String,
        required: true,
        trim: true,
      },
    },

    location: {
      en: {
        type: String,
        required: true,
        trim: true,
      },
      kn: {
        type: String,
        required: true,
        trim: true,
      },
    },

    venue: {
      en: {
        type: String,
        required: true,
        trim: true,
      },
      kn: {
        type: String,
        required: true,
        trim: true,
      },
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    bookingUrl: {
      type: String,
      required: true,
      trim: true,
    },

    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;