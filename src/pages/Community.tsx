import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, MessageCircle, Trophy, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const communities = [
    {
      id: 1,
      name: "Mobile Legends Pro League",
      description: "Komunitas pro player Mobile Legends dengan tips strategi dan turnamen mingguan",
      members: 2456,
      category: "MOBA",
      level: "Pro",
      activeNow: 156,
      features: ["Tournament", "Coaching", "Strategy Guide"],
      image: "🎮"
    },
    {
      id: 2,
      name: "PUBG Mobile Squad",
      description: "Tim squad PUBG Mobile untuk ranked match dan custom room tournament",
      members: 1834,
      category: "Battle Royale",
      level: "Intermediate",
      activeNow: 89,
      features: ["Squad Formation", "Training", "Tournament"],
      image: "🔫"
    },
    {
      id: 3,
      name: "Free Fire Indonesia",
      description: "Komunitas Free Fire terbesar di Indonesia dengan event harian",
      members: 3421,
      category: "Battle Royale",
      level: "All Levels",
      activeNow: 234,
      features: ["Daily Events", "Giveaway", "Beginner Guide"],
      image: "🔥"
    },
    {
      id: 4,
      name: "Genshin Impact Guild",
      description: "Guild Genshin Impact untuk co-op domain dan sharing build character",
      members: 1567,
      category: "RPG",
      level: "All Levels",
      activeNow: 67,
      features: ["Co-op Play", "Build Guide", "Event Planning"],
      image: "⚔️"
    },
    {
      id: 5,
      name: "Valorant Esports",
      description: "Komunitas Valorant competitive dengan focus pada improvement skill",
      members: 892,
      category: "FPS",
      level: "Competitive",
      activeNow: 45,
      features: ["Aim Training", "Strategy", "Team Formation"],
      image: "🎯"
    },
    {
      id: 6,
      name: "FIFA Mobile League",
      description: "Liga FIFA Mobile dengan season tournament dan trading tips",
      members: 654,
      category: "Sports",
      level: "All Levels",
      activeNow: 32,
      features: ["League Match", "Trading Tips", "Team Building"],
      image: "⚽"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Pro": return "bg-red-500/10 text-red-500 border-red-500/20";
      case "Competitive": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Intermediate": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default: return "bg-green-500/10 text-green-500 border-green-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Gaming Communities</h1>
            <p className="text-muted-foreground">Bergabung dengan komunitas gaming terbaik Indonesia</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Login
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">12K+</p>
                  <p className="text-sm text-muted-foreground">Total Members</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Gamepad2 className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-sm text-muted-foreground">Active Communities</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Trophy className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">48</p>
                  <p className="text-sm text-muted-foreground">Tournaments</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">623</p>
                  <p className="text-sm text-muted-foreground">Online Now</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Communities Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <Card key={community.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{community.image}</div>
                    <div>
                      <CardTitle className="text-lg">{community.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">{community.category}</Badge>
                    </div>
                  </div>
                  <Badge className={getLevelColor(community.level)}>
                    {community.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {community.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{community.members.toLocaleString()} members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">{community.activeNow} online</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {community.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full gap-2">
                  <Users className="h-4 w-4" />
                  Join Community
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Ingin membuat komunitas sendiri atau butuh bantuan?
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/blog">
              <Button variant="outline">Baca Panduan</Button>
            </Link>
            <Link to="/store">
              <Button variant="outline">Lihat Store</Button>
            </Link>
            <Button>
              <MessageCircle className="h-4 w-4 mr-2" />
              Hubungi Admin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;