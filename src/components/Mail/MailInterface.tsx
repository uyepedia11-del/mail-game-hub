import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Inbox, 
  Send, 
  Star, 
  Trash2, 
  Archive, 
  Plus,
  Search,
  Filter,
  MoreVertical,
  Paperclip,
  Clock
} from "lucide-react";

export const MailInterface = () => {
  const [selectedMail, setSelectedMail] = useState<string | null>(null);
  const [selectedFolder, setSelectedFolder] = useState("inbox");

  const folders = [
    { id: "inbox", label: "Inbox", icon: Inbox, count: 12 },
    { id: "starred", label: "Starred", icon: Star, count: 3 },
    { id: "archive", label: "Archive", icon: Archive, count: 0 },
    { id: "trash", label: "Trash", icon: Trash2, count: 0 },
  ];

  const emails = [
    {
      id: "1",
      from: "Gaming Store",
      subject: "Your Steam Account Credits are Ready!",
      preview: "Your requested Steam wallet credits have been processed and are now available...",
      time: "2m ago",
      unread: true,
      starred: false,
      hasAttachment: false,
    },
    {
      id: "2",
      from: "Epic Games",
      subject: "New Game Available - 50% Off This Week",
      preview: "Don't miss out on the latest releases with exclusive discounts...",
      time: "1h ago",
      unread: true,
      starred: true,
      hasAttachment: false,
    },
    {
      id: "3",
      from: "Game News Daily",
      subject: "Weekly Gaming Roundup",
      preview: "This week's highlights: New releases, patch notes, and community events...",
      time: "2h ago",
      unread: false,
      starred: false,
      hasAttachment: true,
    },
    {
      id: "4",
      from: "Account Support",
      subject: "Your account verification is complete",
      preview: "Welcome! Your gaming account has been successfully verified...",
      time: "1d ago",
      unread: false,
      starred: false,
      hasAttachment: false,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] bg-background">
      {/* Sidebar - Hidden on mobile, shown as drawer */}
      <div className="hidden lg:block lg:w-64 border-r border-border bg-card/30 p-4">
        {/* Gaming Promotion Card */}
        <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <h3 className="text-sm font-semibold mb-2 flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Gaming Store
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Premium gaming accounts & credits available
          </p>
          <Button size="sm" variant="outline" className="w-full text-xs">
            Browse Accounts
          </Button>
        </div>
        
        <div className="space-y-2">
          {folders.map((folder) => (
            <Button
              key={folder.id}
              variant={selectedFolder === folder.id ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedFolder(folder.id)}
            >
              <folder.icon className="w-4 h-4 mr-3" />
              {folder.label}
              {folder.count > 0 && (
                <Badge variant="secondary" className="ml-auto">
                  {folder.count}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Mobile Folder Bar */}
      <div className="lg:hidden flex overflow-x-auto p-2 border-b border-border bg-card/30 space-x-2">
        {folders.map((folder) => (
          <Button
            key={folder.id}
            variant={selectedFolder === folder.id ? "secondary" : "ghost"}
            size="sm"
            className="flex-shrink-0"
            onClick={() => setSelectedFolder(folder.id)}
          >
            <folder.icon className="w-4 h-4 mr-2" />
            {folder.label}
            {folder.count > 0 && (
              <Badge variant="secondary" className="ml-2 h-4 w-4 flex items-center justify-center p-0 text-xs">
                {folder.count}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Email List */}
      <div className="w-full lg:w-96 border-r border-border bg-card/20 flex flex-col">
        {/* Search and Filter */}
        <div className="p-3 lg:p-4 border-b border-border">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search emails..."
              className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus-ring"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {emails.length} messages
            </span>
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Email List */}
        <div className="flex-1 overflow-y-auto">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`p-3 lg:p-4 border-b border-border cursor-pointer hover:bg-muted/30 transition-colors ${
                selectedMail === email.id ? 'bg-muted/50' : ''
              } ${email.unread ? 'font-medium' : ''}`}
              onClick={() => setSelectedMail(email.id)}
            >
              <div className="flex items-start justify-between mb-1">
                <span className={`text-sm ${email.unread ? 'font-semibold' : ''} truncate`}>
                  {email.from}
                </span>
                <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                  <span className="text-xs text-muted-foreground">
                    {email.time}
                  </span>
                  {email.starred && (
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  )}
                </div>
              </div>
              <h4 className={`text-sm mb-1 ${email.unread ? 'font-medium' : ''} line-clamp-1`}>
                {email.subject}
              </h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {email.preview}
              </p>
              <div className="flex items-center mt-2 space-x-2">
                {email.hasAttachment && (
                  <Paperclip className="w-3 h-3 text-muted-foreground" />
                )}
                {email.unread && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 bg-background hidden lg:block">
        {selectedMail ? (
          <div className="h-full flex flex-col">
            {/* Email Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  Your Steam Account Credits are Ready!
                </h2>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Star className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Archive className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <span>From: gaming@store.com</span>
                  <span>•</span>
                  <span>To: you@example.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>2 minutes ago</span>
                </div>
              </div>
            </div>

            {/* Email Body */}
            <div className="flex-1 p-6 overflow-y-auto">
              <Card className="glass">
                <CardContent className="p-6">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-foreground mb-4">
                      Hello,
                    </p>
                    <p className="text-foreground mb-4">
                      Great news! Your Steam account credits are now available. You can use these credits to purchase any games, DLC, or in-game items from our extensive gaming marketplace.
                    </p>
                    <p className="text-foreground mb-4">
                      <strong>Credit Amount:</strong> $50.00<br />
                      <strong>Expiry Date:</strong> Never expires<br />
                      <strong>Account ID:</strong> #GS789456123
                    </p>
                    <p className="text-foreground mb-6">
                      Visit our gaming section to browse the latest titles and exclusive offers available for purchase with your credits.
                    </p>
                    <Button className="glow">
                      Visit Gaming Store
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions Section - Read Only */}
            <div className="p-4 lg:p-6 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" className="flex-1">Mark as Read</Button>
                <Button variant="outline" className="flex-1">Archive</Button>
                <Button variant="outline" className="flex-1">Delete</Button>
              </div>
              
              {/* Gaming CTA */}
              <div className="mt-4 p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                <p className="text-xs text-muted-foreground mb-2">
                  🎮 Interested in gaming? Check our marketplace
                </p>
                <Button size="sm" variant="ghost" className="text-xs">
                  View Gaming Accounts →
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center p-4">
            <div className="text-center">
              <Inbox className="w-12 h-12 lg:w-16 lg:h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-base lg:text-lg font-medium mb-2">Select an email</h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                Choose an email from your inbox to read its contents
              </p>
            </div>
          </div>
        )}
        
        {/* Mobile Email View */}
        {selectedMail && (
          <div className="lg:hidden fixed inset-0 bg-background z-50 flex flex-col">
            {/* Mobile Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={() => setSelectedMail(null)}>
                ← Back
              </Button>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Star className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Mobile Email Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <h2 className="text-lg font-semibold mb-4">
                Your Steam Account Credits are Ready!
              </h2>
              <div className="text-sm text-muted-foreground mb-4">
                <div>From: gaming@store.com</div>
                <div>2 minutes ago</div>
              </div>
              
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="space-y-4 text-sm">
                    <p>Hello,</p>
                    <p>Great news! Your Steam account credits are now available.</p>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <div><strong>Credit Amount:</strong> $50.00</div>
                      <div><strong>Account ID:</strong> #GS789456123</div>
                    </div>
                    <Button className="w-full glow">
                      Visit Gaming Store
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Mobile Actions Section */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2 mb-3">
                <Button variant="outline" className="flex-1">Archive</Button>
                <Button variant="outline" className="flex-1">Delete</Button>
              </div>
              
              {/* Mobile Gaming CTA */}
              <div className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                <p className="text-xs text-muted-foreground mb-2">
                  🎮 Gaming accounts available
                </p>
                <Button size="sm" variant="ghost" className="w-full text-xs">
                  Browse Marketplace →
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};