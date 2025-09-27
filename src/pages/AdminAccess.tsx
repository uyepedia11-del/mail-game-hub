import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function AdminAccess() {
  const [adminCode, setAdminCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    setLoading(true);
    
    // Check for admin bypass code (demo: admin123)
    if (adminCode === "admin123") {
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("adminBypass", "true");
      
      toast({
        title: "Admin Access Granted",
        description: "You now have admin privileges to access the mailbox.",
      });
      
      navigate("/inbox");
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid admin access code.",
        variant: "destructive",
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
          <CardDescription>
            Enter admin access code to bypass authentication
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter admin access code"
              value={adminCode}
              onChange={(e) => setAdminCode(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAdminAccess()}
            />
          </div>
          
          <Button 
            onClick={handleAdminAccess} 
            className="w-full" 
            disabled={loading || !adminCode.trim()}
          >
            {loading ? "Verifying..." : "Access Mailbox"}
          </Button>
          
          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/login")}
              className="text-sm"
            >
              ← Back to Login
            </Button>
          </div>
          
          <div className="text-xs text-gray-500 text-center border-t pt-4">
            <p>Demo admin code: admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}