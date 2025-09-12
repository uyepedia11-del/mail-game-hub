import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApiAuth } from "@/hooks/useApiAuth";
import { useInbox } from "@/hooks/useInbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Inbox as InboxIcon, 
  LogOut,
  Search,
  Filter,
  MoreVertical,
  Clock,
  RefreshCw,
  Mail
} from "lucide-react";

export default function Inbox() {
  const [selectedMail, setSelectedMail] = useState<string | null>(null);
  const { user, logout } = useApiAuth();
  const { emails, loading, error, refreshInbox, markAsRead } = useInbox();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleEmailClick = (emailId: string) => {
    setSelectedMail(emailId);
    markAsRead(emailId);
  };

  const selectedEmail = emails.find(email => email.id === selectedMail);
  const unreadCount = emails.filter(email => !email.read).length;

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gradient">Akunstarter Webmail Hub</h1>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              {user.username}
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={refreshInbox} disabled={loading}>
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline ml-2">Refresh</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline ml-2">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-5rem)]">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-64 border-r border-border bg-card/30 p-4">
          <div className="space-y-2">
            <Button
              variant="secondary"
              className="w-full justify-start"
            >
              <InboxIcon className="w-4 h-4 mr-3" />
              Inbox
              {unreadCount > 0 && (
                <Badge variant="default" className="ml-auto">
                  {unreadCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between p-2 border-b border-border bg-card/30">
          <div className="flex items-center space-x-2">
            <InboxIcon className="w-4 h-4" />
            <span className="font-medium">Inbox</span>
            {unreadCount > 0 && (
              <Badge variant="default" className="h-4 w-4 flex items-center justify-center p-0 text-xs">
                {unreadCount}
              </Badge>
            )}
          </div>
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

          {/* Error Display */}
          {error && (
            <div className="p-4">
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Loading emails...</p>
              </div>
            </div>
          )}

          {/* Email List */}
          {!loading && (
            <div className="flex-1 overflow-y-auto">
              {emails.length === 0 ? (
                <div className="flex-1 flex items-center justify-center p-4">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No emails</h3>
                    <p className="text-sm text-muted-foreground">
                      Your inbox is empty
                    </p>
                  </div>
                </div>
              ) : (
                emails.map((email) => (
                  <div
                    key={email.id}
                    className={`p-3 lg:p-4 border-b border-border cursor-pointer hover:bg-muted/30 transition-colors ${
                      selectedMail === email.id ? 'bg-muted/50' : ''
                    } ${!email.read ? 'font-medium' : ''}`}
                    onClick={() => handleEmailClick(email.id)}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <span className={`text-sm ${!email.read ? 'font-semibold' : ''} truncate`}>
                        {email.sender}
                      </span>
                      <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                        <span className="text-xs text-muted-foreground">
                          {new Date(email.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <h4 className={`text-sm mb-1 ${!email.read ? 'font-medium' : ''} line-clamp-1`}>
                      {email.subject}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {email.preview}
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      {!email.read && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Email Content */}
        <div className="flex-1 bg-background hidden lg:block">
          {selectedEmail ? (
            <div className="h-full flex flex-col">
              {/* Email Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">
                    {selectedEmail.subject}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <span>From: {selectedEmail.sender}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(selectedEmail.date).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Email Body */}
              <div className="flex-1 p-6 overflow-y-auto">
                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-foreground whitespace-pre-wrap">
                        {selectedEmail.content || selectedEmail.preview}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-4">
              <div className="text-center">
                <InboxIcon className="w-12 h-12 lg:w-16 lg:h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-base lg:text-lg font-medium mb-2">Select an email</h3>
                <p className="text-sm lg:text-base text-muted-foreground">
                  Choose an email from your inbox to read its contents
                </p>
              </div>
            </div>
          )}
          
          {/* Mobile Email View */}
          {selectedEmail && (
            <div className="lg:hidden fixed inset-0 bg-background z-50 flex flex-col">
              {/* Mobile Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={() => setSelectedMail(null)}>
                  ← Back
                </Button>
              </div>
              
              {/* Mobile Email Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <h2 className="text-lg font-semibold mb-4">
                  {selectedEmail.subject}
                </h2>
                <div className="text-sm text-muted-foreground mb-4">
                  <div>From: {selectedEmail.sender}</div>
                  <div>{new Date(selectedEmail.date).toLocaleString()}</div>
                </div>
                
                <Card className="glass">
                  <CardContent className="p-4">
                    <div className="space-y-4 text-sm">
                      <p className="whitespace-pre-wrap">
                        {selectedEmail.content || selectedEmail.preview}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}