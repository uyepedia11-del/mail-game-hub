import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  User, 
  MessageCircle, 
  Heart, 
  Share2,
  BookOpen,
  TrendingUp,
  Clock,
  Eye
} from "lucide-react";
import blogHeroImage from "@/assets/blog-hero.jpg";

export const BlogSection = () => {
  const featuredArticles = [
    {
      id: "1",
      title: "The Ultimate Guide to Gaming Account Security",
      excerpt: "Learn essential tips to protect your gaming accounts from hackers and maintain your digital assets safely...",
      author: "Alex Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Security",
      image: blogHeroImage,
      views: 1234,
      likes: 89,
      comments: 23,
      featured: true,
    },
    {
      id: "2", 
      title: "Top 10 Gaming Platforms to Watch in 2024",
      excerpt: "Discover the emerging gaming platforms that are revolutionizing the industry and creating new opportunities...",
      author: "Sarah Martinez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Gaming",
      image: blogHeroImage,
      views: 892,
      likes: 67,
      comments: 15,
      featured: false,
    },
    {
      id: "3",
      title: "How to Build Your Perfect Gaming Setup on a Budget",
      excerpt: "Create an amazing gaming experience without breaking the bank with these smart purchasing decisions...",
      author: "Mike Johnson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Hardware",
      image: blogHeroImage,
      views: 1567,
      likes: 134,
      comments: 45,
      featured: true,
    },
    {
      id: "4",
      title: "The Future of Cross-Platform Gaming",
      excerpt: "Exploring how cross-platform compatibility is changing the way we play and connect with other gamers...",
      author: "Emma Wilson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Technology",
      image: blogHeroImage,
      views: 756,
      likes: 92,
      comments: 18,
      featured: false,
    },
  ];

  const categories = [
    { name: "Gaming", count: 45, color: "primary" },
    { name: "Security", count: 23, color: "destructive" },
    { name: "Hardware", count: 18, color: "success" },
    { name: "Technology", count: 34, color: "warning" },
    { name: "Reviews", count: 29, color: "secondary" },
  ];

  const trendingTopics = [
    "Gaming Account Security",
    "Cross-Platform Gaming", 
    "Steam Deck Reviews",
    "Gaming Laptops 2024",
    "Indie Game Spotlight",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blogHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gradient mb-6 animate-fade-in">
              Gaming Insights & Articles
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              Stay updated with the latest gaming trends, security tips, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="glow">
                <BookOpen className="w-5 h-5 mr-2" />
                Read Latest Articles
              </Button>
              <Button variant="outline" size="lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Trending Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="glass hover:glow-strong transition-all duration-300 group overflow-hidden">
                    <div className="relative">
                      <div 
                        className="w-full h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${article.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      {article.featured && (
                        <Badge className="absolute top-4 left-4 animate-glow">
                          Featured
                        </Badge>
                      )}
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 right-4"
                      >
                        {article.category}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <h3 className="text-lg font-semibold group-hover:text-gradient transition-all duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {article.excerpt}
                      </p>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            {article.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {article.date}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {article.views}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {article.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            {article.comments}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-3 h-3" />
                        </Button>
                      </div>

                      <Button className="w-full" variant="outline">
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card className="glass">
              <CardHeader>
                <h3 className="font-semibold">Categories</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <Button variant="ghost" size="sm" className="justify-start p-0">
                        {category.name}
                      </Button>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="glass">
              <CardHeader>
                <h3 className="font-semibold">Trending Topics</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="glass glow">
              <CardHeader>
                <h3 className="font-semibold">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Get the latest gaming insights delivered to your inbox
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm focus-ring"
                  />
                  <Button className="w-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};