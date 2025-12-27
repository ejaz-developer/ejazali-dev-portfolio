import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MessageSquare, Send, Clock, CheckCheck, Mail } from 'lucide-react';

// Mock data - In production, fetch from MongoDB
const messages = [
  {
    id: '1',
    subject: 'Project Update - E-Commerce Platform',
    content:
      'Hi! I wanted to update you on the progress of your e-commerce platform. We have completed the authentication system and product management modules. Currently working on the shopping cart functionality.',
    sender: 'Ejaz Ali',
    senderRole: 'developer',
    timestamp: '2024-01-25T10:30:00',
    status: 'read',
    projectTitle: 'E-Commerce Platform',
  },
  {
    id: '2',
    subject: 'Welcome to DevForge!',
    content:
      "Thank you for choosing DevForge for your project development needs. I'm excited to work with you on bringing your vision to life. Feel free to reach out anytime with questions or updates.",
    sender: 'Ejaz Ali',
    senderRole: 'developer',
    timestamp: '2024-01-20T14:00:00',
    status: 'read',
    projectTitle: null,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

  if (diffInHours < 24) {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  } else if (diffInHours < 168) {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export default function MessagesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white)] font-mono">
          <span className="text-[var(--orange-web)]">Messages</span>
        </h1>
        <p className="text-[var(--platinum)]/60 mt-2">
          Communicate with the developer about your projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-[var(--white)] font-mono flex items-center gap-2">
                <Mail className="w-5 h-5 text-[var(--orange-web)]" />
                Inbox
              </CardTitle>
              <CardDescription className="text-[var(--platinum)]/60">
                {messages.length} messages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 text-[var(--platinum)]/30 mx-auto mb-4" />
                  <p className="text-[var(--platinum)]/60">No messages yet</p>
                  <p className="text-[var(--platinum)]/40 text-sm mt-1">
                    Start a conversation using the form below
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className="p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/5 hover:border-[var(--orange-web)]/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-[var(--white)] truncate">
                            {message.subject}
                          </h3>
                          {message.projectTitle && (
                            <Badge
                              variant="outline"
                              className="bg-[var(--orange-web)]/10 text-[var(--orange-web)] border-[var(--orange-web)]/30 text-xs shrink-0"
                            >
                              {message.projectTitle}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-[var(--platinum)]/70 line-clamp-2">
                          {message.content}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs text-[var(--platinum)]/50">
                            From: {message.sender}
                          </span>
                          <Badge
                            variant="outline"
                            className="bg-blue-500/10 text-blue-400 border-blue-500/30 text-xs"
                          >
                            Developer
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-xs text-[var(--platinum)]/50 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDate(message.timestamp)}
                        </span>
                        {message.status === 'read' && (
                          <CheckCheck className="w-4 h-4 text-blue-400" />
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* Compose Message */}
        <div>
          <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm sticky top-24">
            <CardHeader>
              <CardTitle className="text-[var(--white)] font-mono flex items-center gap-2">
                <Send className="w-5 h-5 text-[var(--orange-web)]" />
                New Message
              </CardTitle>
              <CardDescription className="text-[var(--platinum)]/60">
                Send a message to the developer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-[var(--platinum)]">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="Enter message subject..."
                  className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] placeholder:text-[var(--platinum)]/40 focus:border-[var(--orange-web)]/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[var(--platinum)]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  rows={6}
                  className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] placeholder:text-[var(--platinum)]/40 focus:border-[var(--orange-web)]/50 resize-none"
                />
              </div>
              <Button className="w-full bg-[var(--orange-web)] hover:bg-[var(--orange-web)]/90 text-[var(--black)] font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
