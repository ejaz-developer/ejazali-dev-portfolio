import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITestimonial extends Document {
  clientName: string;
  clientTitle: string;
  clientCompany?: string;
  clientImage?: string;
  content: string;
  rating: number;
  projectId?: mongoose.Types.ObjectId;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    clientName: {
      type: String,
      required: true,
    },
    clientTitle: {
      type: String,
      required: true,
    },
    clientCompany: {
      type: String,
    },
    clientImage: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;
