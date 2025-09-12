import { useState, useEffect } from "react";

interface Email {
  id: string;
  subject: string;
  sender: string;
  date: string;
  preview?: string;
  content?: string;
  read?: boolean;
}

const API_BASE_URL = "https://api.akunstarter.com";

export function useInbox() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInbox = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`${API_BASE_URL}/inbox`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("authToken");
          throw new Error("Session expired. Please login again.");
        }
        throw new Error(`Failed to fetch emails: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Map the API response to our Email interface
      const mappedEmails: Email[] = (data.emails || data || []).map((email: any) => ({
        id: email.id || Math.random().toString(),
        subject: email.subject || "No Subject",
        sender: email.sender || email.from || "Unknown Sender",
        date: email.date || email.timestamp || new Date().toISOString(),
        preview: email.preview || email.snippet || email.content?.substring(0, 100),
        content: email.content || email.body,
        read: email.read || false,
      }));

      setEmails(mappedEmails);
    } catch (error) {
      console.error("Failed to fetch inbox:", error);
      setError(error instanceof Error ? error.message : "Failed to fetch emails");
      
      // Fallback to mock data for demo purposes if API fails
      setEmails([
        {
          id: "1",
          subject: "Welcome to Akunstarter Webmail",
          sender: "noreply@akunstarter.com",
          date: new Date().toISOString(),
          preview: "Welcome to your new webmail interface. This is a demo email to show the functionality.",
          content: "Welcome to Akunstarter Webmail Hub. This interface connects to your backend API to display your emails in a clean, professional format.",
          read: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInbox();
  }, []);

  const refreshInbox = () => {
    fetchInbox();
  };

  const markAsRead = (emailId: string) => {
    setEmails(prev => 
      prev.map(email => 
        email.id === emailId ? { ...email, read: true } : email
      )
    );
  };

  return {
    emails,
    loading,
    error,
    refreshInbox,
    markAsRead,
  };
}