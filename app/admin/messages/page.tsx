'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MessageSquare, Search, MailOpen, Reply, Trash2, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  _id: string;
  sender: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImage?: string;
  };
  recipient: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  subject: string;
  content: string;
  read: boolean;
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyDialogOpen, setReplyDialogOpen] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const fetchMessages = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
      toast.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const markAsRead = async (messageId: string) => {
    try {
      await fetch(`/api/admin/messages/${messageId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: true }),
      });
      fetchMessages();
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  };

  const handleViewMessage = (message: Message) => {
    setSelectedMessage(message);
    if (!message.read) {
      markAsRead(message._id);
    }
  };

  const handleReply = async () => {
    if (!selectedMessage || !replyContent.trim()) return;

    try {
      const response = await fetch('/api/admin/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientId: selectedMessage.sender._id,
          subject: `Re: ${selectedMessage.subject}`,
          content: replyContent,
        }),
      });

      if (response.ok) {
        toast.success('Reply sent!');
        setReplyDialogOpen(false);
        setReplyContent('');
        setSelectedMessage(null);
        fetchMessages();
      } else {
        toast.error('Failed to send reply');
      }
    } catch (error) {
      console.error('Failed to send reply:', error);
      toast.error('Failed to send reply');
    }
  };

  const handleDelete = async (messageId: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`/api/admin/messages/${messageId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Message deleted!');
        if (selectedMessage?._id === messageId) {
          setSelectedMessage(null);
        }
        fetchMessages();
      } else {
        toast.error('Failed to delete message');
      }
    } catch (error) {
      console.error('Failed to delete message:', error);
      toast.error('Failed to delete message');
    }
  };

  const filteredMessages = messages.filter((message) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      message.subject.toLowerCase().includes(searchLower) ||
      message.sender.firstName.toLowerCase().includes(searchLower) ||
      message.sender.lastName.toLowerCase().includes(searchLower) ||
      message.sender.email.toLowerCase().includes(searchLower) ||
      message.content.toLowerCase().includes(searchLower)
    );
  });

  const unreadCount = messages.filter((m) => !m.read).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--orange-web)]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[var(--white)]">Messages</h2>
          <p className="text-[var(--platinum)]/60 mt-1">View and respond to client messages</p>
        </div>
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <Badge className="bg-[var(--orange-web)] text-white">{unreadCount} Unread</Badge>
          )}
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--platinum)]/40" />
        <Input
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Messages List */}
        <div className="space-y-3">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((message, index) => (
              <motion.div
                key={message._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className={`bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm cursor-pointer transition-all hover:border-[var(--orange-web)]/30 ${
                    selectedMessage?._id === message._id
                      ? 'border-[var(--orange-web)]/50 ring-1 ring-[var(--orange-web)]/20'
                      : ''
                  } ${!message.read ? 'bg-[var(--orange-web)]/5' : ''}`}
                  onClick={() => handleViewMessage(message)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={message.sender.profileImage} />
                          <AvatarFallback className="bg-gradient-to-br from-[var(--orange-web)] to-red-500 text-white text-sm">
                            {message.sender.firstName?.[0]}
                            {message.sender.lastName?.[0]}
                          </AvatarFallback>
                        </Avatar>
                        {!message.read && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--orange-web)] rounded-full border-2 border-[var(--oxford-blue)]" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4
                            className={`font-medium truncate ${
                              !message.read ? 'text-[var(--white)]' : 'text-[var(--platinum)]'
                            }`}
                          >
                            {message.sender.firstName} {message.sender.lastName}
                          </h4>
                          <span className="text-xs text-[var(--platinum)]/40 whitespace-nowrap">
                            {new Date(message.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p
                          className={`text-sm truncate mt-1 ${
                            !message.read
                              ? 'text-[var(--white)]/80 font-medium'
                              : 'text-[var(--platinum)]/60'
                          }`}
                        >
                          {message.subject}
                        </p>
                        <p className="text-xs text-[var(--platinum)]/40 truncate mt-1">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="p-4 rounded-full bg-[var(--oxford-blue)]/50 mb-4">
                  <MessageSquare className="h-8 w-8 text-[var(--platinum)]/60" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--white)] mb-2">No Messages</h3>
                <p className="text-[var(--platinum)]/60 text-center max-w-sm">
                  {searchTerm
                    ? 'No messages match your search.'
                    : 'Messages from clients will appear here.'}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Message Detail */}
        {selectedMessage ? (
          <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm sticky top-6">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={selectedMessage.sender.profileImage} />
                    <AvatarFallback className="bg-gradient-to-br from-[var(--orange-web)] to-red-500 text-white">
                      {selectedMessage.sender.firstName?.[0]}
                      {selectedMessage.sender.lastName?.[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-[var(--white)]">
                      {selectedMessage.sender.firstName} {selectedMessage.sender.lastName}
                    </h3>
                    <p className="text-sm text-[var(--platinum)]/60">
                      {selectedMessage.sender.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-[var(--platinum)]/60 hover:text-[var(--orange-web)]"
                    onClick={() => setReplyDialogOpen(true)}
                  >
                    <Reply className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-[var(--platinum)]/60 hover:text-red-500"
                    onClick={() => handleDelete(selectedMessage._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-[var(--platinum)]/60">
                  <Clock className="h-4 w-4" />
                  {new Date(selectedMessage.createdAt).toLocaleString()}
                </div>

                <div className="p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/5">
                  <h4 className="text-lg font-semibold text-[var(--white)] mb-3">
                    {selectedMessage.subject}
                  </h4>
                  <p className="text-[var(--platinum)]/80 whitespace-pre-wrap leading-relaxed">
                    {selectedMessage.content}
                  </p>
                </div>

                <Button
                  onClick={() => setReplyDialogOpen(true)}
                  className="w-full bg-gradient-to-r from-[var(--orange-web)] to-red-500 hover:opacity-90"
                >
                  <Reply className="h-4 w-4 mr-2" />
                  Reply to Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm sticky top-6">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="p-4 rounded-full bg-[var(--oxford-blue)]/50 mb-4">
                <MailOpen className="h-8 w-8 text-[var(--platinum)]/60" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Select a Message</h3>
              <p className="text-[var(--platinum)]/60 text-center max-w-sm">
                Click on a message from the list to view its contents.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Reply Dialog */}
      <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
        <DialogContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20 text-[var(--white)]">
          <DialogHeader>
            <DialogTitle>Reply to Message</DialogTitle>
            <DialogDescription className="text-[var(--platinum)]/60">
              Send a reply to {selectedMessage?.sender.firstName} {selectedMessage?.sender.lastName}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="p-3 rounded-lg bg-[var(--black)]/30 border border-[var(--platinum)]/10">
              <p className="text-sm text-[var(--platinum)]/60">Re: {selectedMessage?.subject}</p>
            </div>
            <Textarea
              placeholder="Type your reply..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="bg-[var(--black)]/50 border-[var(--platinum)]/20 min-h-[150px]"
            />
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setReplyDialogOpen(false)}
                className="border-[var(--platinum)]/20 text-[var(--platinum)] hover:bg-[var(--platinum)]/10"
              >
                Cancel
              </Button>
              <Button
                onClick={handleReply}
                disabled={!replyContent.trim()}
                className="bg-gradient-to-r from-[var(--orange-web)] to-red-500 hover:opacity-90"
              >
                Send Reply
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
