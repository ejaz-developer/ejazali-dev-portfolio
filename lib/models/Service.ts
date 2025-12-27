import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
  popular: boolean;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
      default: 'Code2',
    },
    features: [
      {
        type: String,
      },
    ],
    color: {
      type: String,
      default: 'from-blue-500 to-cyan-500',
    },
    popular: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Service: Model<IService> =
  mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
