import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useApiAuth } from "@/hooks/useApiAuth";
import { Eye, EyeOff, Mail, Lock, LogIn, Loader2 } from "lucide-react";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { user, login } = useApiAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to inbox if already authenticated
    if (user) {
      navigate("/inbox");
    }
  }, [user, navigate]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setUsername(email);
    
    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setEmailError("");

    // Validate email format
    if (!validateEmail(username)) {
      setEmailError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    const result = await login(username, password);
    
    if (result.success) {
      navigate("/inbox");
    } else {
      setError(result.error || "Invalid username or password. Please try again.");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent rounded-full animate-pulse"></div>
      </div>

      <Card className="w-full max-w-md glass animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <h1 className="text-3xl font-bold text-gradient mb-2">Akunstarter Webmail Hub</h1>
            <p className="text-sm text-muted-foreground">
              Professional email interface
            </p>
          </div>
          <CardTitle className="text-xl">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="username"
                  type="email"
                  placeholder="Enter your email address"
                  value={username}
                  onChange={handleEmailChange}
                  className={`pl-10 transition-all duration-200 focus:scale-[1.02] ${
                    emailError ? "border-destructive focus:border-destructive" : ""
                  }`}
                  required
                  disabled={loading}
                />
              </div>
              {emailError && (
                <p className="text-destructive text-sm animate-fade-in">{emailError}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 transition-all duration-200 focus:scale-[1.02]"
                  required
                  disabled={loading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-accent/50 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive" className="animate-fade-in">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" 
              disabled={loading || !!emailError || !username || !password}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </form>

          {/* Test Credentials */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border animate-fade-in">
            <h4 className="text-sm font-medium mb-3 flex items-center">
              🧪 Demo Credentials
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-mono bg-background px-2 py-1 rounded">test@akunstarter.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Password:</span>
                <span className="font-mono bg-background px-2 py-1 rounded">test123</span>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full mt-3 text-xs transition-all duration-200 hover:scale-[1.02]"
              onClick={() => {
                setUsername("test@akunstarter.com");
                setPassword("test123");
                setEmailError("");
              }}
              disabled={loading}
            >
              Fill Demo Credentials
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Use these credentials to test the interface
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}