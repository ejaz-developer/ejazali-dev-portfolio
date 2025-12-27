import mongoose, { Schema, Document, Model } from 'mongoose';

export type ProjectStatus = 'pending' | 'in-progress' | 'review' | 'completed' | 'on-hold';
export type ProjectPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface IMilestone {
  title: string;
  description?: string;
  dueDate?: Date;
  completed: boolean;
  completedAt?: Date;
}

export interface IProject extends Document {
  title: string;
  description: string;
  clientId: mongoose.Types.ObjectId;
  status: ProjectStatus;
  priority: ProjectPriority;
  progress: number;
  startDate: Date;
  estimatedEndDate?: Date;
  actualEndDate?: Date;
  technologies: string[];
  milestones: IMilestone[];
  features: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  notes?: string;
  attachments: string[];
  createdAt: Date;
  updatedAt: Date;
}

const MilestoneSchema = new Schema<IMilestone>(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    completed: { type: Boolean, default: false },
    completedAt: { type: Date },
  },
  { _id: false },
);

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'review', 'completed', 'on-hold'],
      default: 'pending',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
      default: 'medium',
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    estimatedEndDate: {
      type: Date,
    },
    actualEndDate: {
      type: Date,
    },
    technologies: [
      {
        type: String,
      },
    ],
    milestones: [MilestoneSchema],
    features: [
      {
        type: String,
      },
    ],
    liveUrl: {
      type: String,
    },
    repositoryUrl: {
      type: String,
    },
    notes: {
      type: String,
    },
    attachments: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
