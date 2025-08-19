import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ShoppingCart, 
  Gamepad2, 
  Trophy, 
  Users,
  TrendingUp,
  Clock,
  Shield
} from "lucide-react";
import gamingHeroImage from "@/assets/gaming-hero.jpg";
import gameAccountsImage from "@/assets/game-accounts.jpg";

export const GamingMarketplace = () => {
  const featuredGames = [
    {
      id: "1",
      title: "Steam Account - Premium",
      platform: "Steam",
      price: "$25.99",
      originalPrice: "$39.99",
      discount: "35%",
      rating: 4.8,
      reviews: 156,
      games: 25,
      level: 45,
      featured: true,
    },
    {
      id: "2",
      title: "Epic Games Account",
      platform: "Epic Games",
      price: "$19.99",
      originalPrice: "$29.99",
      discount: "33%",
      rating: 4.6,
      reviews: 89,
      games: 12,
      level: 23,
      featured: false,
    },
    {
      id: "3",
      title: "PlayStation Plus Account",
      platform: "PlayStation",
      price: "$45.99",
      originalPrice: "$59.99",
      discount: "23%",
      rating: 4.9,
      reviews: 234,
      games: 50,
      level: 67,
      featured: true,
    },
    {
      id: "4",
      title: "Xbox Game Pass Ultimate",
      platform: "Xbox",
      price: "$35.99",
      originalPrice: "$49.99",
      discount: "28%",
      rating: 4.7,
      reviews: 178,
      games: 35,
      level: 52,
      featured: false,
    },
  ];

  const categories = [
    { name: "Steam Accounts", count: 145, icon: "🎮" },
    { name: "Epic Games", count: 89, icon: "🚀" },
    { name: "PlayStation", count: 67, icon: "🎯" },
    { name: "Xbox", count: 92, icon: "🎪" },
    { name: "Origin", count: 34, icon: "⭐" },
    { name: "Battle.net", count: 23, icon: "⚔️" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${gamingHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6 animate-fade-in">
              Premium Gaming Accounts
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              Discover verified gaming accounts with exclusive content, achievements, and premium features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="glow">
                <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Browse Accounts
              </Button>
              <Button variant="outline" size="lg">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Verification Process
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse by Platform</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="glass hover:glow transition-all duration-300 cursor-pointer">
                <CardContent className="p-3 lg:p-4 text-center">
                  <div className="text-xl lg:text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-xs lg:text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} accounts</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Accounts */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Accounts</h2>
            <Button variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {featuredGames.map((game) => (
              <Card key={game.id} className="glass hover:glow-strong transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant={game.featured ? "default" : "secondary"}>
                      {game.platform}
                    </Badge>
                    {game.featured && (
                      <Badge variant="destructive" className="animate-glow">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-gradient transition-all duration-300">
                    {game.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="w-full h-32 bg-cover bg-center rounded-lg mb-4"
                    style={{ backgroundImage: `url(${gameAccountsImage})` }}
                  />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{game.rating}</span>
                        <span className="text-xs text-muted-foreground">({game.reviews})</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Level {game.level}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Gamepad2 className="w-3 h-3 mr-1" />
                        {game.games} games
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {game.reviews} reviews
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-success">{game.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {game.originalPrice}
                        </span>
                      </div>
                      <Badge variant="destructive">
                        -{game.discount}
                      </Badge>
                    </div>

                    <Button className="w-full glow">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-12">
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Verified Accounts</p>
            </CardContent>
          </Card>
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">10K+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </CardContent>
          </Card>
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-muted-foreground">Support Available</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};