import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tips Mengoptimalkan Performa Gaming Setup",
      excerpt: "Panduan lengkap untuk meningkatkan performa gaming setup Anda dengan budget terbatas.",
      author: "Admin AkunStarter",
      date: "15 Sep 2025",
      category: "Gaming Tips",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Review Game Terbaru: Tips & Trik",
      excerpt: "Review mendalam tentang game-game terbaru dan strategi untuk menguasainya.",
      author: "Gaming Expert",
      date: "12 Sep 2025",
      category: "Review",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Komunitas Gaming: Cara Bergabung dan Manfaatnya",
      excerpt: "Mengapa bergabung dengan komunitas gaming bisa meningkatkan pengalaman bermain Anda.",
      author: "Community Manager",
      date: "10 Sep 2025",
      category: "Community",
      readTime: "6 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">AkunStarter Blog</h1>
            <p className="text-muted-foreground">Tips, review, dan panduan seputar gaming</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Login
            </Button>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Ingin bergabung dengan komunitas gaming kami?
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/community">
              <Button>Lihat Komunitas</Button>
            </Link>
            <Link to="/store">
              <Button variant="outline">Kunjungi Store</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;