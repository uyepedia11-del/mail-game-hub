import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { MailInterface } from "@/components/Mail/MailInterface";
import { GamingMarketplace } from "@/components/Gaming/GamingMarketplace";
import { BlogSection } from "@/components/Blog/BlogSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("mail");

  const renderContent = () => {
    switch (activeTab) {
      case "mail":
        return <MailInterface />;
      case "gaming":
        return <GamingMarketplace />;
      case "blog":
        return <BlogSection />;
      default:
        return <MailInterface />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default Index;
