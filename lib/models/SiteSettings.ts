import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISiteSettings extends Document {
  siteName: string;
  siteTagline: string;
  ownerName: string;
  ownerTitle: string;
  ownerBio: string;
  ownerImage?: string;
  email: string;
  phone?: string;
  location?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  heroTypingTexts: string[];
  availableForWork: boolean;
  resumeUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SiteSettingsSchema = new Schema<ISiteSettings>(
  {
    siteName: {
      type: String,
      default: 'DevForge',
    },
    siteTagline: {
      type: String,
      default: 'Crafting Digital Excellence',
    },
    ownerName: {
      type: String,
      default: 'Ejaz Ali',
    },
    ownerTitle: {
      type: String,
      default: 'Full-Stack Developer',
    },
    ownerBio: {
      type: String,
      default: 'I craft exceptional digital experiences that help businesses grow.',
    },
    ownerImage: {
      type: String,
    },
    email: {
      type: String,
      default: 'ejaz@devforge.dev',
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
      default: 'Skardu, Pakistan',
    },
    socialLinks: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      youtube: { type: String },
    },
    heroTypingTexts: [
      {
        type: String,
      },
    ],
    availableForWork: {
      type: Boolean,
      default: true,
    },
    resumeUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const SiteSettings: Model<ISiteSettings> =
  mongoose.models.SiteSettings || mongoose.model<ISiteSettings>('SiteSettings', SiteSettingsSchema);

export default SiteSettings;
